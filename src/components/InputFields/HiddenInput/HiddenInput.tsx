import React from 'react';

// Define the props for the HiddenInput component
interface HiddenInputProps {
  name: string; // The name attribute for the hidden input
  value: string; // The value of the hidden input
}

// HiddenInput functional component
const HiddenInput: React.FC<HiddenInputProps> = ({ name, value }) => {
  return <input type="hidden" name={name} value={value} />;
};

export default HiddenInput;