import React, { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Settings, Save, Bell, Mail, Lock } from 'lucide-react';

const defaultSettings = {
  maintenanceMode: false,
  allowClientRegistration: true,
  defaultClientPermissions: {
    viewCases: true,
    viewDocuments: true,
    viewBilling: false,
    viewCalendar: true,
    submitDocuments: true,
    communicateWithTeam: true,
  },
  backupSchedule: 'daily',
  retentionPeriod: 90,
  notifications: {
    systemUpdates: true,
    securityAlerts: true,
    userRegistrations: true,
    backupNotifications: true,
    maintenanceAlerts: true,
  }
};

export default function SystemSettings() {
  const [settings, setSettings] = useState(defaultSettings);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    // Save settings to backend
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">System Settings</h1>
        <div className="space-x-4">
          {isEditing ? (
            <Button onClick={handleSave}>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          ) : (
            <Button onClick={() => setIsEditing(true)}>
              <Settings className="h-4 w-4 mr-2" />
              Edit Settings
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            General Settings
          </h3>
          <div className="space-y-4">
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.maintenanceMode}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      maintenanceMode: e.target.checked,
                    })
                  }
                  disabled={!isEditing}
                  className="rounded border-gray-300"
                />
                <span className="ml-2">Maintenance Mode</span>
              </label>
              <p className="mt-1 text-sm text-gray-500">
                Enable maintenance mode to prevent user access during updates
              </p>
            </div>

            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.allowClientRegistration}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      allowClientRegistration: e.target.checked,
                    })
                  }
                  disabled={!isEditing}
                  className="rounded border-gray-300"
                />
                <span className="ml-2">Allow Client Registration</span>
              </label>
              <p className="mt-1 text-sm text-gray-500">
                Allow new clients to register through the portal
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Backup Settings
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Backup Schedule
              </label>
              <select
                value={settings.backupSchedule}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    backupSchedule: e.target.value,
                  })
                }
                disabled={!isEditing}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Data Retention Period (days)
              </label>
              <Input
                type="number"
                value={settings.retentionPeriod}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    retentionPeriod: parseInt(e.target.value),
                  })
                }
                disabled={!isEditing}
                className="mt-1"
              />
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            <Bell className="h-5 w-5 inline-block mr-2" />
            Notification Settings
          </h3>
          <div className="space-y-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.notifications.systemUpdates}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    notifications: {
                      ...settings.notifications,
                      systemUpdates: e.target.checked,
                    },
                  })
                }
                disabled={!isEditing}
                className="rounded border-gray-300 text-indigo-600"
              />
              <span className="ml-2">System Updates</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.notifications.securityAlerts}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    notifications: {
                      ...settings.notifications,
                      securityAlerts: e.target.checked,
                    },
                  })
                }
                disabled={!isEditing}
                className="rounded border-gray-300 text-indigo-600"
              />
              <span className="ml-2">Security Alerts</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.notifications.userRegistrations}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    notifications: {
                      ...settings.notifications,
                      userRegistrations: e.target.checked,
                    },
                  })
                }
                disabled={!isEditing}
                className="rounded border-gray-300 text-indigo-600"
              />
              <span className="ml-2">User Registrations</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.notifications.backupNotifications}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    notifications: {
                      ...settings.notifications,
                      backupNotifications: e.target.checked,
                    },
                  })
                }
                disabled={!isEditing}
                className="rounded border-gray-300 text-indigo-600"
              />
              <span className="ml-2">Backup Notifications</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.notifications.maintenanceAlerts}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    notifications: {
                      ...settings.notifications,
                      maintenanceAlerts: e.target.checked,
                    },
                  })
                }
                disabled={!isEditing}
                className="rounded border-gray-300 text-indigo-600"
              />
              <span className="ml-2">Maintenance Alerts</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}