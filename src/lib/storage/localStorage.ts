import { 
  User, 
  Interest, 
  Snapshot, 
  StorageOperations,
  EqualizerScores,
  createEqualizerScores 
} from '../../types/storage';

/**
 * LocalStorage implementation of the storage operations
 * Good for development and MVP - all data stays in browser
 */
export class LocalStorageService implements StorageOperations {
  private readonly USERS_KEY = 'luvbox_users';
  private readonly INTERESTS_KEY = 'luvbox_interests';
  private readonly SNAPSHOTS_KEY = 'luvbox_snapshots';

  // User operations
  async createUser(userData: Omit<User, 'id' | 'createdAt' | 'updatedAt' | 'interests'>): Promise<User> {
    const users = this.getUsers();
    const newUser: User = {
      ...userData,
      id: this.generateId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      interests: []
    };
    
    users.push(newUser);
    this.saveUsers(users);
    return newUser;
  }

  async getUserById(id: string): Promise<User | null> {
    const users = this.getUsers();
    const user = users.find(u => u.id === id) || null;
    
    if (user) {
      // Populate interests
      user.interests = await this.getInterestsByUserId(id);
    }
    
    return user;
  }

  async updateUser(id: string, updates: Partial<Omit<User, 'id' | 'createdAt'>>): Promise<User> {
    const users = this.getUsers();
    const userIndex = users.findIndex(u => u.id === id);
    
    if (userIndex === -1) {
      throw new Error(`User with id ${id} not found`);
    }
    
    users[userIndex] = {
      ...users[userIndex],
      ...updates,
      updatedAt: new Date()
    };
    
    this.saveUsers(users);
    return users[userIndex];
  }

  async deleteUser(id: string): Promise<boolean> {
    const users = this.getUsers();
    const filteredUsers = users.filter(u => u.id !== id);
    
    if (filteredUsers.length === users.length) {
      return false; // User not found
    }
    
    // Also delete all interests and snapshots for this user
    const interests = await this.getInterestsByUserId(id);
    for (const interest of interests) {
      await this.deleteInterest(interest.id);
    }
    
    this.saveUsers(filteredUsers);
    return true;
  }

  // Interest operations
  async createInterest(userId: string, interestData: Omit<Interest, 'id' | 'userId' | 'createdAt' | 'updatedAt' | 'snapshots'>): Promise<Interest> {
    const interests = this.getInterests();
    const newInterest: Interest = {
      ...interestData,
      id: this.generateId(),
      userId,
      createdAt: new Date(),
      updatedAt: new Date(),
      snapshots: []
    };
    
    interests.push(newInterest);
    this.saveInterests(interests);
    return newInterest;
  }

  async getInterestsByUserId(userId: string): Promise<Interest[]> {
    const interests = this.getInterests().filter(i => i.userId === userId);
    
    // Populate snapshots for each interest
    for (const interest of interests) {
      interest.snapshots = await this.getSnapshotsByInterestId(interest.id);
    }
    
    return interests;
  }

  async getInterestById(id: string): Promise<Interest | null> {
    const interests = this.getInterests();
    const interest = interests.find(i => i.id === id) || null;
    
    if (interest) {
      interest.snapshots = await this.getSnapshotsByInterestId(id);
    }
    
    return interest;
  }

  async updateInterest(id: string, updates: Partial<Omit<Interest, 'id' | 'userId' | 'createdAt'>>): Promise<Interest> {
    const interests = this.getInterests();
    const interestIndex = interests.findIndex(i => i.id === id);
    
    if (interestIndex === -1) {
      throw new Error(`Interest with id ${id} not found`);
    }
    
    interests[interestIndex] = {
      ...interests[interestIndex],
      ...updates,
      updatedAt: new Date()
    };
    
    this.saveInterests(interests);
    return interests[interestIndex];
  }

