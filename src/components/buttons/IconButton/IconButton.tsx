import React from 'react';
import './IconButton.css';

// Define the props for the IconButton component
interface IconButtonProps {
  icon: React.ReactNode; // The icon to display inside the button
  onClick: () => void; // The function to call when the button is clicked
  disabled?: boolean; // Optional prop to disable the button
  ariaLabel: string; // Accessibility label for the button
}

// IconButton functional component
const IconButton: React.FC<IconButtonProps> = ({ icon, onClick, disabled = false, ariaLabel }) => (
  <button className="icon-btn" onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
    {icon}
  </button>
);

export default IconButton;