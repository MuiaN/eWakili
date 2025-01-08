import React, { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Bell, Lock, User, Mail, Clock } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export default function StaffSettings() {
  const { user } = useAuthStore();
  const [notifications, setNotifications] = useState({
    caseUpdates: true,
    documentChanges: true,
    clientMessages: true,
    teamMessages: true,
    deadlineReminders: true,
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Staff Settings</h1>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              <User className="h-5 w-5 inline-block mr-2" />
              Professional Information
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <Input defaultValue={user?.name} className="mt-1" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input defaultValue={user?.email} className="mt-1" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Role
                  </label>
                  <Input defaultValue={user?.staffRole} className="mt-1" disabled />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Bar Number
                  </label>
                  <Input placeholder="Enter bar number" className="mt-1" />
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
                  checked={notifications.caseUpdates}
                  onChange={(e) =>
                    setNotifications({ ...notifications, caseUpdates: e.target.checked })
                  }
                  className="rounded border-gray-300 text-indigo-600"
                />
                <span className="ml-2">Case Updates</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={notifications.documentChanges}
                  onChange={(e) =>
                    setNotifications({ ...notifications, documentChanges: e.target.checked })
                  }
                  className="rounded border-gray-300 text-indigo-600"
                />
                <span className="ml-2">Document Changes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={notifications.clientMessages}
                  onChange={(e) =>
                    setNotifications({ ...notifications, clientMessages: e.target.checked })
                  }
                  className="rounded border-gray-300 text-indigo-600"
                />
                <span className="ml-2">Client Messages</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={notifications.teamMessages}
                  onChange={(e) =>
                    setNotifications({ ...notifications, teamMessages: e.target.checked })
                  }
                  className="rounded border-gray-300 text-indigo-600"
                />
                <span className="ml-2">Team Messages</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={notifications.deadlineReminders}
                  onChange={(e) =>
                    setNotifications({ ...notifications, deadlineReminders: e.target.checked })
                  }
                  className="rounded border-gray-300 text-indigo-600"
                />
                <span className="ml-2">Deadline Reminders</span>
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

        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              <Clock className="h-5 w-5 inline-block mr-2" />
              Working Hours
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Start Time
                  </label>
                  <Input type="time" defaultValue="09:00" className="mt-1" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    End Time
                  </label>
                  <Input type="time" defaultValue="17:00" className="mt-1" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Working Days
                </label>
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                  <label key={day} className="flex items-center">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="rounded border-gray-300 text-indigo-600"
                    />
                    <span className="ml-2">{day}</span>
                  </label>
                ))}
              </div>
              <Button>Update Schedule</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}