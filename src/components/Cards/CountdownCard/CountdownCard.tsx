import React, { useEffect, useState } from 'react';
import './CountdownCard.css';

// Define the props for the CountdownCard component
interface CountdownCardProps {
  title: string; // The title of the card
  countdownDate: Date; // The date to count down to
}

// CountdownCard functional component
const CountdownCard: React.FC<CountdownCardProps> = ({ title, countdownDate }) => {
  const [timeLeft, setTimeLeft] = useState<string>(''); // State to track the time left

  useEffect(() => {
    // Function to update the time left
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate.getTime() - now;

      if (distance < 0) {
        setTimeLeft('Expired');
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    };

    // Update the countdown immediately and then every second
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, [countdownDate]);

  return (
    <div className="card countdown-card">
      <h2 className="card-title">{title}</h2>
      <p className="countdown-timer">{timeLeft}</p>
    </div>
  );
};

export default CountdownCard;