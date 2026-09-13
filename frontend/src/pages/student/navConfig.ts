import type { NavItem } from '../../components/Sidebar';

export const studentNavItems: NavItem[] = [
  { label: 'Dashboard', path: '/student', icon: 'dashboard' },
  { label: 'Browse Opportunities', path: '/student/opportunities', icon: 'opportunities' },
  { label: 'Submit Opportunity', path: '/student/submit-opportunity', icon: 'opportunities' },
  { label: 'My Requests', path: '/student/requests', icon: 'reviews' },
  { label: 'My Team', path: '/student/team', icon: 'teams' },
  { label: 'Tasks', path: '/student/tasks', icon: 'tasks' },
  { label: 'Feedback', path: '/student/feedback', icon: 'activity' },
  { label: 'Profile', path: '/student/profile', icon: 'users' },
  { label: 'Logout', path: '/login', icon: 'users' }, // Dummy logout icon for now
];
