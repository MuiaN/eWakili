import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  Calendar,
  DollarSign,
  MessageSquare,
  Clock,
  FileQuestion,
  Settings
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/client', icon: LayoutDashboard },
  { name: 'My Cases', href: '/client/cases', icon: Briefcase },
  { name: 'Documents', href: '/client/documents', icon: FileText },
  { name: 'Calendar', href: '/client/calendar', icon: Calendar },
  { name: 'Billing', href: '/client/billing', icon: DollarSign },
  { name: 'Messages', href: '/client/messages', icon: MessageSquare },
  { name: 'Deadlines', href: '/client/deadlines', icon: Clock },
  { name: 'Support', href: '/client/support', icon: FileQuestion },
  { name: 'Settings', href: '/client/settings', icon: Settings },
];

export default function ClientSidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <nav className="mt-5 px-2">
        <div className="space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                  isActive
                    ? 'bg-indigo-100 text-indigo-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
            >
              <item.icon
                className="mr-3 h-5 w-5 flex-shrink-0"
                aria-hidden="true"
              />
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}