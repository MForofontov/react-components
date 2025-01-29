import React from 'react';
import './PricingCard.css';

// Define the props for the PricingCard component
interface PricingCardProps {
  planName: string; // The name of the pricing plan
  price: string; // The price of the plan
  features: string[]; // The features included in the plan
  onSubscribe: () => void; // The function to call when the subscribe button is clicked
}

// PricingCard functional component
const PricingCard: React.FC<PricingCardProps> = ({ planName, price, features, onSubscribe }) => {
  return (
    <div className="card pricing-card">
      <h2 className="plan-name">{planName}</h2>
      <h3 className="price">{price}</h3>
      <ul className="features-list">
        {features.map((feature, index) => (
          <li key={index} className="feature-item">{feature}</li>
        ))}
      </ul>
      <button onClick={onSubscribe} className="subscribe-button">Subscribe</button>
    </div>
  );
};

export default PricingCard;