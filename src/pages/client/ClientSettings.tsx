import React, { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Bell, Lock, User, Mail } from 'lucide-react';

export default function ClientSettings() {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    caseUpdates: true,
    billing: true,
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              <User className="h-5 w-5 inline-block mr-2" />
              Profile Information
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <Input defaultValue="John Smith" className="mt-1" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input defaultValue="john@example.com" className="mt-1" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <Input defaultValue="+1 (555) 123-4567" className="mt-1" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <Input defaultValue="123 Main St" className="mt-1" />
                </div>
              </div>
              <Button>Update Profile</Button>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              <Bell className="h-5 w-5 inline-block mr-2" />
              Notification Preferences
            </h3>
            <div className="space-y-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={notifications.email}
                  onChange={(e) =>
                    setNotifications({ ...notifications, email: e.target.checked })
                  }
                  className="rounded border-gray-300 text-indigo-600"
                />
                <span className="ml-2">Email Notifications</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={notifications.sms}
                  onChange={(e) =>
                    setNotifications({ ...notifications, sms: e.target.checked })
                  }
                  className="rounded border-gray-300 text-indigo-600"
                />
                <span className="ml-2">SMS Notifications</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={notifications.caseUpdates}
                  onChange={(e) =>
                    setNotifications({
                      ...notifications,
                      caseUpdates: e.target.checked,
                    })
                  }
                  className="rounded border-gray-300 text-indigo-600"
                />
                <span className="ml-2">Case Updates</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={notifications.billing}
                  onChange={(e) =>
                    setNotifications({
                      ...notifications,
                      billing: e.target.checked,
                    })
                  }
                  className="rounded border-gray-300 text-indigo-600"
                />
                <span className="ml-2">Billing Notifications</span>
              </label>
              <Button>Save Preferences</Button>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              <Lock className="h-5 w-5 inline-block mr-2" />
              Security
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Current Password
                </label>
                <Input type="password" className="mt-1" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <Input type="password" className="mt-1" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Confirm New Password
                </label>
                <Input type="password" className="mt-1" />
              </div>
              <Button>Change Password</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}