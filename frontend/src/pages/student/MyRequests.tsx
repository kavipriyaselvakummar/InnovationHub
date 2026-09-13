import React from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { studentNavItems } from './navConfig';
import { mockRequests, mockOpportunities } from '../../data/mockData';
import { DataTable } from '../../components/ui/DataTable';
import type { Column } from '../../components/ui/DataTable';
import { StatusBadge } from '../../components/ui/StatusBadge';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

export const MyRequests: React.FC = () => {
  // Filter mock requests for the current user (e.g. 'u2')
  const userRequests = mockRequests.filter(r => r.requesterId === 'u2' || r.requesterId === 'u1');

  // Add opportunity details to the request
  const requestsWithDetails = userRequests.map(req => {
    const opp = mockOpportunities.find(o => o.id === req.targetId) || mockOpportunities[0];
    return { ...req, opportunity: opp };
  });

  const columns: Column<typeof requestsWithDetails[0]>[] = [
    {
      header: 'Type',
      accessor: (req) => req.type === 'JoinTeam' ? 'Team Join Request' : 'Opportunity Review',
    },
    {
      header: 'Opportunity/Project',
      accessor: (req) => req.opportunity.title,
    },
    {
      header: 'Date Submitted',
      accessor: (req) => new Date(req.date).toLocaleDateString(),
    },
    {
      header: 'Status',
      accessor: (req) => <StatusBadge status={req.status} />,
    },
    {
      header: 'Action',
      accessor: (req) => (
        <Link to={`/student/opportunities/${req.opportunity.id}`}>
          <Button variant="outline" className="py-1 px-3 text-xs">View</Button>
        </Link>
      ),
    }
  ];

  return (
    <DashboardLayout navItems={studentNavItems}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Requests</h1>
        <p className="text-gray-600 mt-1">Track the status of your submitted opportunities and team requests.</p>
      </div>

      <DataTable 
        data={requestsWithDetails} 
        columns={columns} 
        keyExtractor={(item) => item.id} 
        emptyMessage="You have no pending requests."
      />
    </DashboardLayout>
  );
};
