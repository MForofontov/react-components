import React, { useState } from 'react';
import './AccordionCard.css';

// Define the props for the AccordionCard component
interface AccordionCardProps {
  title: string; // The title of the card
  content: string; // The content of the card
  accordionContent: string; // The content to display when the accordion is expanded
}

// AccordionCard functional component
const AccordionCard: React.FC<AccordionCardProps> = ({ title, content, accordionContent }) => {
  const [isOpen, setIsOpen] = useState(false); // State to track if the accordion is open

  // Toggle the accordion state
  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="card accordion-card">
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
      <button onClick={toggleAccordion} className="accordion-button">
        {isOpen ? 'Hide Details' : 'Show Details'}
      </button>
      {isOpen && <div className="accordion-content">{accordionContent}</div>}
    </div>
  );
};

export default AccordionCard;