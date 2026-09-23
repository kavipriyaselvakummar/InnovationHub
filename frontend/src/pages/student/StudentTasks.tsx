import React, { useState } from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { studentNavItems } from './navConfig';
import { DataTable } from '../../components/ui/DataTable';
import type { Column } from '../../components/ui/DataTable';
import { StatusBadge } from '../../components/ui/StatusBadge';
import { Button } from '../../components/Button';
import { useAuth } from '../../contexts/AuthContext';
import { getTasks, updateTask } from '../../services';

export const StudentTasks: React.FC = () => {
  const { currentUser } = useAuth();
  const [tasks, setTasks] = useState(() => {
    if (!currentUser) return [];
    return getTasks().filter(t => t.assigneeId === currentUser.id);
  });

  const handleComplete = (taskId: string) => {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;
    const updated = { ...task, status: 'Completed' as const, submissionNote: 'Completed by student' };
    updateTask(updated);
    setTasks(tasks.map(t => t.id === taskId ? updated : t));
    alert('Task marked as completed!');
  };

  const columns: Column<any>[] = [
    { header: 'Task', accessor: 'title' },
    { header: 'Deadline', accessor: (task) => new Date(task.deadline).toLocaleDateString() },
    { header: 'Status', accessor: (task) => <StatusBadge status={task.status} /> },
    {
      header: 'Action',
      accessor: (task) => (
        task.status === 'Completed' ? <span className="text-xs text-gray-500">Submitted</span> :
        <Button onClick={() => handleComplete(task.id)} variant="outline" className="py-1 px-3 text-xs bg-blue-50 text-blue-700 border-blue-200">Complete</Button>
      ),
    }
  ];

  return (
    <DashboardLayout navItems={studentNavItems}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Tasks</h1>
        <p className="text-gray-600 mt-1">Manage and submit your assigned deliverables.</p>
      </div>

      <DataTable 
        data={tasks} 
        columns={columns} 
        keyExtractor={(item) => item.id} 
        emptyMessage="No tasks assigned to you right now."
      />
    </DashboardLayout>
  );
};
