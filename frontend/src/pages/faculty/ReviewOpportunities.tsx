import React from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { facultyNavItems } from './navConfig';
import { mockOpportunities, mockUsers } from '../../data/mockData';
import { DataTable } from '../../components/ui/DataTable';
import type { Column } from '../../components/ui/DataTable';
import { StatusBadge } from '../../components/ui/StatusBadge';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

export const ReviewOpportunities: React.FC = () => {
  const pendingOpps = mockOpportunities.filter(o => o.status === 'Under Review' || o.status === 'Open');

  const columns: Column<typeof pendingOpps[0]>[] = [
    {
      header: 'Title',
      accessor: 'title',
    },
    {
      header: 'Student',
      accessor: (opp) => mockUsers.find(u => u.id === opp.creatorId)?.name || 'Unknown',
    },
    {
      header: 'Domain',
      accessor: 'domain',
    },
    {
      header: 'Date Submitted',
      accessor: (opp) => new Date(opp.createdAt).toLocaleDateString(),
    },
    {
      header: 'Status',
      accessor: (opp) => <StatusBadge status={opp.status} />,
    },
    {
      header: 'Action',
      accessor: (opp) => (
        <Link to={`/faculty/opportunities/${opp.id}`}>
          <Button variant="outline" className="py-1 px-3 text-xs">Review</Button>
        </Link>
      ),
    }
  ];

  return (
    <DashboardLayout navItems={facultyNavItems}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Review Opportunities</h1>
        <p className="text-gray-600 mt-1">Evaluate and approve new student project proposals.</p>
      </div>

      <DataTable 
        data={pendingOpps} 
        columns={columns} 
        keyExtractor={(item) => item.id} 
        emptyMessage="No opportunities require review at this time."
      />
    </DashboardLayout>
  );
};
