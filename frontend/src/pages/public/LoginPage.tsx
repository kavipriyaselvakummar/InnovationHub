import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/ui/Input';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy login: route based on an assumed role or just to student dashboard
    if (email.includes('faculty')) navigate('/faculty');
    else if (email.includes('reviewer')) navigate('/reviewer');
    else if (email.includes('admin')) navigate('/admin');
    else navigate('/student');
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
          <form className="space-y-6" onSubmit={handleLogin}>
            <Input
              label="Email address"
              type="email"
              required
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              placeholder="e.g. student@university.edu"
            />

            <div>
              <Input
                label="Password"
                type="password"
                required
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
              <div className="flex items-center justify-end mt-1">
                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <Button type="submit" fullWidth>
                Sign in
              </Button>
            </div>
            
            <div className="mt-4 text-center p-4 bg-blue-50 rounded text-sm text-blue-800">
              <p>For testing mock routing:</p>
              <ul className="text-left list-disc list-inside mt-2 text-xs text-blue-700">
                <li>Contains 'faculty' ➔ Faculty Portal</li>
                <li>Contains 'reviewer' ➔ Reviewer Portal</li>
                <li>Contains 'admin' ➔ Admin Portal</li>
                <li>Otherwise ➔ Student Portal</li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
