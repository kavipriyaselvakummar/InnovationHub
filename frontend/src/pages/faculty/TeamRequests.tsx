import React from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { facultyNavItems } from './navConfig';
import { mockRequests, mockUsers, mockOpportunities, mockTeams } from '../../data/mockData';
import { DataTable } from '../../components/ui/DataTable';
import type { Column } from '../../components/ui/DataTable';
import { StatusBadge } from '../../components/ui/StatusBadge';
import { Button } from '../../components/Button';

export const TeamRequests: React.FC = () => {
  const joinRequests = mockRequests.filter(r => r.type === 'JoinTeam');

  const requestsWithDetails = joinRequests.map(req => {
    const student = mockUsers.find(u => u.id === req.requesterId);
    const team = mockTeams.find(t => t.id === req.targetId);
    const opportunity = mockOpportunities.find(o => o.id === team?.opportunityId);
    return { ...req, student, team, opportunity };
  });

  const columns: Column<typeof requestsWithDetails[0]>[] = [
    {
      header: 'Student',
      accessor: (req) => req.student?.name || 'Unknown',
    },
    {
      header: 'Team/Project',
      accessor: (req) => req.opportunity?.title || 'Unknown',
    },
    {
      header: 'Date',
      accessor: (req) => new Date(req.date).toLocaleDateString(),
    },
    {
      header: 'Status',
      accessor: (req) => <StatusBadge status={req.status} />,
    },
    {
      header: 'Action',
      accessor: (req) => (
        req.status === 'Pending' ? (
          <div className="flex gap-2">
            <Button className="py-1 px-3 text-xs bg-green-600 hover:bg-green-700">Approve</Button>
            <Button variant="outline" className="py-1 px-3 text-xs text-red-600 border-red-200 hover:bg-red-50">Reject</Button>
          </div>
        ) : (
          <span className="text-xs text-gray-500">Processed</span>
        )
      ),
    }
  ];

  return (
    <DashboardLayout navItems={facultyNavItems}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Team Requests</h1>
        <p className="text-gray-600 mt-1">Manage student requests to join active project teams.</p>
      </div>

      <DataTable 
        data={requestsWithDetails} 
        columns={columns} 
        keyExtractor={(item) => item.id} 
        emptyMessage="No pending team requests."
      />
    </DashboardLayout>
  );
};
