import React, { useState } from 'react';
import { FileText, Plus } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

const mockTemplates = [
  {
    id: 1,
    name: 'Client Agreement',
    description: 'Standard client agreement template',
    variables: ['clientName', 'address', 'serviceType', 'fees'],
  },
  {
    id: 2,
    name: 'Court Filing',
    description: 'Standard court filing document',
    variables: ['caseNumber', 'clientName', 'courtName', 'filingDate'],
  },
];

export default function DocumentTemplates() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Document Templates</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Template
        </Button>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="mb-6">
          <Input
            type="search"
            placeholder="Search templates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="space-y-4">
          {mockTemplates.map((template) => (
            <div
              key={template.id}
              className="border rounded-lg p-4 hover:border-indigo-500 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-indigo-600" />
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">
                      {template.name}
                    </h3>
                    <p className="text-sm text-gray-500">{template.description}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Edit Template
                </Button>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700">Variables:</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {template.variables.map((variable) => (
                    <span
                      key={variable}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                    >
                      {variable}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}