import React from 'react';
import { DashboardLayout } from '../components/DashboardLayout';
import type { NavItem } from '../components/Sidebar';

interface PlaceholderProps {
  title: string;
  navItems: NavItem[];
}

export const Placeholder: React.FC<PlaceholderProps> = ({ title, navItems }) => {
  return (
    <DashboardLayout navItems={navItems}>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        <p className="text-gray-600 mt-1">This page is under construction.</p>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center text-gray-500">
        Content for {title} will go here.
      </div>
    </DashboardLayout>
  );
};
