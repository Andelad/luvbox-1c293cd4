# LuvBox Storage Implementation Guide

## Overview

This document outlines the complete storage structure for the LuvBox application, designed to handle user data, interests, and snapshots in preparation for larger builds.

## Architecture

### Core Entities

1. **User**: Individual users with personal information and dealbreaker scores
2. **Interest**: People/relationships that users are tracking
3. **Snapshot**: Point-in-time scores for specific interests

### Data Flow
```
User (1) → (many) Interests (1) → (many) Snapshots
```

## File Structure

```
src/
├── types/
│   └── storage.ts              # Core type definitions
├── lib/
│   └── storage/
│       ├── index.ts            # Export everything
│       ├── localStorage.ts     # LocalStorage implementation
│       ├── context.tsx         # React context
│       └── hooks.ts            # Custom React hooks
└── components/
    └── cube/
        └── EqualizerFaceWithStorage.tsx  # Enhanced equalizer with storage
```

## Implementation Steps

### 1. Basic Setup

First, wrap your app with the StorageProvider:

```tsx
// In your main App.tsx or index.tsx
import { StorageProvider } from './lib/storage';

function App() {
  return (
    <StorageProvider>
      {/* Your existing app components */}
    </StorageProvider>
  );
}
```

### 2. User Registration/Login

```tsx
import { useAuth, createEqualizerScores } from './lib/storage';

function LoginPage() {
  const { register, login, currentUserId } = useAuth();

  const handleRegister = async (formData) => {
    const dealbreakerScores = createEqualizerScores(3, 4, 5, 6, 4, 5, 6);
    
    await register({
      name: formData.name,
      email: formData.email,
      dateOfBirth: new Date(formData.dateOfBirth),
      dealbreakerScores
    });
  };

  // User is now logged in and currentUserId is available
}
```

### 3. Managing Interests

```tsx
import { useInterests, useAuth } from './lib/storage';

function InterestsPage() {
  const { currentUserId } = useAuth();
  const { interests, createInterest, updateInterest, deleteInterest } = useInterests(currentUserId);

  const handleAddInterest = async (name: string) => {
    await createInterest(name);
  };

  return (
    <div>
      {interests.map(interest => (
        <div key={interest.id}>
          <h3>{interest.name}</h3>
          <p>{interest.snapshots.length} snapshots</p>
        </div>
      ))}
    </div>
  );
}
```

### 4. Taking Snapshots

```tsx
import { useSnapshots, arrayToEqualizerScores } from './lib/storage';

function EqualizerPage({ interestId }: { interestId: string }) {
  const { snapshots, createSnapshot } = useSnapshots(interestId);
  const [currentScores, setCurrentScores] = useState([5, 7, 6, 8, 5, 6, 7]);

  const handleSaveSnapshot = async () => {
    const scores = arrayToEqualizerScores(currentScores);
    await createSnapshot(scores, "Notes about this snapshot");
  };

  return (
    <div>
      {/* Your equalizer component */}
      <button onClick={handleSaveSnapshot}>Save Snapshot</button>
    </div>
  );
}
```

## Data Types

### EqualizerScores
```typescript
interface EqualizerScores {
  communication: number;
  physical_attraction: number;
  emotional_connection: number;
  shared_values: number;
  lifestyle_compatibility: number;
  future_goals: number;
  trust_respect: number;
}
```

### User
```typescript
interface User {
  id: string;
  name: string;
  email: string;
  dateOfBirth: Date;
  createdAt: Date;
  updatedAt: Date;
  dealbreakerScores: EqualizerScores;
  loveStoryChoices?: Record<string, any>; // For future expansion
  interests: Interest[];
}
```

### Interest
```typescript
interface Interest {
  id: string;
  userId: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  snapshots: Snapshot[];
}
```

### Snapshot
```typescript
interface Snapshot {
  id: string;
  interestId: string;
  date: Date;
  createdAt: Date;
  scores: EqualizerScores;
  notes?: string;
  mood?: 'positive' | 'neutral' | 'negative';
}
```

## Storage Options

### Current: LocalStorage
- **Pros**: Simple, works offline, no backend needed
- **Cons**: Data limited to single browser, not synchronized across devices
- **Good for**: MVP, development, demo

### Future Options

#### 1. IndexedDB
```typescript
// Future implementation
export class IndexedDBStorageService implements StorageOperations {
  // Much larger storage capacity
  // Better performance for complex queries
  // Still client-side only
}
```

#### 2. Supabase/Firebase
```typescript
// Future implementation
export class SupabaseStorageService implements StorageOperations {
  // Real-time synchronization
  // User authentication
  // Cross-device data sync
  // Backup and recovery
}
```

#### 3. Custom Backend
```typescript
// Future implementation
export class APIStorageService implements StorageOperations {
  // Full control over data
  // Advanced analytics
  // Custom business logic
}
```

## Migration Strategy

The storage interface (`StorageOperations`) allows easy switching between implementations:

```tsx
// Development: LocalStorage
<StorageProvider storageImplementation={localStorageService}>

// Production: Supabase
<StorageProvider storageImplementation={supabaseService}>

// Testing: Mock
<StorageProvider storageImplementation={mockStorageService}>
```

## Integration with Existing Components

### EqualizerFace Component
The enhanced `EqualizerFaceWithStorage` component shows how to integrate:

1. **Save current equalizer state** as snapshots
2. **Load previous snapshots** into the equalizer
3. **Display snapshot history**
4. **Handle loading states** and errors

### Benefits
- **Backward Compatibility**: Existing components continue to work
- **Progressive Enhancement**: Add storage features incrementally
- **Data Persistence**: User work is automatically saved
- **Historical Tracking**: See how relationships evolve over time

## Testing

```typescript
// Mock storage for testing
export class MockStorageService implements StorageOperations {
  private users: User[] = [];
  private interests: Interest[] = [];
  private snapshots: Snapshot[] = [];
  
  // Implement all methods with in-memory storage
  // Perfect for unit tests
}
```

## Future Expansions

### Love Story Choices
```typescript
interface LoveStoryChoice {
  id: string;
  userId: string;
  questionId: string;
  answer: string;
  timestamp: Date;
}

// Add to User interface:
interface User {
  // ... existing fields
  loveStoryChoices: LoveStoryChoice[];
}
```

### Advanced Analytics
```typescript
interface RelationshipAnalytics {
  userId: string;
  interestId: string;
  trendAnalysis: {
    improvingAreas: EqualizerArea[];
    decliningAreas: EqualizerArea[];
    stableAreas: EqualizerArea[];
  };
  recommendations: string[];
  riskAssessment: 'low' | 'medium' | 'high';
}
```

### Social Features
```typescript
interface SharedSnapshot {
  id: string;
  snapshotId: string;
  sharedBy: string;
  sharedWith: string[];
  permissions: 'view' | 'comment' | 'edit';
  anonymized: boolean;
}
```

## Summary

This storage structure provides:

1. **Scalable Foundation**: Easy to extend for future features
2. **Type Safety**: Full TypeScript support
3. **Flexible Implementation**: Switch storage backends easily
4. **React Integration**: Custom hooks for easy data management
5. **Backward Compatibility**: Works with existing components
6. **Future-Proof**: Designed for growth and new features

The architecture supports your immediate needs while providing a clear path for future enhancements like social features, advanced analytics, and cross-platform synchronization.
