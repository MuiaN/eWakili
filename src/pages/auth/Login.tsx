import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { useAuthStore } from '../../store/authStore';
import { UserRole, StaffRole, DEFAULT_PERMISSIONS } from '../../types';

// Demo users for testing
const DEMO_USERS = {
  'admin@ewakili.com': {
    role: 'ADMIN' as UserRole,
    name: 'Admin User',
    permissions: {
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
      systemSettings: true,
    },
  },
  'lawyer@ewakili.com': {
    role: 'STAFF' as UserRole,
    staffRole: 'LAWYER' as StaffRole,
    name: 'Lawyer User',
    permissions: DEFAULT_PERMISSIONS.LAWYER,
  },
  'paralegal@ewakili.com': {
    role: 'STAFF' as UserRole,
    staffRole: 'PARALEGAL' as StaffRole,
    name: 'Paralegal User',
    permissions: DEFAULT_PERMISSIONS.PARALEGAL,
  },
  'client@ewakili.com': {
    role: 'CLIENT' as UserRole,
    name: 'Client User',
    permissions: {
      viewCases: true,
      manageCases: false,
      viewClients: false,
      manageClients: false,
      viewDocuments: true,
      manageDocuments: false,
      viewBilling: true,
      manageBilling: false,
      viewReports: false,
      manageStaff: false,
      manageRoles: false,
      systemSettings: false,
    },
  },
};

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const demoUser = DEMO_USERS[formData.email.toLowerCase()];
    if (demoUser) {
      const user = {
        id: '1',
        name: demoUser.name,
        email: formData.email,
        role: demoUser.role,
        staffRole: demoUser.staffRole,
        permissions: demoUser.permissions,
      };
      
      setUser(user);
      navigate(`/${demoUser.role.toLowerCase()}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Demo Accounts:
            <br />
            admin@ewakili.com (Admin)
            <br />
            lawyer@ewakili.com (Staff - Lawyer)
            <br />
            paralegal@ewakili.com (Staff - Paralegal)
            <br />
            client@ewakili.com (Client)
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <Input
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              autoComplete="email"
            />
            <Input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
              autoComplete="current-password"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <Link
              to="/forgot-password"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </Link>
          </div>

          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}