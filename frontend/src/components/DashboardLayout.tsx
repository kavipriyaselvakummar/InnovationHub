import React from 'react';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import type { NavItem } from './Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
  navItems: NavItem[];
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, navItems }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar items={navItems} />
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
};
