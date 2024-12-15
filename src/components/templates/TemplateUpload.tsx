import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

interface TemplateUploadProps {
  onUpload: (file: File, metadata: TemplateMetadata) => void;
}

interface TemplateMetadata {
  name: string;
  department: string;
  type: string;
}

export default function TemplateUpload({ onUpload }: TemplateUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [metadata, setMetadata] = useState<TemplateMetadata>({
    name: '',
    department: '',
    type: '',
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setMetadata((prev) => ({ ...prev, name: file.name }));
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (selectedFile && metadata.department && metadata.type) {
      onUpload(selectedFile, metadata);
      setSelectedFile(null);
      setMetadata({ name: '', department: '', type: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
        <div className="flex flex-col items-center">
          <Upload className="h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            Drag and drop your template file here, or click to select
          </p>
          <input
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept=".docx,.pdf"
            id="template-upload"
          />
          <Button
            type="button"
            variant="outline"
            className="mt-2"
            onClick={() => document.getElementById('template-upload')?.click()}
          >
            Select File
          </Button>
          {selectedFile && (
            <p className="mt-2 text-sm text-gray-600">{selectedFile.name}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input
          placeholder="Department"
          value={metadata.department}
          onChange={(e) =>
            setMetadata((prev) => ({ ...prev, department: e.target.value }))
          }
          required
        />
        <Input
          placeholder="Template Type"
          value={metadata.type}
          onChange={(e) =>
            setMetadata((prev) => ({ ...prev, type: e.target.value }))
          }
          required
        />
      </div>

      <Button type="submit" className="w-full" disabled={!selectedFile}>
        Upload Template
      </Button>
    </form>
  );
}