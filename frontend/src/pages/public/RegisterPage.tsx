import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Select';

export const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Route to appropriate dashboard based on role
    navigate(`/${role}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/" className="flex justify-center text-3xl font-extrabold text-blue-600 mb-6">
          Innovation Hub
        </Link>
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Create a new account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
            sign in to your existing account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-200">
          <form className="space-y-4" onSubmit={handleRegister}>
            <Input
              label="Full Name"
              type="text"
              required
              value={name}
              onChange={(e: any) => setName(e.target.value)}
            />

            <Input
              label="Email address"
              type="email"
              required
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />

            <Input
              label="Password"
              type="password"
              required
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            />

            <Input
              label="Confirm Password"
              type="password"
              required
              value={confirmPassword}
              onChange={(e: any) => setConfirmPassword(e.target.value)}
            />

            <Select
              label="Select your role"
              value={role}
              onChange={(e: any) => setRole(e.target.value)}
              options={[
                { value: 'student', label: 'Student' },
                { value: 'faculty', label: 'Faculty Mentor' },
                { value: 'reviewer', label: 'Reviewer' }
              ]}
            />

            <div className="pt-2">
              <Button type="submit" fullWidth>
                Register
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
