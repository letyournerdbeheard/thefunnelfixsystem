import React, { useRef, useLayoutEffect, useCallback, useEffect } from 'react';
import { CTAButton } from './CTAButton';

const clients = [
    {
        name: 'Kim Walsh Phillips',
        company: 'Powerful Professionals',
        image: 'images/kim-walsh-phillips.png',
    },
    {
        name: 'Justin Guarini',
        company: 'American Idol Runner-Up',
        image: 'images/justin-guarini.png',
    },
    {
        name: 'Iman Aghay',
        company: 'Success Road Academy',
        image: 'images/iman-aghay.png',
    },
    {
        name: 'Bari & Blue',
        company: 'The Virtual Event on Virtual Events',
        image: 'images/bari-and-blue.png',
    },
    {
        name: 'Jessica & Clint Nobles',
        company: 'Home Care Ops',
        image: 'images/clint-andjessica-nobles.png',
    },
    {
        name: 'Ty Cohen',
        company: 'Kindle Cash Flow',
        image: 'images/ty-cohen.png',
    },
    {
        name: 'Luria Petrucci',
        company: 'Live Streaming Pros',
        image: 'images/luria-petrucci.png',
    },
    {
        name: 'Linda Cain',
        company: 'Blu Diamond Events',
        image: 'images/linda-cain.png',
    },
    {
        name: 'Dannella Burnett',
        company: 'Elite Encore Events',
        image: 'images/dannella-burnett.png',
    },
];

const Arrow = ({ direction, onClick }: { direction: 'left' | 'right', onClick: () => void }) => (
    <button
        onClick={onClick}
        aria-label={direction === 'left' ? 'Previous client' : 'Next client'}
        className={`absolute top-1/2 -translate-y-1/2 ${direction === 'left' ? '-left-2 md:-left-5' : '-right-2 md:-right-5'} bg-gray-800/60 hover:bg-gray-800/90 rounded-full p-2 z-10 transition-all duration-300`}
    >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {direction === 'left' ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            )}
        </svg>
    </button>
);

interface SocialProofSectionProps {
  isLaunchActive: boolean;
}

// NOTE: Replace with your actual checkout page URL
const CHECKOUT_URL = "https://your-checkout-provider.com/funnel-fix-system";

export const SocialProofSection: React.FC<SocialProofSectionProps> = ({ isLaunchActive }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const scrollTimeoutRef = useRef<number | null>(null);
    const isScrollingProgrammatically = useRef(false);

    const CLONE_COUNT = 3; 

    const extendedClients = [
        ...clients.slice(-CLONE_COUNT),
        ...clients,
        ...clients.slice(0, CLONE_COUNT),
    ];

    const resetCarouselPosition = useCallback(() => {
        const container = scrollContainerRef.current;
        if (container && container.firstChild) {
            const itemWidth = (container.firstChild as HTMLElement).offsetWidth;
            container.style.scrollBehavior = 'auto';
            container.scrollLeft = itemWidth * CLONE_COUNT;
            requestAnimationFrame(() => { container.style.scrollBehavior = 'smooth'; });
        }
    }, []);

    useLayoutEffect(() => {
        resetCarouselPosition();
        window.addEventListener('resize', resetCarouselPosition);
        return () => window.removeEventListener('resize', resetCarouselPosition);
    }, [resetCarouselPosition]);

    const handleLooping = useCallback(() => {
        const container = scrollContainerRef.current;
        if (!container || !container.firstChild) return;

        const itemWidth = (container.firstChild as HTMLElement).offsetWidth;
        if (itemWidth === 0) return;

        const numRealItems = clients.length;
        const { scrollLeft } = container;
        const tolerance = 2;

        if (scrollLeft >= itemWidth * (numRealItems + CLONE_COUNT) - tolerance) {
            container.style.scrollBehavior = 'auto';
            container.scrollLeft = container.scrollLeft - (itemWidth * numRealItems);
            requestAnimationFrame(() => { container.style.scrollBehavior = 'smooth'; });
        } 
        else if (scrollLeft <= itemWidth * CLONE_COUNT - tolerance) {
            container.style.scrollBehavior = 'auto';
            container.scrollLeft = container.scrollLeft + (itemWidth * numRealItems);
            requestAnimationFrame(() => { container.style.scrollBehavior = 'smooth'; });
        }
    }, [clients.length]);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const onScroll = () => {
            if (isScrollingProgrammatically.current) return;
            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
            scrollTimeoutRef.current = window.setTimeout(handleLooping, 150);
        };

        container.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            container.removeEventListener('scroll', onScroll);
            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        };
    }, [handleLooping]);

    const scroll = (direction: 'left' | 'right') => {
        const container = scrollContainerRef.current;
        if (container && container.firstChild) {
            isScrollingProgrammatically.current = true;
            const itemWidth = (container.firstChild as HTMLElement).offsetWidth;
            const scrollAmount = direction === 'left' ? -itemWidth : itemWidth;
            
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });

            setTimeout(() => {
                handleLooping();
                isScrollingProgrammatically.current = false;
            }, 500); 
        }
    };

  return (
    <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
          Trusted by the Industry’s Biggest Names.
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          From celebrity coaches to top event producers, the leaders behind today’s most successful virtual events have trusted Justin James and Let Your Nerd Be Heard to run the tech that drives their results.
        </p>
        
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide -mx-4"
          >
            {extendedClients.map((client, index) => (
              <div key={index} className="snap-center flex-shrink-0 w-[90%] sm:w-1/2 lg:w-1/3 px-2 sm:px-4">
                <div className="bg-black h-full rounded-xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 border border-gray-800">
                  <img src={client.image} alt={client.name} className="w-24 h-24 rounded-full mb-5 border-4 border-[#ebcb50] object-cover" />
                  <h3 className="text-xl font-bold text-white">{client.name}</h3>
                  <p className="text-sm text-gray-400">{client.company}</p>
                </div>
              </div>
            ))}
          </div>
          
          <Arrow direction="left" onClick={() => scroll('left')} />
          <Arrow direction="right" onClick={() => scroll('right')} />
        </div>

        {isLaunchActive ? (
          <div className="mt-16">
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8">
              Get access to the same level of behind-the-scenes support inside our community today.
            </p>
            <CTAButton href={CHECKOUT_URL}>Unlock My High-Converting Funnel</CTAButton>
            <p className="mt-4 text-[#ebcb50] text-lg font-bold">
              Special Launch Price: $497 for 6 months <span className="text-gray-400 font-normal line-through">(Normally $147/mo)</span>
            </p>
          </div>
        ) : (
          <p className="mt-16 text-xl md:text-2xl font-bold text-[#ebcb50]">
            This Black Friday, you’ll get access to the same level of behind-the-scenes support inside our community for $497 for 6 months (regular $147 per month).
          </p>
        )}
      </div>
    </section>
  );
};