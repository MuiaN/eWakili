import React from 'react';
import { Shield, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import { Button } from '../../components/ui/Button';

const complianceItems = [
  {
    id: 1,
    name: 'Data Privacy',
    status: 'compliant',
    lastCheck: '2024-03-15',
    description: 'All data privacy requirements are met'
  },
  {
    id: 2,
    name: 'Document Retention',
    status: 'warning',
    lastCheck: '2024-03-14',
    description: 'Some documents need review'
  },
  {
    id: 3,
    name: 'Access Control',
    status: 'non-compliant',
    lastCheck: '2024-03-13',
    description: 'Requires immediate attention'
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'compliant':
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case 'warning':
      return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
    case 'non-compliant':
      return <XCircle className="h-5 w-5 text-red-500" />;
    default:
      return null;
  }
};

export default function Compliance() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Compliance</h1>
        <Button>
          <Shield className="h-4 w-4 mr-2" />
          Run Audit
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center mb-6">
            <Shield className="h-6 w-6 text-indigo-600" />
            <h2 className="ml-2 text-lg font-medium">Compliance Status</h2>
          </div>

          <div className="space-y-4">
            {complianceItems.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {getStatusIcon(item.status)}
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500">
                      Last checked: {item.lastCheck}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center mb-4">
            <AlertTriangle className="h-6 w-6 text-yellow-600" />
            <h2 className="ml-2 text-lg font-medium">Required Actions</h2>
          </div>
          <div className="space-y-4">
            <div className="border rounded-lg p-4 bg-yellow-50">
              <h3 className="text-sm font-medium text-yellow-800">Document Retention Policy</h3>
              <p className="mt-1 text-sm text-yellow-700">
                Review and update document retention policies for compliance with new regulations.
              </p>
              <Button size="sm" className="mt-3">
                Review Now
              </Button>
            </div>
            <div className="border rounded-lg p-4 bg-red-50">
              <h3 className="text-sm font-medium text-red-800">Access Control Update</h3>
              <p className="mt-1 text-sm text-red-700">
                Update access control policies to meet security requirements.
              </p>
              <Button size="sm" className="mt-3">
                Update Policies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}