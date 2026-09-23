import React, { useMemo } from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { DashboardCard } from '../../components/DashboardCard';
import { NotificationItem } from '../../components/ui/NotificationItem';
import { BookOpen, Users, CheckSquare, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { studentNavItems } from './navConfig';
import { useAuth } from '../../contexts/AuthContext';
import { getOpportunities, getJoinRequests, getTeams, getTasks } from '../../services';

export const StudentDashboard: React.FC = () => {
  const { currentUser } = useAuth();
  
  const stats = useMemo(() => {
    if (!currentUser) return { opps: 0, reqs: 0, teams: 0, tasks: 0 };
    const myOpps = getOpportunities().filter(o => o.creatorId === currentUser.id);
    const myReqs = getJoinRequests().filter(r => r.requesterId === currentUser.id);
    const myTeams = getTeams().filter(t => t.memberIds.includes(currentUser.id));
    const myTasks = getTasks().filter(t => t.assigneeId === currentUser.id && t.status !== 'Completed');
    return { opps: myOpps.length, reqs: myReqs.length, teams: myTeams.length, tasks: myTasks.length };
  }, [currentUser]);

  const activeTeam = useMemo(() => {
    if (!currentUser) return null;
    return getTeams().find(t => t.memberIds.includes(currentUser.id));
  }, [currentUser]);

  return (
    <DashboardLayout navItems={studentNavItems}>
      <div className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, {currentUser?.name}!</h1>
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
          value={stats.opps} 
          icon={<BookOpen className="w-6 h-6" />}
        />
        <DashboardCard 
          title="Pending Requests" 
          value={stats.reqs} 
          icon={<Bell className="w-6 h-6" />}
        />
        <DashboardCard 
          title="Active Teams" 
          value={stats.teams} 
          icon={<Users className="w-6 h-6" />}
        />
        <DashboardCard 
          title="Pending Tasks" 
          value={stats.tasks} 
          icon={<CheckSquare className="w-6 h-6" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-900">My Current Team</h2>
            {activeTeam && <Link to="/student/team" className="text-sm font-medium text-blue-600 hover:text-blue-500">View Details</Link>}
          </div>
          {activeTeam ? (
            <div className="border border-gray-100 rounded-md p-4">
              <h3 className="font-semibold text-gray-900">{activeTeam.name}</h3>
              <div className="flex justify-between items-center mb-1 mt-4">
                <span className="text-sm font-medium text-gray-700">Project Progress</span>
                <span className="text-sm text-gray-500">{activeTeam.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${activeTeam.progress}%` }}></div>
              </div>
            </div>
          ) : (
             <p className="text-sm text-gray-500 border border-dashed border-gray-300 p-8 text-center rounded">You are not part of any active teams yet. Request to join an opportunity!</p>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Notifications</h2>
          <div className="space-y-2">
            <NotificationItem 
              title="Welcome to Innovation Hub!" 
              time="Just now" 
              type="info"
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
