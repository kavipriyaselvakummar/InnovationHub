import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LayoutDashboard, Users, BookOpen, CheckSquare, Settings, FileText, Activity } from 'lucide-react';

export type NavItem = {
  label: string;
  path: string;
  icon: string;
};

interface SidebarProps {
  items: NavItem[];
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'dashboard': return <LayoutDashboard className="w-5 h-5 mr-3" />;
    case 'users': return <Users className="w-5 h-5 mr-3" />;
    case 'opportunities': return <BookOpen className="w-5 h-5 mr-3" />;
    case 'tasks': return <CheckSquare className="w-5 h-5 mr-3" />;
    case 'teams': return <Users className="w-5 h-5 mr-3" />;
    case 'reviews': return <FileText className="w-5 h-5 mr-3" />;
    case 'activity': return <Activity className="w-5 h-5 mr-3" />;
    default: return <Settings className="w-5 h-5 mr-3" />;
  }
};

export const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const { logout } = useAuth();
  
  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden lg:block h-[calc(100vh-61px)]">
      <div className="py-4">
        <ul className="space-y-1 px-3">
          {items.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={(e) => {
                  if (item.label === 'Logout') {
                    e.preventDefault();
                    logout();
                  }
                }}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    isActive && item.label !== 'Logout'
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                {getIcon(item.icon)}
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
