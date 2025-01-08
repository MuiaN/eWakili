import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

interface User {
  id: string;
  name: string;
  role: string;
}

interface NewMessageDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onStartChat: (userId: string) => void;
  availableUsers: User[];
}

export default function NewMessageDialog({
  isOpen,
  onClose,
  onStartChat,
  availableUsers,
}: NewMessageDialogProps) {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filteredUsers = availableUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">New Message</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mb-4">
          <Input
            type="search"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            icon={<Search className="h-4 w-4 text-gray-400" />}
          />
        </div>

        <div className="max-h-96 overflow-y-auto">
          {filteredUsers.map((user) => (
            <button
              key={user.id}
              onClick={() => {
                onStartChat(user.id);
                onClose();
              }}
              className="w-full text-left p-3 hover:bg-gray-50 rounded-lg flex items-center space-x-3"
            >
              <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                <span className="text-indigo-600 font-medium">
                  {user.name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="font-medium text-gray-900">{user.name}</div>
                <div className="text-sm text-gray-500">{user.role}</div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-4 flex justify-end">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}