import React from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { reviewerNavItems } from './navConfig';
import { mockOpportunities, mockUsers,  } from '../../data/mockData';
import { DataTable } from '../../components/ui/DataTable';
import type { Column } from '../../components/ui/DataTable';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

export const AssignedOpportunities: React.FC = () => {
  // Mock assigned opportunities for reviewer (say, those with status 'Under Review')
  const assignedOpps = mockOpportunities.filter(o => o.status === 'Under Review');

  const columns: Column<typeof assignedOpps[0]>[] = [
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
      header: 'Action',
      accessor: (opp) => (
        <Link to={`/reviewer/opportunities/${opp.id}`}>
          <Button variant="outline" className="py-1 px-3 text-xs bg-blue-50 text-blue-700 border-blue-200">Evaluate</Button>
        </Link>
      ),
    }
  ];

  return (
    <DashboardLayout navItems={reviewerNavItems}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Assigned Opportunities</h1>
        <p className="text-gray-600 mt-1">Projects pending your evaluation.</p>
      </div>

      <DataTable 
        data={assignedOpps} 
        columns={columns} 
        keyExtractor={(item) => item.id} 
        emptyMessage="No pending assignments."
      />
    </DashboardLayout>
  );
};
