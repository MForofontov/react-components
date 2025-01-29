import React from 'react';
import './ImageCard.css';

// Define the props for the ImageCard component
interface ImageCardProps {
  title: string; // The title of the card
  imageUrl: string; // The URL of the image to display in the card
  description: string; // The description of the card
}

// ImageCard functional component
const ImageCard: React.FC<ImageCardProps> = ({ title, imageUrl, description }) => {
  return (
    <div className="card image-card">
      <img src={imageUrl} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default ImageCard;