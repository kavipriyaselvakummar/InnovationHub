import type { NavItem } from '../../components/Sidebar';

export const facultyNavItems: NavItem[] = [
  { label: 'Dashboard', path: '/faculty', icon: 'dashboard' },
  { label: 'Review Opportunities', path: '/faculty/opportunities', icon: 'opportunities' },
  { label: 'Team Requests', path: '/faculty/requests', icon: 'users' },
  { label: 'Manage Teams', path: '/faculty/teams', icon: 'teams' },
  { label: 'Assign Tasks', path: '/faculty/tasks', icon: 'tasks' },
  { label: 'Reports', path: '/faculty/reports', icon: 'activity' },
  { label: 'Profile', path: '/faculty/profile', icon: 'users' },
  { label: 'Logout', path: '/login', icon: 'users' },
];
