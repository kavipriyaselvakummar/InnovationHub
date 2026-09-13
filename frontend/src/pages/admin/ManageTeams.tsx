import React from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { adminNavItems } from './navConfig';
import { mockTeams, mockOpportunities, mockUsers } from '../../data/mockData';
import { DataTable } from '../../components/ui/DataTable';
import type { Column } from '../../components/ui/DataTable';
import { StatusBadge } from '../../components/ui/StatusBadge';
import { Button } from '../../components/Button';

export const ManageTeams: React.FC = () => {
  const teamsWithDetails = mockTeams.map(team => {
    const opportunity = mockOpportunities.find(o => o.id === team.opportunityId);
    const mentor = mockUsers.find(u => u.id === team.mentorId);
    return { ...team, opportunity, mentor };
  });

  const columns: Column<typeof teamsWithDetails[0]>[] = [
    { header: 'Team Name', accessor: 'name' },
    { header: 'Project', accessor: (team) => team.opportunity?.title },
    { header: 'Mentor', accessor: (team) => team.mentor?.name || 'Unassigned' },
    { header: 'Members', accessor: (team) => `${team.memberIds.length}` },
    { header: 'Status', accessor: (team) => <StatusBadge status={team.status} /> },
    {
      header: 'Action',
      accessor: () => (
        <div className="flex gap-2">
          <Button variant="outline" className="py-1 px-3 text-xs">Edit</Button>
          <Button variant="outline" className="py-1 px-3 text-xs text-red-600 border-red-200">Disband</Button>
        </div>
      ),
    }
  ];

  return (
    <DashboardLayout navItems={adminNavItems}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Manage Teams</h1>
        <p className="text-gray-600 mt-1">Platform-wide overview of all teams.</p>
      </div>

      <DataTable 
        data={teamsWithDetails} 
        columns={columns} 
        keyExtractor={(item) => item.id} 
      />
    </DashboardLayout>
  );
};
