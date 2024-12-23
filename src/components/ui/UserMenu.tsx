import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LogOut, 
  User, 
  Settings, 
  Bell,
  ChevronDown,
  Shield
} from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { Button } from './Button';

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { user, setUser } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  const getPositionLabel = () => {
    if (user?.role === 'ADMIN') return 'Administrator';
    if (user?.staffRole) return user.staffRole.replace('_', ' ');
    if (user?.role === 'CLIENT') return 'Client';
    return '';
  };

  return (
    <div className="relative z-50" ref={menuRef}>
      <Button
        variant="ghost"
        className="flex items-center space-x-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center">
          <span className="text-white text-sm font-medium">
            {user?.name.charAt(0)}
          </span>
        </div>
        <div className="text-left hidden sm:block">
          <p className="text-sm font-medium text-gray-700">{user?.name}</p>
          <p className="text-xs text-gray-500">{getPositionLabel()}</p>
        </div>
        <ChevronDown className="h-4 w-4 text-gray-500" />
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu">
            <div className="px-4 py-2 border-b">
              <p className="text-sm font-medium text-gray-900">{user?.name}</p>
              <p className="text-xs text-gray-500">{user?.email}</p>
            </div>

            <button
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => navigate(`/${user?.role.toLowerCase()}/settings`)}
            >
              <User className="h-4 w-4 mr-3" />
              Profile
            </button>

            <button
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <Bell className="h-4 w-4 mr-3" />
              Notifications
            </button>

            {user?.role === 'ADMIN' && (
              <button
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => navigate('/admin/settings')}
              >
                <Shield className="h-4 w-4 mr-3" />
                System Settings
              </button>
            )}

            <button
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => navigate(`/${user?.role.toLowerCase()}/settings`)}
            >
              <Settings className="h-4 w-4 mr-3" />
              Settings
            </button>

            <div className="border-t">
              <button
                className="flex items-center w-full px-4 py-2 text-sm text-red-700 hover:bg-gray-100"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-3" />
                Sign out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}