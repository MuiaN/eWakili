import React from 'react';
import { MessageSquare, Mail, Bell } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export default function Communications() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Communications</h1>
        <Button>
          <MessageSquare className="h-4 w-4 mr-2" />
          New Message
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center mb-4">
            <MessageSquare className="h-6 w-6 text-indigo-600" />
            <h2 className="ml-2 text-lg font-medium">Internal Chat</h2>
          </div>
          {/* Add chat component */}
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Mail className="h-6 w-6 text-indigo-600" />
            <h2 className="ml-2 text-lg font-medium">Email Templates</h2>
          </div>
          {/* Add email templates */}
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Bell className="h-6 w-6 text-indigo-600" />
            <h2 className="ml-2 text-lg font-medium">Notifications</h2>
          </div>
          {/* Add notification settings */}
        </div>
      </div>
    </div>
  );
}