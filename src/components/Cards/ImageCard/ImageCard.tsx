// src/components/Card/ImageCard.tsx
import React from 'react';

interface ImageCardProps {
  title: string;
  imageUrl: string;
  description: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ title, imageUrl, description }) => {
  return (
    <div className="card image-card">
      <img src={imageUrl} alt={title} className="card-image" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ImageCard;
