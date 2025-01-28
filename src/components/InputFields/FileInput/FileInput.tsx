import React from 'react';
import './FileInput.css';

// Define the props for the FileInput component
interface FileInputProps {
  label: string; // The label for the file input
  onChange: (files: FileList | null) => void; // The function to call when the file input value changes
  disabled?: boolean; // Optional prop to disable the file input
}

// FileInput functional component
const FileInput: React.FC<FileInputProps> = ({ label, onChange, disabled = false }) => {
  return (
    <div className="input-field">
      <label className="file-label">{label}</label>
      <input
        type="file"
        onChange={(e) => onChange(e.target.files)}
        className="file-input"
        disabled={disabled} // Apply the disabled prop
      />
    </div>
  );
};

export default FileInput;