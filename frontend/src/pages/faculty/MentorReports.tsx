import React from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { facultyNavItems } from './navConfig';
import { DashboardCard } from '../../components/DashboardCard';
import { CheckSquare, Users, BookOpen, Clock } from 'lucide-react';

export const MentorReports: React.FC = () => {
  return (
    <DashboardLayout navItems={facultyNavItems}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Mentor Reports</h1>
        <p className="text-gray-600 mt-1">High-level statistics and progress overview for your teams.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard 
          title="Total Opportunities" 
          value="4" 
          icon={<BookOpen className="text-blue-500 w-6 h-6" />}
        />
        <DashboardCard 
          title="Approved Projects" 
          value="3" 
          icon={<CheckSquare className="text-green-500 w-6 h-6" />}
        />
        <DashboardCard 
          title="Active Teams" 
          value="2" 
          icon={<Users className="text-indigo-500 w-6 h-6" />}
        />
        <DashboardCard 
          title="Completed Tasks" 
          value="18" 
          icon={<Clock className="text-purple-500 w-6 h-6" />}
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center text-gray-500">
        <p>Advanced charting and reporting will be available after backend integration.</p>
      </div>
    </DashboardLayout>
  );
};
