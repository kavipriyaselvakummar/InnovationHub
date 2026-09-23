export type UserRole = 'student' | 'faculty' | 'reviewer' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string; // Stored for mock login
  role: UserRole;
  department?: string;
  skills?: string[];
  isActive: boolean;
}

export type OpportunityStatus = 'Draft' | 'Pending Review' | 'Approved' | 'Rejected' | 'Published' | 'Closed' | 'Open' | 'Under Review';

export interface Opportunity {
  id: string;
  title: string;
  description: string;
  problemStatement?: string;
  domain: string;
  requiredSkills: string[];
  teamSize: number;
  creatorId: string;
  status: OpportunityStatus;
  createdAt: string;
  deadline?: string;
}

export interface Team {
  id: string;
  name: string;
  opportunityId: string;
  mentorId: string;
  memberIds: string[];
  status: 'Forming' | 'Active' | 'Completed';
  progress: number;
}

export type TaskStatus = 'To Do' | 'In Progress' | 'Completed';

export interface Task {
  id: string;
  title: string;
  description: string;
  teamId: string;
  assigneeId: string;
  deadline: string;
  status: TaskStatus;
  submissionNote?: string;
  feedback?: string;
}

export type RequestStatus = 'Pending' | 'Approved' | 'Rejected';

export interface JoinRequest {
  id: string;
  requesterId: string;
  opportunityId: string;
  status: RequestStatus;
  date: string;
}

export interface Review {
  id: string;
  opportunityId: string;
  reviewerId: string;
  innovationScore: number;
  feasibilityScore: number;
  impactScore: number;
  comments: string;
  recommendation: 'Approve' | 'Reject' | 'Request Changes';
  date: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  type: 'info' | 'success' | 'warning' | 'error';
  isRead: boolean;
  createdAt: string;
}
