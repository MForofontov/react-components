import React from 'react';
import './TestimonialCard.css';

// Define the props for the TestimonialCard component
interface TestimonialCardProps {
  name: string; // The name of the person giving the testimonial
  message: string; // The testimonial message
  avatar: string; // The URL of the person's avatar image
}

// TestimonialCard functional component
const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, message, avatar }) => {
  return (
    <div className="testimonial-card">
      <img src={avatar} alt={name} className="avatar" />
      <p className="message">"{message}"</p>
      <h3 className="name">{name}</h3>
    </div>
  );
};

export default TestimonialCard;