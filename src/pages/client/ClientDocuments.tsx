import React, { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Search, Filter, File, FileText, Download } from 'lucide-react';

const mockDocuments = [
  {
    id: 1,
    name: 'Case Brief.pdf',
    type: 'PDF',
    size: '2.5 MB',
    case: 'Smith vs. Johnson',
    uploadedDate: '2024-03-15',
  },
  {
    id: 2,
    name: 'Evidence Photos.zip',
    type: 'Archive',
    size: '15.8 MB',
    case: 'Property Dispute #123',
    uploadedDate: '2024-03-14',
  },
];

export default function ClientDocuments() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Documents</h1>
      </div>

      <div className="flex space-x-4">
        <div className="flex-1">
          <Input
            type="search"
            placeholder="Search documents..."
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
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Related Case
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Size
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Uploaded
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mockDocuments.map((doc) => (
              <tr key={doc.id}>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    {doc.type === 'PDF' ? (
                      <File className="h-5 w-5 text-red-500 mr-2" />
                    ) : (
                      <FileText className="h-5 w-5 text-blue-500 mr-2" />
                    )}
                    <span className="text-sm font-medium text-gray-900">
                      {doc.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{doc.case}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{doc.type}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{doc.size}</td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {doc.uploadedDate}
                </td>
                <td className="px-6 py-4">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}