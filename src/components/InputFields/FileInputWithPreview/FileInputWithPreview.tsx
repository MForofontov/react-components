import React, { useState } from 'react';
import './FileInputWithPreview.css';

// Define the props for the FileInputWithPreview component
interface FileInputWithPreviewProps {
  label: string; // The label for the file input
  onChange: (file: File | null) => void; // The function to call when the file input value changes
}

// FileInputWithPreview functional component
const FileInputWithPreview: React.FC<FileInputWithPreviewProps> = ({ label, onChange }) => {
  const [filePreview, setFilePreview] = useState<string | null>(null); // State to store the file preview URL

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setFilePreview(URL.createObjectURL(file)); // Create a preview URL for the selected file
      onChange(file); // Call the onChange prop with the selected file
    } else {
      setFilePreview(null); // Clear the preview if no file is selected
      onChange(null); // Call the onChange prop with null
    }
  };

  return (
    <div className="input-field">
      <label className="file-label">{label}</label>
      <input type="file" onChange={handleFileChange} className="file-input" />
      {filePreview && <img src={filePreview} alt="Preview" className="file-preview" />}
    </div>
  );
};

export default FileInputWithPreview;