import React, { useState, useEffect } from 'react';
import './AnimatedCard.css';

// Define the props for the AnimatedCard component
interface AnimatedCardProps {
  title: string; // The title of the card
  content: string; // The content of the card
}

// AnimatedCard functional component
const AnimatedCard: React.FC<AnimatedCardProps> = ({ title, content }) => {
  const [isVisible, setIsVisible] = useState(false); // State to track if the card is visible

  // Handle scroll event to check if the card is in view
  const handleScroll = () => {
    const cardPosition = (document.getElementById(title)?.getBoundingClientRect()?.top || 0);
    const windowHeight = window.innerHeight;
    if (cardPosition < windowHeight) {
      setIsVisible(true);
    }
  };

  // Add scroll event listener on mount and clean up on unmount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id={title}
      className={`card animated-card ${isVisible ? 'fade-in' : ''}`}
    >
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
    </div>
  );
};

export default AnimatedCard;
