import React, { useState } from 'react';
import { Mail, Plus, Edit } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

const templates = [
  { id: 1, name: 'Welcome Email', subject: 'Welcome to Our Platform' },
  { id: 2, name: 'Case Update', subject: 'Your Case Has Been Updated' },
  { id: 3, name: 'Meeting Reminder', subject: 'Upcoming Meeting Reminder' },
];

export default function EmailTemplates() {
  const [showNewTemplate, setShowNewTemplate] = useState(false);

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Mail className="h-6 w-6 text-indigo-600" />
          <h2 className="ml-2 text-lg font-medium">Email Templates</h2>
        </div>
        <Button onClick={() => setShowNewTemplate(!showNewTemplate)}>
          <Plus className="h-4 w-4 mr-2" />
          New Template
        </Button>
      </div>

      {showNewTemplate && (
        <div className="mb-4 border rounded-lg p-4 space-y-4">
          <h3 className="font-medium text-gray-900">Create Template</h3>
          <input
            type="text"
            placeholder="Template Name"
            className="w-full px-3 py-2 border rounded-md"
          />
          <input
            type="text"
            placeholder="Subject Line"
            className="w-full px-3 py-2 border rounded-md"
          />
          <textarea
            placeholder="Email Content"
            rows={4}
            className="w-full px-3 py-2 border rounded-md"
          />
          <Button className="w-full">Create Template</Button>
        </div>
      )}

      <div className="space-y-4">
        {templates.map((template) => (
          <div key={template.id} className="flex items-center justify-between p-3 border rounded-lg hover:border-indigo-300 transition-colors">
            <div>
              <h3 className="font-medium text-gray-900">{template.name}</h3>
              <p className="text-sm text-gray-500">{template.subject}</p>
            </div>
            <Button variant="outline" size="sm">
              <Edit className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}