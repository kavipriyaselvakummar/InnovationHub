import React from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { studentNavItems } from './navConfig';
import { mockTasks } from '../../data/mockData';
import { DataTable } from '../../components/ui/DataTable';
import type { Column } from '../../components/ui/DataTable';
import { StatusBadge } from '../../components/ui/StatusBadge';
import { Button } from '../../components/Button';

export const StudentTasks: React.FC = () => {
  const userTasks = mockTasks.filter(t => t.assigneeId === 'u1' || t.assigneeId === 'u2');

  const columns: Column<typeof userTasks[0]>[] = [
    {
      header: 'Task',
      accessor: (task) => (
        <div>
          <p className="font-medium text-gray-900">{task.title}</p>
          <p className="text-xs text-gray-500 truncate max-w-xs">{task.description}</p>
        </div>
      ),
    },
    {
      header: 'Deadline',
      accessor: (task) => new Date(task.deadline).toLocaleDateString(),
    },
    {
      header: 'Status',
      accessor: (task) => <StatusBadge status={task.status} />,
    },
    {
      header: 'Action',
      accessor: (task) => (
        task.status === 'Completed' ? (
          <Button variant="outline" disabled className="py-1 px-3 text-xs opacity-50">Completed</Button>
        ) : (
          <Button variant="outline" className="py-1 px-3 text-xs text-blue-600 border-blue-200 hover:bg-blue-50">Mark Done</Button>
        )
      ),
    }
  ];

  return (
    <DashboardLayout navItems={studentNavItems}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Tasks</h1>
        <p className="text-gray-600 mt-1">Manage your assigned project deliverables.</p>
      </div>

      <DataTable 
        data={userTasks} 
        columns={columns} 
        keyExtractor={(item) => item.id} 
        emptyMessage="You have no assigned tasks."
      />
    </DashboardLayout>
  );
};
