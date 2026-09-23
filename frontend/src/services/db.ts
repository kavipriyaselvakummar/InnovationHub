import type { User, } from '../types';
import { mockUsers, mockOpportunities, mockTeams, mockTasks } from '../data/mockData';

// Storage keys
export const KEYS = {
  USERS: 'ihub_users',
  OPPORTUNITIES: 'ihub_opportunities',
  TEAMS: 'ihub_teams',
  TASKS: 'ihub_tasks',
  JOIN_REQUESTS: 'ihub_join_requests',
  REVIEWS: 'ihub_reviews',
  NOTIFICATIONS: 'ihub_notifications',
};

// Generic get/set
export function getStoredData<T>(key: string): T[] {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}

export function setStoredData<T>(key: string, data: T[]): void {
  localStorage.setItem(key, JSON.stringify(data));
}

// Seed mock data if empty
export function initDb() {
  if (getStoredData(KEYS.USERS).length === 0) {
    const seededUsers: User[] = mockUsers.map(u => ({ ...u, password: 'password', isActive: true }));
    setStoredData(KEYS.USERS, seededUsers);
  }
  if (getStoredData(KEYS.OPPORTUNITIES).length === 0) {
    setStoredData(KEYS.OPPORTUNITIES, mockOpportunities);
  }
  if (getStoredData(KEYS.TEAMS).length === 0) {
    setStoredData(KEYS.TEAMS, mockTeams);
  }
  if (getStoredData(KEYS.TASKS).length === 0) {
    setStoredData(KEYS.TASKS, mockTasks);
  }
  if (getStoredData(KEYS.JOIN_REQUESTS).length === 0) {
    setStoredData(KEYS.JOIN_REQUESTS, []); // mockRequests from before were mixed, let's start fresh
  }
  if (getStoredData(KEYS.REVIEWS).length === 0) {
    setStoredData(KEYS.REVIEWS, []);
  }
  if (getStoredData(KEYS.NOTIFICATIONS).length === 0) {
    setStoredData(KEYS.NOTIFICATIONS, []);
  }
}
