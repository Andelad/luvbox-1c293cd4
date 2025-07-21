import { useState, useEffect } from 'react';
import { User, Interest, Snapshot, EqualizerScores } from '../../types/storage';
import { useStorage } from './context';

/**
 * Hook for managing the current user
 */
export const useUser = (userId?: string) => {
  const storage = useStorage();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (userId) {
      setLoading(true);
      storage.getUserById(userId)
        .then(setUser)
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
    }
  }, [userId, storage]);

  const updateUser = async (updates: Partial<Omit<User, 'id' | 'createdAt'>>) => {
    if (!userId) throw new Error('No user ID provided');
    
    try {
      setLoading(true);
      const updatedUser = await storage.updateUser(userId, updates);
      setUser(updatedUser);
      return updatedUser;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, error, updateUser };
};

/**
 * Hook for managing interests for a user
 */
export const useInterests = (userId?: string) => {
  const storage = useStorage();
  const [interests, setInterests] = useState<Interest[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadInterests = async () => {
    if (!userId) return;
    
    try {
      setLoading(true);
      const userInterests = await storage.getInterestsByUserId(userId);
      setInterests(userInterests);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInterests();
  }, [userId]);

  const createInterest = async (name: string) => {
    if (!userId) throw new Error('No user ID provided');
    
    try {
      setLoading(true);
      const newInterest = await storage.createInterest(userId, { name });
      setInterests(prev => [...prev, newInterest]);
      return newInterest;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateInterest = async (interestId: string, updates: { name?: string }) => {
    try {
      setLoading(true);
      const updatedInterest = await storage.updateInterest(interestId, updates);
      setInterests(prev => 
        prev.map(interest => 
          interest.id === interestId ? updatedInterest : interest
        )
      );
      return updatedInterest;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteInterest = async (interestId: string) => {
    try {
      setLoading(true);
      await storage.deleteInterest(interestId);
      setInterests(prev => prev.filter(interest => interest.id !== interestId));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { 
    interests, 
    loading, 
    error, 
    createInterest, 
    updateInterest, 
    deleteInterest, 
    refetch: loadInterests 
  };
};

/**
 * Hook for managing snapshots for an interest
 */
export const useSnapshots = (interestId?: string) => {
  const storage = useStorage();
  const [snapshots, setSnapshots] = useState<Snapshot[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadSnapshots = async () => {
    if (!interestId) return;
    
    try {
      setLoading(true);
      const interestSnapshots = await storage.getSnapshotsByInterestId(interestId);
      setSnapshots(interestSnapshots);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSnapshots();
  }, [interestId]);

  const createSnapshot = async (scores: EqualizerScores, notes?: string, mood?: 'positive' | 'neutral' | 'negative') => {
    if (!interestId) throw new Error('No interest ID provided');
    
    try {
      setLoading(true);
      const newSnapshot = await storage.createSnapshot(interestId, {
        date: new Date(),
        scores,
        notes,
        mood
      });
      setSnapshots(prev => [newSnapshot, ...prev]); // Add to beginning (most recent first)
      return newSnapshot;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateSnapshot = async (snapshotId: string, updates: Partial<Pick<Snapshot, 'scores' | 'notes' | 'mood'>>) => {
    try {
      setLoading(true);
      const updatedSnapshot = await storage.updateSnapshot(snapshotId, updates);
      setSnapshots(prev => 
        prev.map(snapshot => 
          snapshot.id === snapshotId ? updatedSnapshot : snapshot
        )
      );
      return updatedSnapshot;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteSnapshot = async (snapshotId: string) => {
    try {
      setLoading(true);
      await storage.deleteSnapshot(snapshotId);
      setSnapshots(prev => prev.filter(snapshot => snapshot.id !== snapshotId));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { 
    snapshots, 
    loading, 
    error, 
    createSnapshot, 
    updateSnapshot, 
    deleteSnapshot, 
    refetch: loadSnapshots 
  };
};

/**
 * Hook for user authentication/session management
 */
export const useAuth = () => {
  const storage = useStorage();
  const [currentUserId, setCurrentUserId] = useState<string | null>(
    localStorage.getItem('luvbox_current_user_id')
  );

  const login = (userId: string) => {
    setCurrentUserId(userId);
    localStorage.setItem('luvbox_current_user_id', userId);
  };

  const logout = () => {
    setCurrentUserId(null);
    localStorage.removeItem('luvbox_current_user_id');
  };

  const register = async (userData: { name: string; email: string; dateOfBirth: Date; dealbreakerScores: EqualizerScores }) => {
    try {
      const newUser = await storage.createUser(userData);
      login(newUser.id);
      return newUser;
    } catch (err) {
      throw err;
    }
  };

  return { currentUserId, login, logout, register };
};
