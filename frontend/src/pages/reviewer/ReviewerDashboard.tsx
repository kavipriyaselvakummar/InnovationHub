import React from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { DashboardCard } from '../../components/DashboardCard';
import { reviewerNavItems } from './navConfig';
import { FileText, CheckSquare, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ReviewerDashboard: React.FC = () => {
  return (
    <DashboardLayout navItems={reviewerNavItems}>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Reviewer Workspace</h1>
        <p className="text-gray-600 mt-1">Evaluate projects and provide constructive feedback to students.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <DashboardCard 
          title="Pending Reviews" 
          value="2" 
          icon={<Clock className="w-6 h-6 text-yellow-500" />}
        />
        <DashboardCard 
          title="Completed Reviews" 
          value="14" 
          icon={<CheckSquare className="w-6 h-6 text-green-500" />}
        />
        <DashboardCard 
          title="Average Rating Given" 
          value="4.2/5" 
          icon={<FileText className="w-6 h-6 text-blue-500" />}
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 max-w-4xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-900">Recent Assignments</h2>
          <Link to="/reviewer/opportunities" className="text-sm text-blue-600 hover:underline">View All</Link>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-gray-50 border border-gray-100 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Automated Grading Assistant</p>
              <p className="text-sm text-gray-500">Machine Learning • Due in 3 days</p>
            </div>
            <Link to="/reviewer/opportunities/o3" className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700">
              Start Evaluation
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
