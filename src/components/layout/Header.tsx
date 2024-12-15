import React from 'react';
import { Scale } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export default function Header() {
  const { user } = useAuthStore();

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Scale className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-semibold">LPMS</span>
          </div>
          
          <div className="flex items-center">
            {user && (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">{user.name}</span>
                <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center">
                  <span className="text-white text-sm">
                    {user.name.charAt(0)}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}