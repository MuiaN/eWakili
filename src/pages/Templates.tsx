import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { PlusCircle } from 'lucide-react';
import TemplateList from '../components/templates/TemplateList';
import TemplateUpload from '../components/templates/TemplateUpload';

// Mock data for templates
const mockTemplates = [
  {
    id: '1',
    name: 'Client Agreement.docx',
    department: 'Corporate',
    type: 'Agreement',
    lastModified: '2024-03-15',
  },
  {
    id: '2',
    name: 'Demand Letter.docx',
    department: 'Litigation',
    type: 'Letter',
    lastModified: '2024-03-14',
  },
  {
    id: '3',
    name: 'IP Filing Form.pdf',
    department: 'Intellectual Property',
    type: 'Form',
    lastModified: '2024-03-13',
  },
];

export default function Templates() {
  const [showUpload, setShowUpload] = useState(false);
  const [templates, setTemplates] = useState(mockTemplates);

  const handleUpload = (file: File, metadata: any) => {
    const newTemplate = {
      id: String(templates.length + 1),
      name: file.name,
      department: metadata.department,
      type: metadata.type,
      lastModified: new Date().toISOString(),
    };
    setTemplates([...templates, newTemplate]);
    setShowUpload(false);
  };

  const handleEdit = (template: any) => {
    console.log('Edit template:', template);
  };

  const handleDelete = (templateId: string) => {
    setTemplates(templates.filter((t) => t.id !== templateId));
  };

  const handleDownload = (templateId: string) => {
    console.log('Download template:', templateId);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Templates</h1>
        <Button onClick={() => setShowUpload(!showUpload)}>
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Template
        </Button>
      </div>

      {showUpload ? (
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-4">Upload New Template</h2>
          <TemplateUpload onUpload={handleUpload} />
        </div>
      ) : (
        <TemplateList
          templates={templates}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onDownload={handleDownload}
        />
      )}
    </div>
  );
}