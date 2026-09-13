import React from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { DashboardCard } from '../../components/DashboardCard';
import { NotificationItem } from '../../components/ui/NotificationItem';
import { BookOpen, Users, CheckSquare, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { studentNavItems } from './navConfig'; // We will create this

export const StudentDashboard: React.FC = () => {
  return (
    <DashboardLayout navItems={studentNavItems}>
      <div className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, Alice!</h1>
          <p className="text-gray-600 mt-1">Here is what's happening with your projects today.</p>
        </div>
        <div className="flex space-x-3">
          <Link to="/student/submit-opportunity">
            <Button variant="outline">Submit Opportunity</Button>
          </Link>
          <Link to="/student/opportunities">
            <Button>Browse Opportunities</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <DashboardCard 
          title="Submitted Ops" 
          value="2" 
          icon={<BookOpen className="w-6 h-6" />}
        />
        <DashboardCard 
          title="Pending Requests" 
          value="1" 
          icon={<Bell className="w-6 h-6" />}
        />
        <DashboardCard 
          title="Active Teams" 
          value="1" 
          icon={<Users className="w-6 h-6" />}
        />
        <DashboardCard 
          title="Assigned Tasks" 
          value="3" 
          icon={<CheckSquare className="w-6 h-6" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-900">My Current Team</h2>
            <Link to="/student/team" className="text-sm font-medium text-blue-600 hover:text-blue-500">View Details</Link>
          </div>
          <div className="border border-gray-100 rounded-md p-4">
            <h3 className="font-semibold text-gray-900">Campus AI Visionaries</h3>
            <p className="text-sm text-gray-600 mb-2">Mentor: Dr. Alan Turing</p>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium text-gray-700">Project Progress</span>
              <span className="text-sm text-gray-500">45%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Notifications</h2>
          <div className="space-y-2">
            <NotificationItem 
              title="Your request to join 'Smart Energy Dashboard' was approved!" 
              time="2 hours ago" 
              type="success"
            />
            <NotificationItem 
              title="New task assigned: 'UI Design'" 
              time="1 day ago" 
              type="info" 
              isRead
            />
            <NotificationItem 
              title="Dr. Turing provided feedback on your proposal." 
              time="2 days ago" 
              type="info" 
              isRead
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
