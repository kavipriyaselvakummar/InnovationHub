import React from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { DashboardCard } from '../../components/DashboardCard';
import { adminNavItems } from './navConfig';
import { Users, BookOpen, Activity, AlertCircle } from 'lucide-react';
import { mockUsers, mockOpportunities, mockTeams } from '../../data/mockData';

export const AdminDashboard: React.FC = () => {
  const totalStudents = mockUsers.filter(u => u.role === 'student').length;
  const totalMentors = mockUsers.filter(u => u.role === 'faculty').length;

  return (
    <DashboardLayout navItems={adminNavItems}>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Platform Administration</h1>
        <p className="text-gray-600 mt-1">System overview and platform management.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <DashboardCard 
          title="Total Users" 
          value={mockUsers.length} 
          description={`${totalStudents} students, ${totalMentors} mentors`}
          icon={<Users className="w-6 h-6 text-blue-500" />}
        />
        <DashboardCard 
          title="Opportunities" 
          value={mockOpportunities.length} 
          description="Across all domains"
          icon={<BookOpen className="w-6 h-6 text-purple-500" />}
        />
        <DashboardCard 
          title="Active Teams" 
          value={mockTeams.length} 
          description="In progress"
          icon={<Activity className="w-6 h-6 text-green-500" />}
        />
        <DashboardCard 
          title="System Alerts" 
          value="0" 
          description="All systems normal"
          icon={<AlertCircle className="w-6 h-6 text-gray-400" />}
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Recent System Activity</h2>
        <div className="space-y-4">
          <div className="flex gap-4 items-start pb-4 border-b border-gray-100">
            <div className="w-2 h-2 mt-2 rounded-full bg-blue-500"></div>
            <div>
              <p className="text-sm font-medium text-gray-900">New user registration: student@university.edu</p>
              <p className="text-xs text-gray-500">10 minutes ago</p>
            </div>
          </div>
          <div className="flex gap-4 items-start pb-4 border-b border-gray-100">
            <div className="w-2 h-2 mt-2 rounded-full bg-green-500"></div>
            <div>
              <p className="text-sm font-medium text-gray-900">Opportunity "Smart Energy Dashboard" published.</p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
