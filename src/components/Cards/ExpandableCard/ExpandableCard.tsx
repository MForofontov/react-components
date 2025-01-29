import React, { useState } from 'react';
import './ExpandableCard.css';

// Define the props for the ExpandableCard component
interface ExpandableCardProps {
  title: string; // The title of the card
  summary: string; // The summary text of the card
  fullContent: string; // The full content text of the card
}

// ExpandableCard functional component
const ExpandableCard: React.FC<ExpandableCardProps> = ({ title, summary, fullContent }) => {
  const [isExpanded, setIsExpanded] = useState(false); // State to track if the card is expanded

  // Toggle the expansion state
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card expandable-card">
      <h2 className="card-title">{title}</h2>
      <p className="card-summary">{summary}</p>
      {isExpanded && <p className="card-full-content">{fullContent}</p>}
      <button onClick={toggleExpansion} className="expand-button">
        {isExpanded ? 'Show Less' : 'Read More'}
      </button>
    </div>
  );
};

export default ExpandableCard;