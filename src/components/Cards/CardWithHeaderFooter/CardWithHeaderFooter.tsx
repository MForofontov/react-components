import React from 'react';
import './CardWithHeaderFooter.css';

// Define the props for the CardWithHeaderFooter component
interface CardWithHeaderFooterProps {
  header: string; // The header text of the card
  content: string; // The content text of the card
  footer: string; // The footer text of the card
}

// CardWithHeaderFooter functional component
const CardWithHeaderFooter: React.FC<CardWithHeaderFooterProps> = ({ header, content, footer }) => {
  return (
    <div className="card card-with-header-footer">
      <div className="card-header">
        <h2>{header}</h2>
      </div>
      <div className="card-content">
        <p>{content}</p>
      </div>
      <div className="card-footer">
        <p>{footer}</p>
      </div>
    </div>
  );
};

export default CardWithHeaderFooter;