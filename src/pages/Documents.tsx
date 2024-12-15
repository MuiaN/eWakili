import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Upload, Search, File, FileText, Image, Download } from 'lucide-react';

const mockDocuments = [
  {
    id: 1,
    name: 'Contract Agreement.pdf',
    type: 'PDF',
    size: '2.5 MB',
    lastModified: '2024-03-15',
    case: 'Smith vs. Johnson',
  },
  {
    id: 2,
    name: 'Evidence Photos.jpg',
    type: 'Image',
    size: '4.2 MB',
    lastModified: '2024-03-14',
    case: 'Corporate Merger - ABC Corp',
  },
  {
    id: 3,
    name: 'Legal Brief.docx',
    type: 'Document',
    size: '1.8 MB',
    lastModified: '2024-03-13',
    case: 'Patent Application #12345',
  },
];

const getFileIcon = (type: string) => {
  switch (type) {
    case 'PDF':
      return <File className="h-5 w-5 text-red-500" />;
    case 'Document':
      return <FileText className="h-5 w-5 text-blue-500" />;
    case 'Image':
      return <Image className="h-5 w-5 text-green-500" />;
    default:
      return <File className="h-5 w-5 text-gray-500" />;
  }
};

export default function Documents() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Documents</h1>
        <Button>
          <Upload className="h-4 w-4 mr-2" />
          Upload
        </Button>
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
        <Button variant="outline">Filter</Button>
      </div>

      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Case
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Size
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Modified
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockDocuments.map((doc) => (
              <tr key={doc.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {getFileIcon(doc.type)}
                    <span className="ml-2 text-sm font-medium text-gray-900">
                      {doc.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{doc.case}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{doc.size}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{doc.lastModified}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4" />
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