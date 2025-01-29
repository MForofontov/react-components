import React, { useState } from 'react';
import './SwipeableCard.css';

// Define the props for the SwipeableCard component
interface SwipeableCardProps {
  content: string; // The content to display in the card
}

// SwipeableCard functional component
const SwipeableCard: React.FC<SwipeableCardProps> = ({ content }) => {
  const [position, setPosition] = useState(0); // State to track the position of the card

  // Handle swipe action
  const handleSwipe = (direction: 'left' | 'right') => {
    setPosition(direction === 'left' ? -200 : 200); // Move the card left or right
    setTimeout(() => setPosition(0), 500); // Reset the position after 500ms
  };

  return (
    <div className="swipeable-card" style={{ transform: `translateX(${position}px)` }}>
      <p>{content}</p>
      <div className="buttons">
        <button onClick={() => handleSwipe('left')}>👈</button>
        <button onClick={() => handleSwipe('right')}>👉</button>
      </div>
    </div>
  );
};

export default SwipeableCard;