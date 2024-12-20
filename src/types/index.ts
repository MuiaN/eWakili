export type UserRole = 'ADMIN' | 'STAFF' | 'CLIENT';

export type StaffRole = 
  | 'MANAGING_PARTNER'
  | 'LAWYER'
  | 'PARALEGAL'
  | 'SECRETARY'
  | 'ACCOUNTANT';

export interface Permission {
  id: string;
  name: string;
  description: string;
}

export interface RolePermissions {
  viewCases: boolean;
  manageCases: boolean;
  viewClients: boolean;
  manageClients: boolean;
  viewDocuments: boolean;
  manageDocuments: boolean;
  viewBilling: boolean;
  manageBilling: boolean;
  viewReports: boolean;
  manageStaff: boolean;
  manageRoles: boolean;
  systemSettings: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  staffRole?: StaffRole;
  permissions: RolePermissions;
}

export const DEFAULT_PERMISSIONS: Record<StaffRole, RolePermissions> = {
  MANAGING_PARTNER: {
    viewCases: true,
    manageCases: true,
    viewClients: true,
    manageClients: true,
    viewDocuments: true,
    manageDocuments: true,
    viewBilling: true,
    manageBilling: true,
    viewReports: true,
    manageStaff: true,
    manageRoles: true,
    systemSettings: false,
  },
  LAWYER: {
    viewCases: true,
    manageCases: true,
    viewClients: true,
    manageClients: false,
    viewDocuments: true,
    manageDocuments: true,
    viewBilling: true,
    manageBilling: false,
    viewReports: true,
    manageStaff: false,
    manageRoles: false,
    systemSettings: false,
  },
  PARALEGAL: {
    viewCases: true,
    manageCases: false,
    viewClients: true,
    manageClients: false,
    viewDocuments: true,
    manageDocuments: true,
    viewBilling: false,
    manageBilling: false,
    viewReports: false,
    manageStaff: false,
    manageRoles: false,
    systemSettings: false,
  },
  SECRETARY: {
    viewCases: true,
    manageCases: false,
    viewClients: true,
    manageClients: false,
    viewDocuments: true,
    manageDocuments: false,
    viewBilling: false,
    manageBilling: false,
    viewReports: false,
    manageStaff: false,
    manageRoles: false,
    systemSettings: false,
  },
  ACCOUNTANT: {
    viewCases: false,
    manageCases: false,
    viewClients: true,
    manageClients: false,
    viewDocuments: false,
    manageDocuments: false,
    viewBilling: true,
    manageBilling: true,
    viewReports: true,
    manageStaff: false,
    manageRoles: false,
    systemSettings: false,
  },
};