import React from 'react';
import './ProgressCard.css';

// Define the props for the ProgressCard component
interface ProgressCardProps {
  title: string; // The title of the card
  progress: number; // Value between 0 and 100
}

// ProgressCard functional component
const ProgressCard: React.FC<ProgressCardProps> = ({ title, progress }) => {
  return (
    <div className="card progress-card">
      <h2 className="card-title">{title}</h2>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="progress-text">{progress}% Complete</p>
    </div>
  );
};

export default ProgressCard;