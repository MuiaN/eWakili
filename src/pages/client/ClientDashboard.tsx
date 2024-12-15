import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Briefcase, 
  FileText, 
  Calendar, 
  DollarSign, 
  MessageSquare, 
  Clock 
} from 'lucide-react';
import { Button } from '../../components/ui/Button';

const mockStats = {
  activeCases: 3,
  pendingDocuments: 2,
  upcomingDeadlines: 4,
  unreadMessages: 1,
  pendingBills: 2,
  totalDue: '$5,250.00'
};

export default function ClientDashboard() {
  const navigate = useNavigate();

  const modules = [
    {
      name: 'Active Cases',
      value: mockStats.activeCases,
      icon: Briefcase,
      path: '/client/cases',
      color: 'bg-blue-500',
    },
    {
      name: 'Documents',
      value: mockStats.pendingDocuments,
      icon: FileText,
      path: '/client/documents',
      color: 'bg-green-500',
    },
    {
      name: 'Calendar',
      value: mockStats.upcomingDeadlines,
      icon: Calendar,
      path: '/client/calendar',
      color: 'bg-purple-500',
    },
    {
      name: 'Billing',
      value: mockStats.pendingBills,
      icon: DollarSign,
      path: '/client/billing',
      color: 'bg-yellow-500',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Client Dashboard</h1>
        <Button onClick={() => navigate('/client/messages')}>
          <MessageSquare className="h-4 w-4 mr-2" />
          Messages
          {mockStats.unreadMessages > 0 && (
            <span className="ml-2 bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {mockStats.unreadMessages}
            </span>
          )}
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {modules.map((module) => (
          <button
            key={module.name}
            onClick={() => navigate(module.path)}
            className="relative overflow-hidden rounded-lg bg-white p-5 shadow transition-all hover:shadow-md"
          >
            <dt>
              <div className={`absolute rounded-md ${module.color} p-3`}>
                <module.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">
                {module.name}
              </p>
            </dt>
            <dd className="ml-16 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">
                {module.value}
              </p>
            </dd>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Recent Case Updates
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <span className="ml-2 text-sm text-gray-600">
                    Document review completed for Case #123
                  </span>
                </div>
                <span className="text-xs text-gray-500">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <span className="ml-2 text-sm text-gray-600">
                    New hearing date set for Case #456
                  </span>
                </div>
                <span className="text-xs text-gray-500">1 day ago</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Billing Summary
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Outstanding</span>
                <span className="text-lg font-semibold text-gray-900">
                  {mockStats.totalDue}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Pending Bills</span>
                <span className="text-sm font-medium text-gray-900">
                  {mockStats.pendingBills} invoices
                </span>
              </div>
              <Button
                onClick={() => navigate('/client/billing')}
                className="w-full"
              >
                View Billing Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}