import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/ui/Input';
import { useAuth } from '../../contexts/AuthContext';

import { getUsers } from '../../services';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  

  // For testing, grab existing emails to show the user
  const demoUsers = getUsers();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required');
      return;
    }
    const success = login(email, password);
    if (!success) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/" className="flex justify-center text-3xl font-extrabold text-blue-600 mb-6">
          Innovation Hub
        </Link>
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
            register for a new account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-200">
          {error && <div className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded border border-red-200">{error}</div>}
          <form className="space-y-6" onSubmit={handleLogin}>
            <Input
              label="Email address"
              type="email"
              required
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              placeholder="e.g. alice@example.edu"
            />

            <div>
              <Input
                label="Password (optional for demo)"
                type="password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <Button type="submit" fullWidth>
                Sign in
              </Button>
            </div>
            
            <div className="mt-4 text-center p-4 bg-blue-50 rounded text-sm text-blue-800">
              <p className="font-semibold mb-2">Demo Users:</p>
              <ul className="text-left list-disc list-inside mt-2 text-xs text-blue-700 space-y-1">
                {demoUsers.slice(0, 5).map(u => (
                  <li key={u.id}><button type="button" className="hover:underline" onClick={() => setEmail(u.email)}>{u.email}</button> ({u.role})</li>
                ))}
              </ul>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
