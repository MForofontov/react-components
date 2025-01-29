import React from 'react';
import Button from '../../Buttons/Button/Button'; // Corrected import path for the Button component
import './CardWithButtonProps.css';

// Define the props for the CardWithButton component
interface CardWithButtonProps {
  title: string; // The title of the card
  content: string; // The content of the card
  buttonText: string; // The text to display on the button
  onButtonClick: () => void; // The function to call when the button is clicked
  disabled?: boolean; // Optional prop to disable the button
}

// CardWithButton functional component
const CardWithButton: React.FC<CardWithButtonProps> = ({ title, content, buttonText, onButtonClick, disabled }) => {
  return (
    <div className="card card-with-button">
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
      <Button label={buttonText} onClick={onButtonClick} disabled={disabled} />
    </div>
  );
};

export default CardWithButton;