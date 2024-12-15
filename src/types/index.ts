export type UserRole = 
  | 'SUPER_ADMIN'
  | 'MANAGING_PARTNER'
  | 'DEPARTMENT_HEAD'
  | 'SENIOR_ASSOCIATE'
  | 'JUNIOR_LAWYER'
  | 'PARALEGAL'
  | 'CLIENT_RELATIONSHIP_MANAGER'
  | 'ACCOUNTANT'
  | 'RECEPTIONIST'
  | 'CLIENT'
  | 'AUDITOR';

export type CaseStatus = 
  | 'NEW'
  | 'IN_PROGRESS'
  | 'AWAITING_CLIENT_INPUT'
  | 'UNDER_REVIEW'
  | 'CLOSED';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department?: string;
  permissions: ClientPermissions;
}

export interface ClientPermissions {
  viewCases: boolean;
  viewDocuments: boolean;
  viewBilling: boolean;
  viewCalendar: boolean;
  submitDocuments: boolean;
  communicateWithTeam: boolean;
}

export interface Case {
  id: string;
  title: string;
  clientId: string;
  status: CaseStatus;
  assignedTo: string;
  department: string;
  createdAt: Date;
  updatedAt: Date;
  dueDate?: Date;
}

export interface Template {
  id: string;
  name: string;
  department: string;
  type: string;
  lastModified: string;
}

export interface ClientDashboardStats {
  activeCases: number;
  pendingDocuments: number;
  upcomingDeadlines: number;
  unreadMessages: number;
}