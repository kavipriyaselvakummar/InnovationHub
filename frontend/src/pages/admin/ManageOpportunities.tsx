import React from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { adminNavItems } from './navConfig';
import { mockOpportunities, mockUsers } from '../../data/mockData';
import { DataTable } from '../../components/ui/DataTable';
import type { Column } from '../../components/ui/DataTable';
import { StatusBadge } from '../../components/ui/StatusBadge';
import { Button } from '../../components/Button';

export const ManageOpportunities: React.FC = () => {
  const columns: Column<typeof mockOpportunities[0]>[] = [
    { header: 'Title', accessor: 'title' },
    { header: 'Creator', accessor: (opp) => mockUsers.find(u => u.id === opp.creatorId)?.name || 'Unknown' },
    { header: 'Domain', accessor: 'domain' },
    { header: 'Status', accessor: (opp) => <StatusBadge status={opp.status} /> },
    { header: 'Date', accessor: (opp) => new Date(opp.createdAt).toLocaleDateString() },
    {
      header: 'Action',
      accessor: () => (
        <div className="flex gap-2">
          <Button variant="outline" className="py-1 px-3 text-xs">Edit</Button>
          <Button variant="outline" className="py-1 px-3 text-xs text-red-600 border-red-200">Delete</Button>
        </div>
      ),
    }
  ];

  return (
    <DashboardLayout navItems={adminNavItems}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Manage Opportunities</h1>
        <p className="text-gray-600 mt-1">Platform-wide overview of all projects and opportunities.</p>
      </div>

      <DataTable 
        data={mockOpportunities} 
        columns={columns} 
        keyExtractor={(item) => item.id} 
      />
    </DashboardLayout>
  );
};
