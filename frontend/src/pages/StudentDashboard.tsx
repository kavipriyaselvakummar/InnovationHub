import React from 'react';
import { DashboardLayout } from '../components/DashboardLayout';
import { DashboardCard } from '../components/DashboardCard';
import type { NavItem } from '../components/Sidebar';
import { BookOpen, Users, CheckSquare } from 'lucide-react';

const studentNavItems: NavItem[] = [
  { label: 'Dashboard', path: '/student', icon: 'dashboard' },
  { label: 'Opportunities', path: '/student/opportunities', icon: 'opportunities' },
  { label: 'My Team', path: '/student/team', icon: 'users' },
  { label: 'Tasks', path: '/student/tasks', icon: 'tasks' },
];

export const StudentDashboard: React.FC = () => {
  return (
    <DashboardLayout navItems={studentNavItems}>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, Student!</h1>
        <p className="text-gray-600 mt-1">Here is what's happening with your projects today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <DashboardCard 
          title="Active Applications" 
          value="2" 
          description="In review process"
          icon={<BookOpen className="w-6 h-6" />}
        />
        <DashboardCard 
          title="Team Members" 
          value="4" 
          description="Frontend project team"
          icon={<Users className="w-6 h-6" />}
        />
        <DashboardCard 
          title="Pending Tasks" 
          value="3" 
          description="Due this week"
          icon={<CheckSquare className="w-6 h-6" />}
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-4 items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0">
              <div className="w-2 h-2 mt-2 rounded-full bg-blue-500"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">Task completed: Initial Setup</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};
