import React from 'react';
import { CTAButton } from './CTAButton';

const CheckIcon = () => (
  <svg className="w-6 h-6 text-[#ebcb50] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

interface HowItWorksSectionProps {
  onCTAClick: () => void;
  isLaunchActive: boolean;
}

// NOTE: Replace with your actual checkout page URL
const CHECKOUT_URL = "https://your-checkout-provider.com/funnel-fix-system";

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onCTAClick, isLaunchActive }) => {
  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
          What You’ll Get Inside The Funnel Fix System Community
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          Enroll now to get our special launch pricing: $497 for 6 months (regular $147 per month).
        </p>
        <div className="space-y-4 text-left max-w-md mx-auto mb-10">
          <div className="flex items-start">
            <CheckIcon />
            <span className="text-lg text-white"><strong>Weekly Office Hours</strong> for live diagnostics, real-time fixes, and personalized tech support.</span>
          </div>
          <div className="flex items-start">
            <CheckIcon />
            <span className="text-lg text-white"><strong>Bi-Weekly Group Q&As</strong> where we'll cover rehab protocols to strengthen your next launch and solve your biggest funnel challenges.</span>
          </div>
          <div className="flex items-start">
            <CheckIcon />
            <span className="text-lg text-white"><strong>24/7 Access to All Replays</strong> so you can learn on your own schedule.</span>
          </div>
          <div className="flex items-start">
            <CheckIcon />
            <span className="text-lg text-white"><strong>A Supportive Community</strong> of coaches, speakers, and authors scaling their launches, just like you.</span>
          </div>
        </div>
        {isLaunchActive ? (
            <>
              <CTAButton href={CHECKOUT_URL}>Start My Membership</CTAButton>
              <p className="mt-4 text-[#ebcb50] text-lg font-bold">
                Special Launch Price: $497 for 6 months <span className="text-gray-400 font-normal line-through">(Normally $147/mo)</span>
              </p>
            </>
        ) : (
            <CTAButton onClick={onCTAClick}>Join the Waitlist</CTAButton>
        )}
      </div>
    </section>
  );
};