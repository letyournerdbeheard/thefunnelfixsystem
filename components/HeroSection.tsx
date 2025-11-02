import React from 'react';
import CountdownTimer from './CountdownTimer';
import { CTAButton } from './CTAButton';

interface HeroSectionProps {
  onCTAClick: () => void;
  isLaunchActive: boolean;
  targetDate: Date;
}

// NOTE: Replace with your actual checkout page URL
const CHECKOUT_URL = "https://your-checkout-provider.com/funnel-fix-system";

export const HeroSection: React.FC<HeroSectionProps> = ({ onCTAClick, isLaunchActive, targetDate }) => {
  return (
    <section className="text-center py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg font-bold text-[#c0272d] uppercase tracking-wider mb-2">The Funnel Fix System</p>
        
        {isLaunchActive ? (
          <>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
              The Doors Are Open! Fix Your Funnel Today.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join The Funnel Fix System community and get the expert support you need to eliminate tech chaos and run confident, high-converting launches.
            </p>
            <CTAButton href={CHECKOUT_URL}>Fix My Funnel Now</CTAButton>
            <p className="mt-4 text-[#ebcb50] text-lg font-bold">
              Special Launch Price: $497 for 6 months <span className="text-gray-400 font-normal line-through">(Normally $147/mo)</span>
            </p>
          </>
        ) : (
          <>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
              Your Funnel’s Flatlined. The Fix Arrives This Black Friday.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Be the first to join The Funnel Fix System, the community built to eliminate tech chaos and revive broken launches.
            </p>
            <div className="bg-[#525252] rounded-lg p-6 max-w-3xl mx-auto mb-10 shadow-lg">
              <p className="text-gray-300 mb-4 text-lg">⏳ Opens Friday, November 28, 2025 at 8:00 AM Pacific</p>
              <CountdownTimer targetDate={targetDate} />
            </div>
            <CTAButton onClick={onCTAClick}>Join the Black Friday Waitlist</CTAButton>
          </>
        )}
      </div>
    </section>
  );
};
