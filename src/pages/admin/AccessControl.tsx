import React, { useState } from 'react';
import { Shield, Users, Lock, Key } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import type { UserRole } from '../../types';

interface RolePermission {
  id: string;
  name: string;
  description: string;
  permissions: string[];
}

const rolePermissions: RolePermission[] = [
  {
    id: 'managing_partner',
    name: 'Managing Partner',
    description: 'Full system access and management capabilities',
    permissions: [
      'user_management',
      'financial_management',
      'case_management',
      'system_settings',
      'audit_logs',
    ],
  },
  {
    id: 'senior_associate',
    name: 'Senior Associate',
    description: 'Case management and team supervision',
    permissions: ['case_management', 'document_management', 'client_communication'],
  },
  {
    id: 'paralegal',
    name: 'Paralegal',
    description: 'Document preparation and case support',
    permissions: ['document_preparation', 'case_viewing', 'client_support'],
  },
];

export default function AccessControl() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">Access Control</h2>
        <Button>
          <Key className="h-4 w-4 mr-2" />
          Add New Role
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Role Management</h3>
          <div className="space-y-4">
            {rolePermissions.map((role) => (
              <div
                key={role.id}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  selectedRole === role.id
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-200 hover:border-indigo-300'
                }`}
                onClick={() => setSelectedRole(role.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-indigo-500" />
                    <span className="ml-2 font-medium">{role.name}</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
                <p className="mt-2 text-sm text-gray-500">{role.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {role.permissions.map((permission) => (
                    <span
                      key={permission}
                      className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700"
                    >
                      {permission.replace('_', ' ')}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Permission Settings
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Case Management
              </h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="ml-2 text-sm">View Cases</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="ml-2 text-sm">Create Cases</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="ml-2 text-sm">Edit Cases</span>
                </label>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Document Management
              </h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="ml-2 text-sm">View Documents</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="ml-2 text-sm">Upload Documents</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="ml-2 text-sm">Delete Documents</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}