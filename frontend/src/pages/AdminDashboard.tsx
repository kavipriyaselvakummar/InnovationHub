import React from 'react';
import { DashboardLayout } from '../components/DashboardLayout';
import { DashboardCard } from '../components/DashboardCard';
import type { NavItem } from '../components/Sidebar';
import { Users, Activity, BookOpen, Settings } from 'lucide-react';

const adminNavItems: NavItem[] = [
  { label: 'Dashboard', path: '/admin', icon: 'dashboard' },
  { label: 'Users', path: '/admin/users', icon: 'users' },
  { label: 'Opportunities', path: '/admin/opportunities', icon: 'opportunities' },
  { label: 'Teams', path: '/admin/teams', icon: 'teams' },
];

export const AdminDashboard: React.FC = () => {
  return (
    <DashboardLayout navItems={adminNavItems}>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Platform Administration</h1>
        <p className="text-gray-600 mt-1">System overview and user management.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <DashboardCard 
          title="Total Users" 
          value="1,248" 
          description="+12 this week"
          icon={<Users className="w-6 h-6" />}
        />
        <DashboardCard 
          title="Active Teams" 
          value="86" 
          description="Across 12 programs"
          icon={<Activity className="w-6 h-6" />}
        />
        <DashboardCard 
          title="Opportunities" 
          value="34" 
          description="Open for application"
          icon={<BookOpen className="w-6 h-6" />}
        />
        <DashboardCard 
          title="System Status" 
          value="99.9%" 
          description="Uptime"
          icon={<Settings className="w-6 h-6" />}
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">System Activity Log</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-4 items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0">
              <div className="w-2 h-2 mt-2 rounded-full bg-green-500"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">New user registration: student_{i}@university.edu</p>
                <p className="text-xs text-gray-500">{i * 15} minutes ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};
