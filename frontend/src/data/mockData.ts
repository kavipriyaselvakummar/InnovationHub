import type { User, Opportunity, Team, Task, JoinRequest } from '../types';

export const mockUsers: User[] = [
  { id: 'u1', name: 'Alice Smith', email: 'alice@university.edu', role: 'student', department: 'Computer Science', skills: ['React', 'Python'], isActive: true },
  { id: 'u2', name: 'Bob Jones', email: 'bob@university.edu', role: 'student', department: 'Engineering', isActive: true },
  { id: 'f1', name: 'Dr. Alan Turing', email: 'faculty@university.edu', role: 'faculty', department: 'Computer Science', isActive: true },
  { id: 'r1', name: 'Dr. Reviewer', email: 'reviewer@university.edu', role: 'reviewer', department: 'Engineering', isActive: true },
  { id: 'a1', name: 'System Admin', email: 'admin@university.edu', role: 'admin', isActive: true },
];

export const mockOpportunities: Opportunity[] = [
  { id: 'o1', title: 'Smart Energy Dashboard', description: 'Build a dashboard for energy consumption.', domain: 'Sustainability', requiredSkills: ['React', 'D3.js'], teamSize: 4, creatorId: 'f1', status: 'Approved', createdAt: '2026-08-01T10:00:00Z' },
  { id: 'o2', title: 'Campus AI Assistant', description: 'AI assistant for students.', domain: 'AI/ML', requiredSkills: ['Python', 'NLP'], teamSize: 3, creatorId: 'f1', status: 'Open', createdAt: '2026-08-15T10:00:00Z' }
];

export const mockTeams: Team[] = [
  { id: 't1', name: 'Campus AI Visionaries', opportunityId: 'o2', mentorId: 'f1', memberIds: ['u1'], status: 'Active', progress: 45 }
];

export const mockTasks: Task[] = [
  { id: 'ts1', title: 'UI Design', description: 'Design main dashboard.', teamId: 't1', assigneeId: 'u1', deadline: '2026-09-30', status: 'In Progress' }
];

export const mockRequests: JoinRequest[] = [];
