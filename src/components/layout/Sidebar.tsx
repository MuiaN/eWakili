import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Briefcase, 
  FileText,
  ScrollText,
  Calendar,
  BarChart
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Clients', href: '/dashboard/clients', icon: Users },
  { name: 'Cases', href: '/dashboard/cases', icon: Briefcase },
  { name: 'Documents', href: '/dashboard/documents', icon: FileText },
  { name: 'Templates', href: '/dashboard/templates', icon: ScrollText },
  { name: 'Calendar', href: '/dashboard/calendar', icon: Calendar },
  { name: 'Reports', href: '/dashboard/reports', icon: BarChart },
];

export default function Sidebar() {
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