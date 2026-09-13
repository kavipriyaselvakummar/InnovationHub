import React from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { facultyNavItems } from './navConfig';
import { useParams, useNavigate } from 'react-router-dom';
import { mockTeams, mockUsers, mockOpportunities, mockTasks } from '../../data/mockData';
import { Button } from '../../components/Button';
import { ProgressBar } from '../../components/ui/ProgressBar';

export const TeamDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const team = mockTeams.find(t => t.id === id);

  if (!team) {
    return (
      <DashboardLayout navItems={facultyNavItems}>
        <div className="text-center p-12">
          <h2 className="text-xl font-semibold">Team not found</h2>
          <Button onClick={() => navigate('/faculty/teams')} className="mt-4">Back</Button>
        </div>
      </DashboardLayout>
    );
  }

  const opportunity = mockOpportunities.find(o => o.id === team.opportunityId);
  const members = mockUsers.filter(u => team.memberIds.includes(u.id));
  const tasks = mockTasks.filter(t => t.teamId === team.id);

  return (
    <DashboardLayout navItems={facultyNavItems}>
      <div className="mb-6">
        <Button variant="outline" onClick={() => navigate('/faculty/teams')} className="mb-4">
          &larr; Back to Teams
        </Button>
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{team.name}</h1>
            <p className="text-gray-600 mt-1">Project: {opportunity?.title}</p>
          </div>
          <Button onClick={() => navigate('/faculty/tasks')}>Assign New Task</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Tasks & Milestones</h2>
            <div className="space-y-4">
              {tasks.length > 0 ? tasks.map(task => {
                const assignee = members.find(m => m.id === task.assigneeId);
                return (
                  <div key={task.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div>
                      <p className="font-medium text-gray-900">{task.title}</p>
                      <p className="text-xs text-gray-500 mt-1">Assigned to: {assignee?.name || 'Unknown'} • Due: {new Date(task.deadline).toLocaleDateString()}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded font-medium ${
                      task.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      task.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-200 text-gray-800'
                    }`}>
                      {task.status}
                    </span>
                  </div>
                );
              }) : (
                <p className="text-sm text-gray-500">No tasks assigned yet.</p>
              )}
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Overall Progress</h2>
            <ProgressBar progress={team.progress} />
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Team Members ({members.length}/{opportunity?.teamSize})</h2>
            <div className="space-y-4">
              {members.map(m => (
                <div key={m.id} className="flex flex-col pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                  <span className="font-medium text-gray-900">{m.name}</span>
                  <span className="text-xs text-gray-500">{m.email}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
