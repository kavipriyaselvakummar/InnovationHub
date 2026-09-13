import React from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { adminNavItems } from './navConfig';
import { mockUsers } from '../../data/mockData';
import { DataTable } from '../../components/ui/DataTable';
import type { Column } from '../../components/ui/DataTable';
import { Button } from '../../components/Button';

export const ManageUsers: React.FC = () => {
  const columns: Column<typeof mockUsers[0]>[] = [
    { header: 'Name', accessor: 'name' },
    { header: 'Email', accessor: 'email' },
    { 
      header: 'Role', 
      accessor: (user) => <span className="capitalize">{user.role}</span> 
    },
    { header: 'Department', accessor: (user) => user.department || '-' },
    {
      header: 'Action',
      accessor: () => (
        <div className="flex gap-2">
          <Button variant="outline" className="py-1 px-3 text-xs">Edit</Button>
          <Button variant="outline" className="py-1 px-3 text-xs text-red-600 border-red-200">Deactivate</Button>
        </div>
      ),
    }
  ];

  return (
    <DashboardLayout navItems={adminNavItems}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Manage Users</h1>
        <p className="text-gray-600 mt-1">View and manage all registered platform users.</p>
      </div>

      <DataTable 
        data={mockUsers} 
        columns={columns} 
        keyExtractor={(item) => item.id} 
      />
    </DashboardLayout>
  );
};
