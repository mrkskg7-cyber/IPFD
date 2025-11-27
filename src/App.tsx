import { useState } from 'react';
import { Header } from './components/Header';
import { LandingPage } from './components/LandingPage';
import { Dashboard } from './components/Dashboard';
import { InvestmentsPage } from './components/InvestmentsPage';
import { InvestmentDetail } from './components/InvestmentDetail';
import { DonationsPage } from './components/DonationsPage';
import { DonationDetail } from './components/DonationDetail';
import { Portfolio } from './components/Portfolio';
import { CommunityPage } from './components/CommunityPage';
import { ProfilePage } from './components/ProfilePage';
import { AdminDashboard } from './components/AdminDashboard';
import { AdminLogin } from './components/AdminLogin';

export type Page = 'landing' | 'dashboard' | 'investments' | 'investment-detail' | 'donations' | 'donation-detail' | 'portfolio' | 'community' | 'profile' | 'admin' | 'admin-login';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [selectedInvestmentId, setSelectedInvestmentId] = useState<string | null>(null);
  const [selectedDonationId, setSelectedDonationId] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [userType, setUserType] = useState<'investor' | 'company' | 'admin' | null>(null);

  const navigateTo = (page: Page, id?: string) => {
    if (page === 'investment-detail' && id) {
      setSelectedInvestmentId(id);
    }
    if (page === 'donation-detail' && id) {
      setSelectedDonationId(id);
    }
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUserType('investor');
    navigateTo('dashboard');
  };

  const handleAdminLogin = () => {
    setIsAdminLoggedIn(true);
    setUserType('admin');
    navigateTo('admin');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType(null);
    navigateTo('landing');
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    setUserType(null);
    navigateTo('landing');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage !== 'landing' && currentPage !== 'admin' && currentPage !== 'admin-login' && (
        <Header 
          currentPage={currentPage} 
          onNavigate={navigateTo}
          onLogout={handleLogout}
          isLoggedIn={isLoggedIn}
        />
      )}
      
      {currentPage === 'landing' && (
        <LandingPage onNavigate={navigateTo} onLogin={handleLogin} />
      )}
      
      {currentPage === 'admin-login' && (
        <AdminLogin onAdminLogin={handleAdminLogin} onNavigate={navigateTo} />
      )}
      
      {currentPage === 'admin' && isAdminLoggedIn && (
        <AdminDashboard onNavigate={navigateTo} onLogout={handleAdminLogout} />
      )}
      
      {currentPage === 'admin' && !isAdminLoggedIn && (
        <AdminLogin onAdminLogin={handleAdminLogin} onNavigate={navigateTo} />
      )}
      
      {currentPage === 'dashboard' && (
        <Dashboard onNavigate={navigateTo} />
      )}
      
      {currentPage === 'investments' && (
        <InvestmentsPage onNavigate={navigateTo} />
      )}
      
      {currentPage === 'investment-detail' && selectedInvestmentId && (
        <InvestmentDetail 
          investmentId={selectedInvestmentId} 
          onNavigate={navigateTo} 
        />
      )}
      
      {currentPage === 'donations' && (
        <DonationsPage onNavigate={navigateTo} />
      )}
      
      {currentPage === 'donation-detail' && selectedDonationId && (
        <DonationDetail 
          donationId={selectedDonationId} 
          onNavigate={navigateTo} 
        />
      )}
      
      {currentPage === 'portfolio' && (
        <Portfolio onNavigate={navigateTo} />
      )}
      
      {currentPage === 'community' && (
        <CommunityPage onNavigate={navigateTo} />
      )}
      
      {currentPage === 'profile' && (
        <ProfilePage onNavigate={navigateTo} />
      )}
    </div>
  );
}