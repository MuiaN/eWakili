import React from 'react';
import { Database, HardDrive, Cloud, Download } from 'lucide-react';
import { Button } from '../../components/ui/Button';

const mockBackups = [
  {
    id: 1,
    date: '2024-03-15 04:00 AM',
    size: '2.5 GB',
    type: 'Automated',
    status: 'success'
  },
  {
    id: 2,
    date: '2024-03-14 04:00 AM',
    size: '2.3 GB',
    type: 'Automated',
    status: 'success'
  }
];

export default function BackupStorage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Backup & Storage</h1>
        <Button>
          <Database className="h-4 w-4 mr-2" />
          Create Backup
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center mb-4">
            <HardDrive className="h-6 w-6 text-indigo-600" />
            <h2 className="ml-2 text-lg font-medium">Storage Usage</h2>
          </div>
          <div className="mt-4">
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                    Storage Used
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-indigo-600">
                    45.8GB / 100GB
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                <div
                  style={{ width: '45.8%' }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Cloud className="h-6 w-6 text-indigo-600" />
            <h2 className="ml-2 text-lg font-medium">Backup History</h2>
          </div>
          <div className="mt-4">
            <div className="flow-root">
              <ul className="-my-5 divide-y divide-gray-200">
                {mockBackups.map((backup) => (
                  <li key={backup.id} className="py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{backup.date}</p>
                        <p className="text-sm text-gray-500">
                          {backup.type} • {backup.size}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}