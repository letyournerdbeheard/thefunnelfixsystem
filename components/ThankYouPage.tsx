import React from 'react';

// Re-define banner for this page to match site branding
const AttentionBanner: React.FC = () => (
  <div className="bg-[#c0272d] text-white text-center p-3 text-sm md:text-base font-bold uppercase">
    <p>✅ Confirmation: Your Spot Is Saved!</p>
  </div>
);

// Re-define footer for this page for consistency
const Footer: React.FC = () => (
    <footer className="text-center p-8 bg-gray-900 text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} The Funnel Fix System. All Rights Reserved.</p>
    </footer>
);

export const ThankYouPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <AttentionBanner />
      <main className="flex-grow flex flex-col items-center justify-center text-center p-4 sm:p-6 lg:p-8">
          <div className="max-w-2xl mx-auto">
            <svg className="w-20 h-20 text-[#ebcb50] mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
              You're On The List!
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Thank you for joining the waitlist for <strong>The Funnel Fix System</strong>. You're one step closer to confident, high-converting launches.
            </p>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 max-w-xl mx-auto mb-10 shadow-lg text-left">
                <h2 className="text-xl font-bold text-white mb-4">What's Next?</h2>
                <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                        <span className="text-[#ebcb50] mr-3 mt-1">✓</span>
                        <span>Keep an eye on your inbox. We'll send you an email confirmation shortly.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-[#ebcb50] mr-3 mt-1">✓</span>
                        <span>We will notify you the moment the doors open on Black Friday with your special pricing link.</span>
                    </li>
                </ul>
            </div>
          </div>
      </main>
      <Footer />
    </div>
  );
};
