import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ children, className = '', onClick, href }) => {
  const baseClasses = `inline-block bg-[#c0272d] text-white font-bold text-lg md:text-xl py-4 px-10 rounded-md shadow-lg hover:bg-red-700 transition-colors duration-300 transform hover:scale-105 ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={baseClasses}
    >
      {children}
    </button>
  );
};
