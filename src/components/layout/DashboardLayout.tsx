import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import Header from './Header';
import AdminSidebar from './AdminSidebar';
import StaffSidebar from './StaffSidebar';
import ClientSidebar from './ClientSidebar';

export default function DashboardLayout() {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  const SidebarComponent = {
    ADMIN: AdminSidebar,
    STAFF: StaffSidebar,
    CLIENT: ClientSidebar,
  }[user.role];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <SidebarComponent />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}