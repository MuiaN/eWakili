import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Settings,
  Shield,
  Database,
  Activity,
  AlertCircle,
  FileText,
  DollarSign,
  MessageSquare,
  Scale,
  Clock,
  Bot
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'User Management', href: '/admin/users', icon: Users },
  { name: 'Client Management', href: '/admin/clients', icon: Users },
  { name: 'Case Management', href: '/admin/cases', icon: Scale },
  { name: 'Document Center', href: '/admin/documents', icon: FileText },
  { name: 'Document Templates', href: '/admin/templates', icon: FileText },
  { name: 'Billing & Finance', href: '/admin/billing', icon: DollarSign },
  { name: 'Communications', href: '/admin/communications', icon: MessageSquare },
  { name: 'eWakili AI', href: '/admin/ai', icon: Bot },
  { name: 'Access Control', href: '/admin/access', icon: Shield },
  { name: 'System Settings', href: '/admin/settings', icon: Settings },
  { name: 'Backup & Storage', href: '/admin/backup', icon: Database },
  { name: 'System Health', href: '/admin/health', icon: Activity },
  { name: 'Audit Logs', href: '/admin/audit', icon: Clock },
  { name: 'Compliance', href: '/admin/compliance', icon: AlertCircle },
];

export default function AdminSidebar() {
  const location = useLocation();

  return (
    <div className="w-72 flex-shrink-0 bg-white border-r border-gray-200 min-h-screen">
      <nav className="mt-5 px-2">
        <div className="space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href || 
                           (item.href !== '/admin' && location.pathname.startsWith(item.href));
            
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