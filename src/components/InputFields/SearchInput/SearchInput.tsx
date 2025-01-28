import React from 'react';
import './SearchInput.css';

// Define the props for the SearchInput component
interface SearchInputProps {
  label: string; // The label for the search input
  value: string; // The current value of the search input
  onChange: (value: string) => void; // The function to call when the search input value changes
  placeholder?: string; // Optional placeholder text for the search input
  disabled?: boolean; // Optional prop to disable the search input
}

// SearchInput functional component
const SearchInput: React.FC<SearchInputProps> = ({ label, value, onChange, placeholder, disabled = false }) => {
  return (
    <div className="input-field">
      <label className="search-label">{label}</label>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="search-input"
        disabled={disabled} // Apply the disabled prop
      />
    </div>
  );
};

export default SearchInput;