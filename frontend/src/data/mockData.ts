export type UserRole = 'student' | 'faculty' | 'reviewer' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department?: string;
  skills?: string[];
}

export interface Opportunity {
  id: string;
  title: string;
  description: string;
  domain: string;
  requiredSkills: string[];
  teamSize: number;
  creatorId: string;
  status: 'Open' | 'Closed' | 'Under Review' | 'Approved' | 'Rejected';
  createdAt: string;
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

export interface Task {
  id: string;
  title: string;
  description: string;
  teamId: string;
  assigneeId: string;
  deadline: string;
  status: 'To Do' | 'In Progress' | 'Completed';
}

export interface Request {
  id: string;
  type: 'JoinTeam' | 'OpportunityReview';
  requesterId: string;
  targetId: string; // Team ID or Opportunity ID
  status: 'Pending' | 'Approved' | 'Rejected';
  date: string;
}

export const mockUsers: User[] = [
  { id: 'u1', name: 'Alice Smith', email: 'alice@example.edu', role: 'student', department: 'Computer Science', skills: ['React', 'TypeScript'] },
  { id: 'u2', name: 'Bob Jones', email: 'bob@example.edu', role: 'student', department: 'Engineering', skills: ['Python', 'Data Analysis'] },
  { id: 'u3', name: 'Dr. Alan Turing', email: 'alan@example.edu', role: 'faculty', department: 'Computer Science' },
  { id: 'u4', name: 'Dr. Ada Lovelace', email: 'ada@example.edu', role: 'reviewer', department: 'Mathematics' },
  { id: 'u5', name: 'Admin', email: 'admin@example.edu', role: 'admin' },
];

export const mockOpportunities: Opportunity[] = [
  {
    id: 'o1',
    title: 'AI-Powered Campus Navigation',
    description: 'An application to help visually impaired students navigate the campus using computer vision.',
    domain: 'Artificial Intelligence',
    requiredSkills: ['Python', 'Computer Vision', 'React Native'],
    teamSize: 4,
    creatorId: 'u1',
    status: 'Approved',
    createdAt: '2026-09-01',
  },
  {
    id: 'o2',
    title: 'Smart Energy Dashboard',
    description: 'Monitor campus energy usage in real time.',
    domain: 'IoT & Data Analytics',
    requiredSkills: ['React', 'Node.js', 'IoT'],
    teamSize: 3,
    creatorId: 'u2',
    status: 'Open',
    createdAt: '2026-09-05',
  },
  {
    id: 'o3',
    title: 'Automated Grading Assistant',
    description: 'Use NLP to assist professors in grading essay questions.',
    domain: 'Machine Learning',
    requiredSkills: ['Python', 'NLP'],
    teamSize: 2,
    creatorId: 'u1',
    status: 'Under Review',
    createdAt: '2026-09-10',
  }
];

export const mockTeams: Team[] = [
  {
    id: 't1',
    name: 'Campus AI Visionaries',
    opportunityId: 'o1',
    mentorId: 'u3',
    memberIds: ['u1', 'u2'],
    status: 'Active',
    progress: 45,
  }
];

export const mockTasks: Task[] = [
  {
    id: 'tk1',
    title: 'Initial Prototype',
    description: 'Build the basic computer vision model',
    teamId: 't1',
    assigneeId: 'u1',
    deadline: '2026-09-20',
    status: 'In Progress',
  },
  {
    id: 'tk2',
    title: 'UI Design',
    description: 'Design the mobile application screens',
    teamId: 't1',
    assigneeId: 'u2',
    deadline: '2026-09-18',
    status: 'To Do',
  }
];

export const mockRequests: Request[] = [
  {
    id: 'r1',
    type: 'JoinTeam',
    requesterId: 'u2',
    targetId: 't1',
    status: 'Approved',
    date: '2026-09-06',
  },
  {
    id: 'r2',
    type: 'OpportunityReview',
    requesterId: 'u1',
    targetId: 'o3',
    status: 'Pending',
    date: '2026-09-11',
  }
];

export const currentUser = mockUsers[0]; // Pretend logged in as Alice
