// Core storage types for LuvBox application

/**
 * The 7 dealbreaker areas from the equalizer
 */
export type EqualizerArea = 
  | 'communication'
  | 'physical_attraction'
  | 'emotional_connection'
  | 'shared_values'
  | 'lifestyle_compatibility'
  | 'future_goals'
  | 'trust_respect';

/**
 * Scores for each of the 7 dealbreaker areas (0-10 scale)
 */
export interface EqualizerScores {
  communication: number;
  physical_attraction: number;
  emotional_connection: number;
  shared_values: number;
  lifestyle_compatibility: number;
  future_goals: number;
  trust_respect: number;
}

/**
 * Individual user profile
 */
export interface User {
  id: string;
  name: string;
  email: string;
  dateOfBirth: Date;
  createdAt: Date;
  updatedAt: Date;
  
  // User's personal dealbreaker line scores
  dealbreakerScores: EqualizerScores;
  
  // Love story choices (to be expanded later)
  loveStoryChoices?: Record<string, any>;
  
  // User's interests (relationships they're tracking)
  interests: Interest[];
}

/**
 * An interest represents a person/relationship the user is tracking
 */
export interface Interest {
  id: string;
  userId: string; // Foreign key to User
  name: string; // Name of the person
  createdAt: Date;
  updatedAt: Date;
  
  // All snapshots for this interest
  snapshots: Snapshot[];
}

/**
 * A snapshot represents scores for a specific interest at a specific point in time
 */
export interface Snapshot {
  id: string;
  interestId: string; // Foreign key to Interest
  date: Date;
  createdAt: Date;
  
  // Scores for each of the 7 dealbreaker areas for this specific snapshot
  scores: EqualizerScores;
  
  // Optional metadata
  notes?: string;
  mood?: 'positive' | 'neutral' | 'negative';
}

/**
 * Storage operations interface
 */
export interface StorageOperations {
  // User operations
  createUser(userData: Omit<User, 'id' | 'createdAt' | 'updatedAt' | 'interests'>): Promise<User>;
  getUserById(id: string): Promise<User | null>;
  updateUser(id: string, updates: Partial<Omit<User, 'id' | 'createdAt'>>): Promise<User>;
  deleteUser(id: string): Promise<boolean>;
  
  // Interest operations
  createInterest(userId: string, interestData: Omit<Interest, 'id' | 'userId' | 'createdAt' | 'updatedAt' | 'snapshots'>): Promise<Interest>;
  getInterestsByUserId(userId: string): Promise<Interest[]>;
  getInterestById(id: string): Promise<Interest | null>;
  updateInterest(id: string, updates: Partial<Omit<Interest, 'id' | 'userId' | 'createdAt'>>): Promise<Interest>;
  deleteInterest(id: string): Promise<boolean>;
  
  // Snapshot operations
  createSnapshot(interestId: string, snapshotData: Omit<Snapshot, 'id' | 'interestId' | 'createdAt'>): Promise<Snapshot>;
  getSnapshotsByInterestId(interestId: string): Promise<Snapshot[]>;
  getSnapshotById(id: string): Promise<Snapshot | null>;
  updateSnapshot(id: string, updates: Partial<Omit<Snapshot, 'id' | 'interestId' | 'createdAt'>>): Promise<Snapshot>;
  deleteSnapshot(id: string): Promise<boolean>;
}

/**
 * Helper type for creating equalizer scores
 */
export const createEqualizerScores = (
  communication: number = 5,
  physical_attraction: number = 5,
  emotional_connection: number = 5,
  shared_values: number = 5,
  lifestyle_compatibility: number = 5,
  future_goals: number = 5,
  trust_respect: number = 5
): EqualizerScores => ({
  communication,
  physical_attraction,
  emotional_connection,
  shared_values,
  lifestyle_compatibility,
  future_goals,
  trust_respect,
});

/**
 * Helper to convert EqualizerScores to array format (for compatibility with existing components)
 */
export const equalizerScoresToArray = (scores: EqualizerScores): number[] => [
  scores.communication,
  scores.physical_attraction,
  scores.emotional_connection,
  scores.shared_values,
  scores.lifestyle_compatibility,
  scores.future_goals,
  scores.trust_respect,
];

/**
 * Helper to convert array format to EqualizerScores
 */
export const arrayToEqualizerScores = (array: number[]): EqualizerScores => {
  if (array.length !== 7) {
    throw new Error('Array must have exactly 7 elements');
  }
  
  return {
    communication: array[0],
    physical_attraction: array[1],
    emotional_connection: array[2],
    shared_values: array[3],
    lifestyle_compatibility: array[4],
    future_goals: array[5],
    trust_respect: array[6],
  };
};
