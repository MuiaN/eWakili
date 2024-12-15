export interface AdminStats {
  totalUsers: number;
  activeClients: number;
  totalCases: number;
  pendingApprovals: number;
  systemHealth: {
    status: 'healthy' | 'warning' | 'critical';
    lastBackup: string;
    storageUsed: string;
  };
}

export interface UserManagementFilters {
  role?: string;
  department?: string;
  status?: 'active' | 'inactive';
}

export interface AuditLogEntry {
  id: string;
  userId: string;
  action: string;
  details: string;
  timestamp: string;
  ipAddress: string;
}

export interface SystemSettings {
  maintenanceMode: boolean;
  allowClientRegistration: boolean;
  defaultClientPermissions: ClientPermissions;
  backupSchedule: 'daily' | 'weekly' | 'monthly';
  retentionPeriod: number;
}