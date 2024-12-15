import React from 'react';
import { ClientPermissions } from '../../types';

interface ClientPermissionsFormProps {
  permissions: ClientPermissions;
  onChange: (permissions: ClientPermissions) => void;
}

export default function ClientPermissionsForm({
  permissions,
  onChange,
}: ClientPermissionsFormProps) {
  const handleToggle = (key: keyof ClientPermissions) => {
    onChange({
      ...permissions,
      [key]: !permissions[key],
    });
  };

  const permissionItems = [
    {
      key: 'viewCases' as keyof ClientPermissions,
      label: 'View Cases',
      description: 'Access to view case details and status',
    },
    {
      key: 'viewDocuments' as keyof ClientPermissions,
      label: 'View Documents',
      description: 'Access to view and download case-related documents',
    },
    {
      key: 'viewBilling' as keyof ClientPermissions,
      label: 'View Billing',
      description: 'Access to billing information and invoices',
    },
    {
      key: 'viewCalendar' as keyof ClientPermissions,
      label: 'View Calendar',
      description: 'Access to case calendar and deadlines',
    },
    {
      key: 'submitDocuments' as keyof ClientPermissions,
      label: 'Submit Documents',
      description: 'Ability to upload and submit documents',
    },
    {
      key: 'communicateWithTeam' as keyof ClientPermissions,
      label: 'Team Communication',
      description: 'Access to messaging with the legal team',
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">Client Permissions</h3>
      <div className="space-y-4">
        {permissionItems.map((item) => (
          <div key={item.key} className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                id={item.key}
                type="checkbox"
                checked={permissions[item.key]}
                onChange={() => handleToggle(item.key)}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor={item.key} className="font-medium text-gray-900">
                {item.label}
              </label>
              <p className="text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}