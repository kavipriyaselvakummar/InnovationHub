import React from 'react';
import { DashboardLayout } from '../components/DashboardLayout';
import { DashboardCard } from '../components/DashboardCard';
import type { NavItem } from '../components/Sidebar';
import { FileText, CheckSquare, BookOpen } from 'lucide-react';

const reviewerNavItems: NavItem[] = [
  { label: 'Dashboard', path: '/reviewer', icon: 'dashboard' },
  { label: 'Opportunities', path: '/reviewer/opportunities', icon: 'opportunities' },
  { label: 'Reviews', path: '/reviewer/reviews', icon: 'reviews' },
];

export const ReviewerDashboard: React.FC = () => {
  return (
    <DashboardLayout navItems={reviewerNavItems}>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Reviewer Workspace</h1>
        <p className="text-gray-600 mt-1">Evaluate projects and provide feedback.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <DashboardCard 
          title="Assigned Reviews" 
          value="7" 
          description="Due in 7 days"
          icon={<FileText className="w-6 h-6" />}
        />
        <DashboardCard 
          title="Completed Reviews" 
          value="24" 
          description="This semester"
          icon={<CheckSquare className="w-6 h-6" />}
        />
        <DashboardCard 
          title="Open Opportunities" 
          value="15" 
          description="Seeking reviewers"
          icon={<BookOpen className="w-6 h-6" />}
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Pending Assignments</h2>
        <div className="space-y-4">
          {[1, 2].map((i) => (
            <div key={i} className="flex gap-4 items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0">
              <div className="w-2 h-2 mt-2 rounded-full bg-orange-500"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">Project Proposal: Clean Energy Dashboard</p>
                <p className="text-xs text-gray-500">Due: Oct 15, 2026</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};
