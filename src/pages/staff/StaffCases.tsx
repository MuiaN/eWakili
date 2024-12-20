import React, { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Search, Filter, PlusCircle, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const mockCases = [
  {
    id: 1,
    title: 'Smith vs. Johnson',
    client: 'John Smith',
    status: 'In Progress',
    priority: 'High',
    dueDate: '2024-03-25',
  },
  {
    id: 2,
    title: 'Corporate Merger - ABC Corp',
    client: 'Jane Doe',
    status: 'Pending Review',
    priority: 'Medium',
    dueDate: '2024-04-15',
  },
];

export default function StaffCases() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Cases</h1>
        <Button>
          <PlusCircle className="h-4 w-4 mr-2" />
          New Case
        </Button>
      </div>

      <div className="flex space-x-4">
        <div className="flex-1">
          <Input
            type="search"
            placeholder="Search cases..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
            icon={<Search className="h-4 w-4 text-gray-400" />}
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Case
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Client
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Priority
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Due Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mockCases.map((case_) => (
              <tr key={case_.id}>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">
                    {case_.title}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-500">{case_.client}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    {case_.status === 'In Progress' ? (
                      <Clock className="h-5 w-5 text-yellow-500 mr-2" />
                    ) : case_.status === 'Completed' ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-blue-500 mr-2" />
                    )}
                    <span className="text-sm text-gray-500">{case_.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      case_.priority === 'High'
                        ? 'bg-red-100 text-red-800'
                        : case_.priority === 'Medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {case_.priority}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {case_.dueDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}