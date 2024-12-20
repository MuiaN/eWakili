import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/authStore';

// Layouts
import DashboardLayout from './components/layout/DashboardLayout';
import LandingLayout from './components/layout/LandingLayout';

// Public Pages
import Landing from './pages/Landing';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import CompanySetup from './pages/auth/CompanySetup';
import SubscriptionPlans from './pages/auth/SubscriptionPlans';
import Payment from './pages/auth/Payment';
import ForgotPassword from './pages/auth/ForgotPassword';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import UserManagement from './pages/admin/UserManagement';
import AccessControl from './pages/admin/AccessControl';
import SystemSettings from './pages/admin/SystemSettings';
import SystemHealth from './pages/admin/SystemHealth';
import AuditLogs from './pages/admin/AuditLogs';

// Staff Pages
import StaffDashboard from './pages/staff/StaffDashboard';
import StaffCases from './pages/staff/StaffCases';
import StaffClients from './pages/staff/StaffClients';
import StaffDocuments from './pages/staff/StaffDocuments';
import StaffCalendar from './pages/staff/StaffCalendar';
import StaffBilling from './pages/staff/StaffBilling';

// Client Pages
import ClientDashboard from './pages/client/ClientDashboard';
import ClientCases from './pages/client/ClientCases';
import ClientDocuments from './pages/client/ClientDocuments';
import ClientBilling from './pages/client/ClientBilling';
import ClientMessages from './pages/client/ClientMessages';
import ClientDeadlines from './pages/client/ClientDeadlines';
import ClientSettings from './pages/client/ClientSettings';
import ClientSupport from './pages/client/ClientSupport';

// Shared Pages
import EWakiliAI from './pages/shared/EWakiliAI';

function App() {
  const { isAuthenticated, user } = useAuthStore();

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        {!isAuthenticated ? (
          <>
            <Route element={<LandingLayout />}>
              <Route index element={<Landing />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/company-setup" element={<CompanySetup />} />
            <Route path="/subscription" element={<SubscriptionPlans />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </>
        ) : null}

        {/* Admin routes */}
        {user?.role === 'ADMIN' && (
          <Route path="/admin" element={<DashboardLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="access" element={<AccessControl />} />
            <Route path="settings" element={<SystemSettings />} />
            <Route path="health" element={<SystemHealth />} />
            <Route path="audit" element={<AuditLogs />} />
            <Route path="ai" element={<EWakiliAI />} />
          </Route>
        )}

        {/* Staff routes */}
        {user?.role === 'STAFF' && (
          <Route path="/staff" element={<DashboardLayout />}>
            <Route index element={<StaffDashboard />} />
            <Route path="cases" element={<StaffCases />} />
            <Route path="clients" element={<StaffClients />} />
            <Route path="documents" element={<StaffDocuments />} />
            <Route path="calendar" element={<StaffCalendar />} />
            <Route path="billing" element={<StaffBilling />} />
            <Route path="ai" element={<EWakiliAI />} />
          </Route>
        )}

        {/* Client routes */}
        {user?.role === 'CLIENT' && (
          <Route path="/client" element={<DashboardLayout />}>
            <Route index element={<ClientDashboard />} />
            <Route path="cases" element={<ClientCases />} />
            <Route path="documents" element={<ClientDocuments />} />
            <Route path="billing" element={<ClientBilling />} />
            <Route path="messages" element={<ClientMessages />} />
            <Route path="deadlines" element={<ClientDeadlines />} />
            <Route path="settings" element={<ClientSettings />} />
            <Route path="support" element={<ClientSupport />} />
            <Route path="ai" element={<EWakiliAI />} />
          </Route>
        )}

        {/* Redirect based on role */}
        <Route
          path="*"
          element={
            <Navigate
              to={
                isAuthenticated
                  ? `/${user?.role.toLowerCase()}`
                  : '/login'
              }
              replace
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;