import React, { useState, useEffect } from 'react';

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center justify-center bg-gray-800 p-3 md:p-4 rounded-lg min-w-[70px] md:min-w-[90px] shadow-lg border border-gray-700">
    <span className="text-3xl md:text-5xl font-extrabold text-[#ebcb50] tabular-nums">
      {String(value).padStart(2, '0')}
    </span>
    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">
      {label}
    </span>
  </div>
);

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isOver, setIsOver] = useState(() => new Date() >= targetDate);

  useEffect(() => {
    if (isOver) {
        return;
    }
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      if (Object.values(newTimeLeft).every(val => val === 0)) {
        setIsOver(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isOver, targetDate]);

  if (isOver) {
    return <div className="text-2xl md:text-3xl font-bold text-[#ebcb50]">Doors are open now!</div>;
  }

  return (
    <div className="flex justify-center items-start gap-2 sm:gap-4">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;
