import React from 'react';
import { Briefcase, Users, FileText, Calendar, DollarSign } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const mockStats = {
  activeCases: 12,
  activeClients: 25,
  pendingDocuments: 8,
  upcomingDeadlines: 5,
  pendingBills: 15,
};

export default function StaffDashboard() {
  const { user } = useAuthStore();
  const permissions = user?.permissions;

  const modules = [
    {
      name: 'Active Cases',
      value: mockStats.activeCases,
      icon: Briefcase,
      show: permissions?.viewCases,
    },
    {
      name: 'Active Clients',
      value: mockStats.activeClients,
      icon: Users,
      show: permissions?.viewClients,
    },
    {
      name: 'Pending Documents',
      value: mockStats.pendingDocuments,
      icon: FileText,
      show: permissions?.viewDocuments,
    },
    {
      name: 'Pending Bills',
      value: mockStats.pendingBills,
      icon: DollarSign,
      show: permissions?.viewBilling,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Staff Dashboard</h1>
        <span className="text-sm text-gray-500">Welcome, {user?.name}</span>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {modules
          .filter((module) => module.show)
          .map((module) => (
            <div
              key={module.name}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <module.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {module.name}
                      </dt>
                      <dd className="text-2xl font-semibold text-gray-900">
                        {module.value}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Cases</h3>
          <div className="space-y-4">
            {/* Add recent cases list here */}
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Upcoming Deadlines
          </h3>
          <div className="space-y-4">
            {/* Add deadlines list here */}
          </div>
        </div>
      </div>
    </div>
  );
}