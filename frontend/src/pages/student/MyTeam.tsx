import React from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { studentNavItems } from './navConfig';
import { mockTeams, mockUsers, mockOpportunities } from '../../data/mockData';
import { ProgressBar } from '../../components/ui/ProgressBar';

export const MyTeam: React.FC = () => {
  const team = mockTeams[0];
  const opportunity = mockOpportunities.find(o => o.id === team.opportunityId);
  const mentor = mockUsers.find(u => u.id === team.mentorId);
  const members = team.memberIds.map(id => mockUsers.find(u => u.id === id)).filter(Boolean) as typeof mockUsers;

  return (
    <DashboardLayout navItems={studentNavItems}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Team: {team.name}</h1>
        <p className="text-gray-600 mt-1">Working on: {opportunity?.title}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Team Progress</h2>
            <ProgressBar progress={team.progress} label="Overall Project Completion" />
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Team Members</h2>
            <div className="space-y-4">
              {members.map(member => (
                <div key={member.id} className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium text-gray-900">{member.name}</p>
                    <p className="text-sm text-gray-500">{member.department}</p>
                  </div>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Student</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-50 rounded-lg shadow-sm border border-blue-100 p-6">
            <h2 className="text-lg font-semibold text-blue-900 mb-4">Faculty Mentor</h2>
            {mentor ? (
              <div>
                <p className="font-medium text-blue-900">{mentor.name}</p>
                <p className="text-sm text-blue-700 mb-2">{mentor.department}</p>
                <a href={`mailto:${mentor.email}`} className="text-sm text-blue-600 hover:underline">Contact Mentor</a>
              </div>
            ) : (
              <p className="text-sm text-blue-700">No mentor assigned yet.</p>
            )}
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h2>
            <p className="text-sm text-gray-600 mb-2"><span className="font-medium text-gray-900">Domain:</span> {opportunity?.domain}</p>
            <p className="text-sm text-gray-600 mb-4"><span className="font-medium text-gray-900">Started:</span> {new Date(team.status === 'Active' ? opportunity?.createdAt! : '').toLocaleDateString()}</p>
            <button className="w-full text-center text-sm text-blue-600 font-medium py-2 border border-blue-200 rounded hover:bg-blue-50 transition-colors">
              View Full Proposal
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
