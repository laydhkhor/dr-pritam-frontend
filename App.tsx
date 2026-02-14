
import React, { useState, useEffect, Suspense } from 'react';
import { HashRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';


import LoadingScreen from './components/ui/LoadingScreen';
import HealthTipDetails from './components/layout/health-tips-detai;s';
import RootLayout from './RootLayout';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ClinicsPage from './pages/ClinicsPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import UserProfilePage from './pages/UserProfilePage';
import DoctorProfilePage from './pages/DoctorProfilePage';
import HealthTipsPage from './pages/HealthTipsPage';
import NotFoundPage from './pages/NotFoundPage';



/**
 * HealthTipDetails Placeholder
 */
<RootLayout />

/**
 * Root Application Component
 * Implements routing and initial loading state.
 */


const App: React.FC = () => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    // Simulate initial medical assets loading
    const timer = setTimeout(() => setIsInitialLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isInitialLoading) return <LoadingScreen />;

  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          {/* Main Application Routes Wrapped in Layout */}
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="clinics" element={<ClinicsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="forgot-password" element={<ForgotPasswordPage />} />
            <Route path="profile" element={<UserProfilePage />} />
            <Route path="doctor-profile" element={<DoctorProfilePage />} />
            <Route path="tips" element={<HealthTipsPage />} />
            <Route path="tips/:id" element={<HealthTipDetails />} />
            {/* Catch-all for undefined routes */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
