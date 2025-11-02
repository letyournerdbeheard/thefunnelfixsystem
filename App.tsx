import React, { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { CredibilitySection } from './components/CredibilitySection';
import { SocialProofSection } from './components/SocialProofSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { OutcomeSection } from './components/OutcomeSection';
import { FinalCTASection } from './components/FinalCTASection';
import { ThankYouPage } from './components/ThankYouPage';

// --- Waitlist Modal Component ---
interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFormSubmit: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose, onFormSubmit }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [smsOptIn, setSmsOptIn] = useState(false);

  useEffect(() => {
    // Reset form state when the modal is opened
    if (isOpen) {
      setIsSubmitted(false);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setSmsOptIn(false);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!smsOptIn) {
      alert('Please agree to the terms to continue.');
      return;
    }
    // Here you would typically send data to your backend or CRM
    console.log('Form Submitted', { firstName, lastName, email, phone });
    setIsSubmitted(true);
    
    // After showing the success message, trigger the redirect
    setTimeout(() => {
      onFormSubmit();
    }, 1500); // Wait 1.5s to show success message before closing
  };
  
  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 transition-opacity duration-300 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="bg-gray-800 rounded-lg shadow-xl p-6 sm:p-8 max-w-lg w-full text-white relative transform transition-all duration-300 scale-95 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close dialog"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {isSubmitted ? (
          <div className="text-center py-8">
            <svg className="w-16 h-16 text-green-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h2 className="text-2xl font-bold">Success!</h2>
            <p className="text-gray-300 mt-2">You're on the list. We'll see you on Black Friday!</p>
          </div>
        ) : (
          <>
            <p className="text-sm font-bold text-[#c0272d] uppercase tracking-wider mb-1">The Funnel Fix System</p>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold mb-2">Join the Black Friday Waitlist</h2>
            <p className="text-gray-400 mb-6">Be the first to know when doors open to our community. Lock in your special pricing.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c0272d]" />
                <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c0272d]" />
              </div>
              <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c0272d]" />
              <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c0272d]" />
              <div className="flex items-start">
                  <input id="sms-opt-in" type="checkbox" checked={smsOptIn} onChange={(e) => setSmsOptIn(e.target.checked)} required className="h-5 w-5 mt-1 text-[#c0272d] bg-gray-700 border-gray-600 rounded focus:ring-[#c0272d] focus:ring-offset-gray-800" />
                  <label htmlFor="sms-opt-in" className="ml-3 text-sm text-gray-400">
                    By checking this box, I agree to receive SMS messages and emails about the Black Friday launch from The Funnel Fix System. Message and data rates may apply.
                  </label>
              </div>
              <button type="submit" className="w-full bg-[#c0272d] text-white font-bold py-3 px-6 rounded-md shadow-lg hover:bg-red-700 transition-colors duration-300 transform hover:scale-105">
                Join Waitlist
              </button>
            </form>
          </>
        )}
      </div>
       <style>{`
            @keyframes fade-in {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            .animate-fade-in {
                animation: fade-in 0.3s ease-out forwards;
            }
            @keyframes scale-in {
                from { transform: scale(0.95); opacity: 0; }
                to { transform: scale(1); opacity: 1; }
            }
            .animate-scale-in {
                animation: scale-in 0.2s ease-out forwards;
            }
        `}</style>
    </div>
  );
};


const AttentionBanner: React.FC = () => (
  <div className="bg-[#c0272d] text-white text-center p-3 text-sm md:text-base font-bold uppercase">
    <p>⚡ Attention: Coaches, Speakers, and Authors.</p>
    <p>We Fix The Revenue Leaks Killing Your Launches.</p>
  </div>
);

const App: React.FC = () => {
  const [targetDate] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const isTestMode = urlParams.has('test') || urlParams.has('BlackFriday') || urlParams.get('test') === 'BlackFriday';
    
    if (isTestMode) {
      // For testing: set target date to 10 seconds from now.
      return new Date(Date.now() + 10000);
    }
    
    // Production: Black Friday, November 28, 2025, at 8:00 AM Pacific (PST is UTC-8)
    // The equivalent in UTC is 16:00.
    return new Date('2025-11-28T16:00:00Z');
  });
  
  const [route, setRoute] = useState(window.location.hash);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLaunchActive, setIsLaunchActive] = useState(() => new Date() >= targetDate);

  useEffect(() => {
    if (isLaunchActive) return;

    const timeUntilLaunch = targetDate.getTime() - Date.now();
    
    if (timeUntilLaunch <= 0) {
        setIsLaunchActive(true);
        return;
    }

    const timer = setTimeout(() => {
      setIsLaunchActive(true);
    }, timeUntilLaunch);

    return () => clearTimeout(timer);
  }, [isLaunchActive, targetDate]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const handleFormSubmit = () => {
    closeModal();
    window.location.hash = '#/thank-you';
  }; 

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (route === '#/thank-you') {
    return <ThankYouPage />;
  }

  return (
    <div className="bg-[#000000] text-white">
      <AttentionBanner />
      <main>
        <HeroSection onCTAClick={openModal} isLaunchActive={isLaunchActive} targetDate={targetDate} />
        <ProblemSection onCTAClick={openModal} isLaunchActive={isLaunchActive} />
        <CredibilitySection />
        <SocialProofSection isLaunchActive={isLaunchActive} />
        <HowItWorksSection onCTAClick={openModal} isLaunchActive={isLaunchActive} />
        <OutcomeSection />
        <FinalCTASection onCTAClick={openModal} isLaunchActive={isLaunchActive} targetDate={targetDate} />
      </main>
      <footer className="text-center p-8 bg-gray-900 text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} The Funnel Fix System. All Rights Reserved.</p>
      </footer>
      {!isLaunchActive && <WaitlistModal isOpen={isModalOpen} onClose={closeModal} onFormSubmit={handleFormSubmit} />}
    </div>
  );
};

export default App;
