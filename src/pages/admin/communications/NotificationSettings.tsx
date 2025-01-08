import React, { useState } from 'react';
import { Bell, Settings } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

interface NotificationType {
  id: number;
  name: string;
  email: boolean;
  push: boolean;
  sms: boolean;
}

const defaultNotificationTypes: NotificationType[] = [
  { id: 1, name: 'Case Updates', email: true, push: true, sms: false },
  { id: 2, name: 'Document Changes', email: true, push: true, sms: false },
  { id: 3, name: 'System Alerts', email: true, push: true, sms: true },
  { id: 4, name: 'Meeting Reminders', email: true, push: true, sms: true },
];

export default function NotificationSettings() {
  const [showSettings, setShowSettings] = useState(false);
  const [notificationTypes, setNotificationTypes] = useState<NotificationType[]>(defaultNotificationTypes);

  const handleSettingChange = (typeId: number, channel: 'email' | 'push' | 'sms', value: boolean) => {
    setNotificationTypes(types =>
      types.map(type =>
        type.id === typeId ? { ...type, [channel]: value } : type
      )
    );
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Bell className="h-6 w-6 text-indigo-600" />
          <h2 className="ml-2 text-lg font-medium">Notification Settings</h2>
        </div>
        <Button onClick={() => setShowSettings(!showSettings)}>
          <Settings className="h-4 w-4 mr-2" />
          Configure
        </Button>
      </div>

      <div className="space-y-4">
        {notificationTypes.map((type) => (
          <div key={type.id} className={`border rounded-lg p-3 transition-colors ${showSettings ? 'border-indigo-200 bg-indigo-50' : ''}`}>
            <h3 className="font-medium text-gray-900 mb-2">{type.name}</h3>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={type.email}
                  onChange={(e) => handleSettingChange(type.id, 'email', e.target.checked)}
                  disabled={!showSettings}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2 text-sm text-gray-600">Email</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={type.push}
                  onChange={(e) => handleSettingChange(type.id, 'push', e.target.checked)}
                  disabled={!showSettings}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2 text-sm text-gray-600">Push</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={type.sms}
                  onChange={(e) => handleSettingChange(type.id, 'sms', e.target.checked)}
                  disabled={!showSettings}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2 text-sm text-gray-600">SMS</span>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}