import React from 'react';
import './PrimaryButton.css';

// Define the props for the PrimaryButton component
interface PrimaryButtonProps {
  label: string; // The text to display on the button
  onClick: () => void; // The function to call when the button is clicked
  disabled?: boolean; // Optional prop to disable the button
}

// PrimaryButton functional component
const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label, onClick, disabled = false }) => (
  <button className="primary-btn" onClick={onClick} disabled={disabled}>
    {label}
  </button>
);

export default PrimaryButton;