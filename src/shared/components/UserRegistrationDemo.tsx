import { createEqualizerScores, useAuth } from '@/shared/lib/storage';
import React, { useState } from 'react';

export default function UserRegistrationDemo() {
  const { register, currentUserId } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Demo User',
    email: 'demo@example.com',
    dateOfBirth: '1990-01-01'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Create default dealbreaker scores
      const dealbreakerScores = createEqualizerScores(3, 4, 3, 5, 4, 4, 5);

      await register({
        name: formData.name,
        email: formData.email,
        dateOfBirth: new Date(formData.dateOfBirth),
        dealbreakerScores
      });

      console.log('User registered successfully!');
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (currentUserId) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h3>User Registered Successfully!</h3>
        <p>User ID: {currentUserId}</p>
        <p>You can now access the Settings page to manage your profile.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h3>Demo User Registration</h3>
      <p>Register a demo user to test the settings functionality:</p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </div>

        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => setFormData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          style={{
            padding: '12px',
            backgroundColor: '#a25a3c',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isLoading ? 'not-allowed' : 'pointer'
          }}
        >
          {isLoading ? 'Registering...' : 'Register Demo User'}
        </button>
      </form>
    </div>
  );
}
