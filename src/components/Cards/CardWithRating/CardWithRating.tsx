import React from 'react';
import './CardWithRating.css';

// Define the props for the CardWithRating component
interface CardWithRatingProps {
  title: string; // The title of the card
  content: string; // The content of the card
  rating: number; // Rating from 0 to 5
}

// CardWithRating functional component
const CardWithRating: React.FC<CardWithRatingProps> = ({ title, content, rating }) => {
  // Create an array of booleans representing filled and empty stars
  const stars = Array(5)
    .fill(false)
    .map((_, index) => index < rating);

  return (
    <div className="card card-with-rating">
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
      <div className="rating">
        {stars.map((filled, index) => (
          <span key={index} className={filled ? 'filled' : 'empty'}>★</span>
        ))}
      </div>
    </div>
  );
};

export default CardWithRating;