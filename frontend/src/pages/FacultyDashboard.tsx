import React from 'react';
import { DashboardLayout } from '../components/DashboardLayout';
import { DashboardCard } from '../components/DashboardCard';
import type { NavItem } from '../components/Sidebar';
import { Users, FileText, Activity } from 'lucide-react';

const facultyNavItems: NavItem[] = [
  { label: 'Dashboard', path: '/faculty', icon: 'dashboard' },
  { label: 'Opportunities', path: '/faculty/opportunities', icon: 'opportunities' },
  { label: 'Team Requests', path: '/faculty/requests', icon: 'reviews' },
  { label: 'Teams', path: '/faculty/teams', icon: 'teams' },
];

export const FacultyDashboard: React.FC = () => {
  return (
    <DashboardLayout navItems={facultyNavItems}>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Faculty Mentor Portal</h1>
        <p className="text-gray-600 mt-1">Manage your teams and evaluate project proposals.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <DashboardCard 
          title="Mentored Teams" 
          value="5" 
          description="Active projects"
          icon={<Users className="w-6 h-6" />}
        />
        <DashboardCard 
          title="Pending Requests" 
          value="8" 
          description="Needs your approval"
          icon={<FileText className="w-6 h-6" />}
        />
        <DashboardCard 
          title="Milestones Reached" 
          value="12" 
          description="Across all teams"
          icon={<Activity className="w-6 h-6" />}
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Requests</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-4 items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0">
              <div className="w-2 h-2 mt-2 rounded-full bg-purple-500"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">New team request for AI Project</p>
                <p className="text-xs text-gray-500">Yesterday at 4:30 PM</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};
