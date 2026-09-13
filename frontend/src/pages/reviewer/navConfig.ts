import type { NavItem } from '../../components/Sidebar';

export const reviewerNavItems: NavItem[] = [
  { label: 'Dashboard', path: '/reviewer', icon: 'dashboard' },
  { label: 'Assigned Opportunities', path: '/reviewer/opportunities', icon: 'opportunities' },
  { label: 'Review History', path: '/reviewer/history', icon: 'reviews' },
  { label: 'Profile', path: '/reviewer/profile', icon: 'users' },
  { label: 'Logout', path: '/login', icon: 'users' },
];
