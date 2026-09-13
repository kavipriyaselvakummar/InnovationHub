import React from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { DashboardCard } from '../../components/DashboardCard';
import { NotificationItem } from '../../components/ui/NotificationItem';
import { Users, FileText, Activity, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { facultyNavItems } from './navConfig';

export const MentorDashboard: React.FC = () => {
  return (
    <DashboardLayout navItems={facultyNavItems}>
      <div className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Mentor Portal</h1>
          <p className="text-gray-600 mt-1">Manage your teams and evaluate project proposals.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <DashboardCard 
          title="Mentored Teams" 
          value="2" 
          icon={<Users className="w-6 h-6" />}
        />
        <DashboardCard 
          title="Ops to Review" 
          value="3" 
          icon={<BookOpen className="w-6 h-6" />}
        />
        <DashboardCard 
          title="Team Requests" 
          value="5" 
          icon={<FileText className="w-6 h-6" />}
        />
        <DashboardCard 
          title="Total Tasks" 
          value="12" 
          icon={<Activity className="w-6 h-6" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-900">Recent Requests</h2>
            <Link to="/faculty/requests" className="text-sm text-blue-600 hover:underline">View All</Link>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-gray-100">
              <div>
                <p className="font-medium text-gray-900">Join Request: Smart Energy Dashboard</p>
                <p className="text-sm text-gray-500">Bob Jones • 2 hours ago</p>
              </div>
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Pending</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">System Notifications</h2>
          <div className="space-y-2">
            <NotificationItem 
              title="New opportunity submitted for your domain." 
              time="Yesterday" 
              type="info"
            />
            <NotificationItem 
              title="Team 'Campus AI' completed milestone 1." 
              time="2 days ago" 
              type="success" 
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