  async deleteInterest(id: string): Promise<boolean> {
    const interests = this.getInterests();
    const filteredInterests = interests.filter(i => i.id !== id);
    
    if (filteredInterests.length === interests.length) {
      return false; // Interest not found
    }
    
    // Also delete all snapshots for this interest
    const snapshots = this.getSnapshots();
    const filteredSnapshots = snapshots.filter(s => s.interestId !== id);
    this.saveSnapshots(filteredSnapshots);
    
    this.saveInterests(filteredInterests);
    return true;
  }

  // Snapshot operations
  async createSnapshot(interestId: string, snapshotData: Omit<Snapshot, 'id' | 'interestId' | 'createdAt'>): Promise<Snapshot> {
    const snapshots = this.getSnapshots();
    const newSnapshot: Snapshot = {
      ...snapshotData,
      id: this.generateId(),
      interestId,
      createdAt: new Date()
    };
    
    snapshots.push(newSnapshot);
    this.saveSnapshots(snapshots);
    return newSnapshot;
  }

  async getSnapshotsByInterestId(interestId: string): Promise<Snapshot[]> {
    return this.getSnapshots()
      .filter(s => s.interestId === interestId)
      .sort((a, b) => b.date.getTime() - a.date.getTime()); // Most recent first
  }

  async getSnapshotById(id: string): Promise<Snapshot | null> {
    return this.getSnapshots().find(s => s.id === id) || null;
  }

  async updateSnapshot(id: string, updates: Partial<Omit<Snapshot, 'id' | 'interestId' | 'createdAt'>>): Promise<Snapshot> {
    const snapshots = this.getSnapshots();
    const snapshotIndex = snapshots.findIndex(s => s.id === id);
    
    if (snapshotIndex === -1) {
      throw new Error(`Snapshot with id ${id} not found`);
    }
    
    snapshots[snapshotIndex] = {
      ...snapshots[snapshotIndex],
      ...updates
    };
    
    this.saveSnapshots(snapshots);
    return snapshots[snapshotIndex];
  }

  async deleteSnapshot(id: string): Promise<boolean> {
    const snapshots = this.getSnapshots();
    const filteredSnapshots = snapshots.filter(s => s.id !== id);
    
    if (filteredSnapshots.length === snapshots.length) {
      return false; // Snapshot not found
    }
    
    this.saveSnapshots(filteredSnapshots);
    return true;
  }

  // Private helper methods
  private getUsers(): User[] {
    const data = localStorage.getItem(this.USERS_KEY);
    if (!data) return [];
    
    const users = JSON.parse(data);
    // Convert date strings back to Date objects
    return users.map((user: any) => ({
      ...user,
      dateOfBirth: new Date(user.dateOfBirth),
      createdAt: new Date(user.createdAt),
      updatedAt: new Date(user.updatedAt)
    }));
  }

  private saveUsers(users: User[]): void {
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
  }

  private getInterests(): Interest[] {
    const data = localStorage.getItem(this.INTERESTS_KEY);
    if (!data) return [];
    
    const interests = JSON.parse(data);
    return interests.map((interest: any) => ({
      ...interest,
      createdAt: new Date(interest.createdAt),
      updatedAt: new Date(interest.updatedAt)
    }));
  }

  private saveInterests(interests: Interest[]): void {
    localStorage.setItem(this.INTERESTS_KEY, JSON.stringify(interests));
  }

  private getSnapshots(): Snapshot[] {
    const data = localStorage.getItem(this.SNAPSHOTS_KEY);
    if (!data) return [];
    
    const snapshots = JSON.parse(data);
    return snapshots.map((snapshot: any) => ({
      ...snapshot,
      date: new Date(snapshot.date),
      createdAt: new Date(snapshot.createdAt)
    }));
  }

  private saveSnapshots(snapshots: Snapshot[]): void {
    localStorage.setItem(this.SNAPSHOTS_KEY, JSON.stringify(snapshots));
  }

  private generateId(): string {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  }

  // Utility method for development/testing
  clearAllData(): void {
    localStorage.removeItem(this.USERS_KEY);
    localStorage.removeItem(this.INTERESTS_KEY);
    localStorage.removeItem(this.SNAPSHOTS_KEY);
  }
}

// Export a singleton instance
export const storageService = new LocalStorageService();
