import { useAuthStore } from '../store/authStore';
import { UserRole } from '../types';

interface AvailableUser {
  id: string;
  name: string;
  role: string;
}

// Mock users for different roles
const mockUsers = {
  ADMIN: [
    { id: '1', name: 'Sarah Wilson', role: 'Managing Partner' },
    { id: '2', name: 'David Chen', role: 'Senior Associate' },
    { id: '3', name: 'Lisa Thompson', role: 'IT Support' },
    { id: '4', name: 'John Smith', role: 'Client' },
  ],
  STAFF: [
    { id: '1', name: 'Sarah Wilson', role: 'Managing Partner' },
    { id: '2', name: 'David Chen', role: 'Senior Associate' },
    { id: '4', name: 'John Smith', role: 'Client' },
  ],
  CLIENT: [
    { id: '1', name: 'Sarah Wilson', role: 'Managing Partner' },
    { id: '2', name: 'David Chen', role: 'Lawyer' },
    { id: '3', name: 'Maria Garcia', role: 'Paralegal' },
  ],
};

export function useAvailableUsers(): AvailableUser[] {
  const { user } = useAuthStore();
  
  if (!user) return [];
  
  // Return users based on role
  return mockUsers[user.role as UserRole] || [];
}