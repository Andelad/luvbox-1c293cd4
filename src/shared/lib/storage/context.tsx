import React, { createContext, useContext, ReactNode } from 'react';
import { StorageOperations } from '../../types/storage';
import { storageService } from './localStorage';

interface StorageContextValue {
  storage: StorageOperations;
}

const StorageContext = createContext<StorageContextValue | undefined>(undefined);

interface StorageProviderProps {
  children: ReactNode;
  storageImplementation?: StorageOperations;
}

export const StorageProvider: React.FC<StorageProviderProps> = ({ 
  children, 
  storageImplementation = storageService 
}) => {
  return (
    <StorageContext.Provider value={{ storage: storageImplementation }}>
      {children}
    </StorageContext.Provider>
  );
};

export const useStorage = (): StorageOperations => {
  const context = useContext(StorageContext);
  if (context === undefined) {
    throw new Error('useStorage must be used within a StorageProvider');
  }
  return context.storage;
};
