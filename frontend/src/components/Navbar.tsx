import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, User as UserIcon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export const Navbar: React.FC = () => {
  const { currentUser } = useAuth();
  
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm z-10">
      <div className="flex items-center">
        <button className="mr-4 lg:hidden text-gray-500 hover:text-gray-700">
          <Menu className="w-6 h-6" />
        </button>
        <Link to="/" className="text-xl font-bold text-blue-600">
          Innovation Hub
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        {currentUser && (
          <div className="flex items-center text-sm font-medium text-gray-700">
            <UserIcon className="w-5 h-5 mr-2 text-gray-500" />
            <span className="hidden sm:inline-block mr-1">{currentUser.name}</span>
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded capitalize">{currentUser.role}</span>
          </div>
        )}
      </div>
    </nav>
  );
};
