import React from 'react';
import './HoverCard.css';

// Define the props for the HoverCard component
interface HoverCardProps {
  title: string; // The title of the card
  content: string; // The content of the card
  hoverText: string; // The text to display on hover
}

// HoverCard functional component
const HoverCard: React.FC<HoverCardProps> = ({ title, content, hoverText }) => {
  return (
    <div className="card hover-card">
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
      <div className="hover-text">{hoverText}</div>
    </div>
  );
};

export default HoverCard;