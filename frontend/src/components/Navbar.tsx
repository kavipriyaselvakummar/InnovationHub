import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, User } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <button className="mr-4 lg:hidden text-gray-500 hover:text-gray-700">
          <Menu className="w-6 h-6" />
        </button>
        <Link to="/" className="text-xl font-bold text-blue-600">
          Innovation Hub
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center text-sm font-medium text-gray-700">
          <User className="w-5 h-5 mr-2 text-gray-500" />
          Profile
        </div>
      </div>
    </nav>
  );
};
