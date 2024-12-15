import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Users,
  Settings,
  Shield,
  Database,
  Activity,
  AlertCircle,
} from 'lucide-react';
import { AdminStats } from '../../types/admin';

const mockStats: AdminStats = {
  totalUsers: 156,
  activeClients: 89,
  totalCases: 245,
  pendingApprovals: 12,
  systemHealth: {
    status: 'healthy',
    lastBackup: '2024-03-15 04:00 AM',
    storageUsed: '45.8 GB',
  },
};

export default function AdminDashboard() {
  const navigate = useNavigate();

  const modules = [
    {
      name: 'User Management',
      description: 'Manage staff and client accounts',
      icon: Users,
      path: '/admin/users',
      count: mockStats.totalUsers,
    },
    {
      name: 'System Settings',
      description: 'Configure system preferences',
      icon: Settings,
      path: '/admin/settings',
    },
    {
      name: 'Access Control',
      description: 'Manage roles and permissions',
      icon: Shield,
      path: '/admin/access',
    },
    {
      name: 'Backup & Storage',
      description: 'Manage system backups and storage',
      icon: Database,
      path: '/admin/backup',
    },
    {
      name: 'System Health',
      description: 'Monitor system performance',
      icon: Activity,
      path: '/admin/health',
    },
    {
      name: 'Audit Logs',
      description: 'View system activity logs',
      icon: AlertCircle,
      path: '/admin/audit',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">
          System Administration
        </h1>
        <div className="flex items-center space-x-2">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
            mockStats.systemHealth.status === 'healthy'
              ? 'bg-green-100 text-green-800'
              : mockStats.systemHealth.status === 'warning'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}>
            System Status: {mockStats.systemHealth.status}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => (
          <button
            key={module.name}
            onClick={() => navigate(module.path)}
            className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <module.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {module.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{module.description}</p>
              </div>
            </div>
            {module.count && (
              <div className="absolute top-6 right-6">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  {module.count}
                </span>
              </div>
            )}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            System Overview
          </h3>
          <dl className="grid grid-cols-1 gap-4">
            <div className="flex justify-between">
              <dt className="text-sm text-gray-500">Last Backup</dt>
              <dd className="text-sm font-medium text-gray-900">
                {mockStats.systemHealth.lastBackup}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-sm text-gray-500">Storage Used</dt>
              <dd className="text-sm font-medium text-gray-900">
                {mockStats.systemHealth.storageUsed}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-sm text-gray-500">Pending Approvals</dt>
              <dd className="text-sm font-medium text-gray-900">
                {mockStats.pendingApprovals}
              </dd>
            </div>
          </dl>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200">
              Generate System Report
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200">
              Backup Now
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-yellow-700 bg-yellow-100 hover:bg-yellow-200">
              Clear Cache
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200">
              Maintenance Mode
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}