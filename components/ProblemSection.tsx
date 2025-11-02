import React from 'react';
import { CTAButton } from './CTAButton';

interface ProblemSectionProps {
  onCTAClick: () => void;
  isLaunchActive: boolean;
}

// NOTE: Replace with your actual checkout page URL
const CHECKOUT_URL = "https://your-checkout-provider.com/funnel-fix-system";

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onCTAClick, isLaunchActive }) => {
  return (
    <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
          Your Offer’s Great. Your Tech Isn’t.
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          You’ve got the content, the audience, and the drive, but your funnel keeps failing you. The Funnel Fix System community is open so you can finally stop patching leaks and start scaling with confidence.
        </p>
        {isLaunchActive ? (
            <>
              <CTAButton href={CHECKOUT_URL}>Join The Community Now</CTAButton>
              <p className="mt-4 text-gray-400 text-sm">Just $497 for 6 months of expert support.</p>
            </>
        ) : (
            <CTAButton onClick={onCTAClick}>Save My Spot</CTAButton>
        )}
      </div>
    </section>
  );
};