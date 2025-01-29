import React, { useState } from 'react';
import './FlippingCard.css';

// Define the props for the FlippingCard component
interface FlippingCardProps {
  frontContent: string; // The content to display on the front of the card
  backContent: string; // The content to display on the back of the card
}

// FlippingCard functional component
const FlippingCard: React.FC<FlippingCardProps> = ({ frontContent, backContent }) => {
  const [flipped, setFlipped] = useState(false); // State to track if the card is flipped

  // Toggle the flipped state
  const toggleFlip = () => setFlipped(!flipped);

  return (
    <div className={`flipping-card ${flipped ? 'flipped' : ''}`} onClick={toggleFlip}>
      <div className="card-front">{frontContent}</div>
      <div className="card-back">{backContent}</div>
    </div>
  );
};

export default FlippingCard;