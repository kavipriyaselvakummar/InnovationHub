import React from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { adminNavItems } from './navConfig';

export const AdminReports: React.FC = () => {
  return (
    <DashboardLayout navItems={adminNavItems}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">System Reports</h1>
        <p className="text-gray-600 mt-1">Comprehensive system analytics and usage reports.</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center text-gray-500">
        <p>Advanced charting, CSV exports, and detailed analytics will be implemented following the backend database integration.</p>
      </div>
    </DashboardLayout>
  );
};
