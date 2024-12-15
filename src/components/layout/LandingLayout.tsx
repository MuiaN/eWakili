import React from 'react';
import { Link } from 'react-router-dom';
import { Scale } from 'lucide-react';
import { Button } from '../ui/Button';

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed w-full bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Scale className="h-8 w-8 text-indigo-600" />
                <span className="text-xl font-semibold">LPMS</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="secondary">Sign in</Button>
              </Link>
              <Link to="/signup">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}