import React from 'react';
import './Button.css';

// Define the props for the Button component
interface ButtonProps {
  label: string; // The text to display on the button
  onClick: () => void; // The function to call when the button is clicked
  disabled?: boolean; // Optional prop to disable the button
}

// PrimaryButton functional component
const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => (
  <button className="btn" onClick={onClick} disabled={disabled}>
    {label}
  </button>
);

export default Button;