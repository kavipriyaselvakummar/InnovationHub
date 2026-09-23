import { KEYS, getStoredData, setStoredData } from './db';
import type { User, Opportunity, Team, Task, JoinRequest, Review, Notification } from '../types';

// --- Users ---
export const getUsers = (): User[] => getStoredData<User>(KEYS.USERS);
export const saveUsers = (users: User[]) => setStoredData(KEYS.USERS, users);
export const updateUser = (updatedUser: User) => {
  const users = getUsers().map(u => u.id === updatedUser.id ? updatedUser : u);
  saveUsers(users);
};

// --- Opportunities ---
export const getOpportunities = (): Opportunity[] => getStoredData<Opportunity>(KEYS.OPPORTUNITIES);
export const saveOpportunities = (opps: Opportunity[]) => setStoredData(KEYS.OPPORTUNITIES, opps);
export const updateOpportunity = (updatedOpp: Opportunity) => {
  const opps = getOpportunities().map(o => o.id === updatedOpp.id ? updatedOpp : o);
  saveOpportunities(opps);
};

// --- Teams ---
export const getTeams = (): Team[] => getStoredData<Team>(KEYS.TEAMS);
export const saveTeams = (teams: Team[]) => setStoredData(KEYS.TEAMS, teams);
export const updateTeam = (updatedTeam: Team) => {
  const teams = getTeams().map(t => t.id === updatedTeam.id ? updatedTeam : t);
  saveTeams(teams);
};

// --- Tasks ---
export const getTasks = (): Task[] => getStoredData<Task>(KEYS.TASKS);
export const saveTasks = (tasks: Task[]) => setStoredData(KEYS.TASKS, tasks);
export const updateTask = (updatedTask: Task) => {
  const tasks = getTasks().map(t => t.id === updatedTask.id ? updatedTask : t);
  saveTasks(tasks);
};

// --- Join Requests ---
export const getJoinRequests = (): JoinRequest[] => getStoredData<JoinRequest>(KEYS.JOIN_REQUESTS);
export const saveJoinRequests = (reqs: JoinRequest[]) => setStoredData(KEYS.JOIN_REQUESTS, reqs);
export const updateJoinRequest = (updatedReq: JoinRequest) => {
  const reqs = getJoinRequests().map(r => r.id === updatedReq.id ? updatedReq : r);
  saveJoinRequests(reqs);
};

// --- Reviews ---
export const getReviews = (): Review[] => getStoredData<Review>(KEYS.REVIEWS);
export const saveReviews = (reviews: Review[]) => setStoredData(KEYS.REVIEWS, reviews);

// --- Notifications ---
export const getNotifications = (): Notification[] => getStoredData<Notification>(KEYS.NOTIFICATIONS);
export const saveNotifications = (notifs: Notification[]) => setStoredData(KEYS.NOTIFICATIONS, notifs);
export const createNotification = (userId: string, title: string, type: 'info' | 'success' | 'warning' | 'error' = 'info') => {
  const notifs = getNotifications();
  notifs.unshift({
    id: 'n_' + Date.now(),
    userId,
    title,
    type,
    isRead: false,
    createdAt: new Date().toISOString()
  });
  saveNotifications(notifs);
};
