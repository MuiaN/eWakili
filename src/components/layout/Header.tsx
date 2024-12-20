import React from 'react';
import { Scale } from 'lucide-react';
import UserMenu from '../ui/UserMenu';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Scale className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-semibold">LPMS</span>
          </div>
          
          <UserMenu />
        </div>
      </div>
    </header>
  );
}