import React from 'react';
import CountdownTimer from './CountdownTimer';
import { CTAButton } from './CTAButton';

interface FinalCTASectionProps {
  onCTAClick: () => void;
  isLaunchActive: boolean;
  targetDate: Date;
}

// NOTE: Replace with your actual checkout page URL
const CHECKOUT_URL = "https://your-checkout-provider.com/funnel-fix-system";

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onCTAClick, isLaunchActive, targetDate }) => {
  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8 text-center border-t-4 border-[#c0272d]">
      <div className="max-w-4xl mx-auto">
        {isLaunchActive ? (
            <>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
                    Your Funnel Problems Get Solved Today.
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                    Don’t wait for the next launch to fail. Get the support you need now. Lock in $497 for 6 months (regular $147 per month).
                </p>
                <CTAButton href={CHECKOUT_URL}>Get The Black Friday Deal</CTAButton>
                <p className="mt-4 text-[#ebcb50] text-lg font-bold">
                  Special Launch Price: $497 for 6 months <span className="text-gray-400 font-normal line-through">(Normally $147/mo)</span>
                </p>
            </>
        ) : (
            <>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
                  Be First in Line When The Funnel Fix System Community Opens.
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Doors open Friday, November 28, 2025 at 8:00 AM Pacific. Lock in $497 for 6 months (regular $147 per month).
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
