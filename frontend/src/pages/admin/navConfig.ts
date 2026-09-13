import type { NavItem } from '../../components/Sidebar';

export const adminNavItems: NavItem[] = [
  { label: 'Dashboard', path: '/admin', icon: 'dashboard' },
  { label: 'Manage Users', path: '/admin/users', icon: 'users' },
  { label: 'Manage Opportunities', path: '/admin/opportunities', icon: 'opportunities' },
  { label: 'Manage Teams', path: '/admin/teams', icon: 'teams' },
  { label: 'Reports', path: '/admin/reports', icon: 'activity' },
  { label: 'Settings', path: '/admin/settings', icon: 'settings' },
  { label: 'Profile', path: '/admin/profile', icon: 'users' },
  { label: 'Logout', path: '/login', icon: 'users' },
];
