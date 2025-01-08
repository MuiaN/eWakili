import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import {
  LayoutDashboard,
  Users,
  Briefcase,
  FileText,
  Calendar,
  DollarSign,
  MessageSquare,
  Settings,
  Bot
} from 'lucide-react';

export default function StaffSidebar() {
  const { user } = useAuthStore();
  const location = useLocation();
  const permissions = user?.permissions;

  const navigation = [
    {
      name: 'Dashboard',
      href: '/staff',
      icon: LayoutDashboard,
      show: true,
    },
    {
      name: 'Cases',
      href: '/staff/cases',
      icon: Briefcase,
      show: permissions?.viewCases,
    },
    {
      name: 'Clients',
      href: '/staff/clients',
      icon: Users,
      show: permissions?.viewClients,
    },
    {
      name: 'Documents',
      href: '/staff/documents',
      icon: FileText,
      show: permissions?.viewDocuments,
    },
    {
      name: 'Calendar',
      href: '/staff/calendar',
      icon: Calendar,
      show: true,
    },
    {
      name: 'Billing',
      href: '/staff/billing',
      icon: DollarSign,
      show: permissions?.viewBilling,
    },
    {
      name: 'Messages',
      href: '/staff/messages',
      icon: MessageSquare,
      show: true,
    },
    {
      name: 'eWakili AI',
      href: '/staff/ai',
      icon: Bot,
      show: true,
    },
    {
      name: 'Settings',
      href: '/staff/settings',
      icon: Settings,
      show: true,
    },
  ];

  return (
    <div className="w-72 flex-shrink-0 bg-white border-r border-gray-200 min-h-screen">
      <nav className="mt-5 px-2">
        <div className="space-y-1">
          {navigation
            .filter((item) => item.show)
            .map((item) => {
              const isActive = location.pathname === item.href || 
                             (item.href !== '/staff' && location.pathname.startsWith(item.href));
              
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