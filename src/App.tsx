import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';
import LandingLayout from './components/layout/LandingLayout';
import Landing from './pages/Landing';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import CompanySetup from './pages/auth/CompanySetup';
import SubscriptionPlans from './pages/auth/SubscriptionPlans';
import Payment from './pages/auth/Payment';
import ForgotPassword from './pages/auth/ForgotPassword';
import EWakiliAI from './pages/ai/EWakiliAI';
// ... other imports

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route element={<LandingLayout />}>
          <Route index element={<Landing />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/company-setup" element={<CompanySetup />} />
        <Route path="/subscription" element={<SubscriptionPlans />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/ai" element={<EWakiliAI />} />
          {/* ... other routes */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;