import React, { useState } from 'react';
import { useAuth, useUser } from '@/hooks';
import { createEqualizerScores } from '@/types/storage';

const SimpleUserCreator: React.FC = () => {
  const { currentUserId, register } = useAuth();
  const { user } = useUser(currentUserId || undefined);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || isCreating) return;

    setIsCreating(true);
    try {
      await register({
        name: name.trim(),
        email: email.trim(),
        dateOfBirth: new Date('1990-01-01'), // Default date
        dealbreakerScores: createEqualizerScores(), // Default scores
      });
      setName('');
      setEmail('');
      alert('User created successfully! You can now use the settings page.');
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Error creating user');
    } finally {
      setIsCreating(false);
    }
  };

  if (user) {
    return (
      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
        <h3 className="font-semibold text-green-800 mb-2">User Account Active</h3>
        <p className="text-green-700">
          Logged in as: <strong>{user.name}</strong> ({user.email})
        </p>
        <p className="text-sm text-green-600 mt-2">
          You can now go to Settings to manage your profile and dealbreaker lines.
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
      <h3 className="font-semibold text-blue-800 mb-4">Create User Account</h3>
      <p className="text-blue-700 mb-4">
        Create a user account to test the settings functionality.
      </p>
      
      <form onSubmit={handleCreateUser} className="space-y-4">
        <div>
          <label htmlFor="create-name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="create-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>
        
        <div>
          <label htmlFor="create-email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="create-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={isCreating || !name.trim() || !email.trim()}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isCreating ? 'Creating...' : 'Create Account'}
        </button>
      </form>
    </div>
  );
};

export default SimpleUserCreator;
