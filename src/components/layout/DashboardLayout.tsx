import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import AdminSidebar from './AdminSidebar';
import ClientSidebar from './ClientSidebar';
import Header from './Header';

export default function DashboardLayout() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isClientRoute = location.pathname.startsWith('/client');

  const getSidebar = () => {
    if (isAdminRoute) return <AdminSidebar />;
    if (isClientRoute) return <ClientSidebar />;
    return <Sidebar />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        {getSidebar()}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}