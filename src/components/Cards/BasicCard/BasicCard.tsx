import React from 'react';
import './BasicCard.css';

// Define the props for the BasicCard component
interface BasicCardProps {
  title: string; // The title of the card
  content: string; // The content of the card
}

// BasicCard functional component
const BasicCard: React.FC<BasicCardProps> = ({ title, content }) => {
  return (
    <div className="card basic-card">
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
    </div>
  );
};

export default BasicCard;