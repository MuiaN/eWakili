import React from 'react';
import { Users, Briefcase, Clock, AlertCircle } from 'lucide-react';

const stats = [
  { name: 'Active Cases', value: '45', icon: Briefcase, color: 'bg-blue-500' },
  { name: 'Active Clients', value: '126', icon: Users, color: 'bg-green-500' },
  { name: 'Pending Tasks', value: '15', icon: Clock, color: 'bg-yellow-500' },
  { name: 'Urgent Matters', value: '3', icon: AlertCircle, color: 'bg-red-500' },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6"
          >
            <dt>
              <div className={`absolute rounded-md ${stat.color} p-3`}>
                <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">
                {stat.name}
              </p>
            </dt>
            <dd className="ml-16 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            </dd>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="rounded-lg bg-white shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Recent Cases
            </h3>
            {/* Add recent cases list component here */}
          </div>
        </div>

        <div className="rounded-lg bg-white shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Upcoming Deadlines
            </h3>
            {/* Add deadlines component here */}
          </div>
        </div>
      </div>
    </div>
  );
}