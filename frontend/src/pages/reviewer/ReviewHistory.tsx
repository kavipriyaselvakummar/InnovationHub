import React from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { reviewerNavItems } from './navConfig';
import { DataTable } from '../../components/ui/DataTable';
import type { Column } from '../../components/ui/DataTable';

export const ReviewHistory: React.FC = () => {
  // Mock history data
  const historyData = [
    { id: '1', title: 'AI Study Assistant', rating: '4/5', date: '2026-08-15' },
    { id: '2', title: 'Solar Car Telemetry', rating: '5/5', date: '2026-08-10' },
  ];

  const columns: Column<typeof historyData[0]>[] = [
    { header: 'Opportunity Title', accessor: 'title' },
    { header: 'Rating Given', accessor: 'rating' },
    { header: 'Date Evaluated', accessor: 'date' },
  ];

  return (
    <DashboardLayout navItems={reviewerNavItems}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Review History</h1>
        <p className="text-gray-600 mt-1">A log of all opportunities you have previously evaluated.</p>
      </div>

      <DataTable 
        data={historyData} 
        columns={columns} 
        keyExtractor={(item) => item.id} 
        emptyMessage="You have not completed any reviews yet."
      />
    </DashboardLayout>
  );
};
