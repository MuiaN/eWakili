import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  Calendar,
  DollarSign,
  MessageSquare,
  Clock,
  FileQuestion,
  Settings,
  Bot
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/client', icon: LayoutDashboard },
  { name: 'My Cases', href: '/client/cases', icon: Briefcase },
  { name: 'Documents', href: '/client/documents', icon: FileText },
  { name: 'Calendar', href: '/client/calendar', icon: Calendar },
  { name: 'Billing', href: '/client/billing', icon: DollarSign },
  { name: 'Messages', href: '/client/messages', icon: MessageSquare },
  { name: 'Deadlines', href: '/client/deadlines', icon: Clock },
  { name: 'eWakili AI', href: '/client/ai', icon: Bot },
  { name: 'Support', href: '/client/support', icon: FileQuestion },
  { name: 'Settings', href: '/client/settings', icon: Settings },
];

export default function ClientSidebar() {
  const location = useLocation();

  return (
    <div className="w-72 flex-shrink-0 bg-white border-r border-gray-200 min-h-screen">
      <nav className="mt-5 px-2">
        <div className="space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href || 
                           (item.href !== '/client' && location.pathname.startsWith(item.href));
            
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-md whitespace-nowrap ${
                  isActive
                    ? 'bg-indigo-100 text-indigo-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <item.icon
                  className={`mr-3 h-5 w-5 flex-shrink-0 ${
                    isActive ? 'text-indigo-600' : 'text-gray-400'
                  }`}
                />
                {item.name}
              </NavLink>
            );
          })}
        </div>
      </nav>
    </div>
  );
}