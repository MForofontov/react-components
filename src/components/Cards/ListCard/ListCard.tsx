import React from 'react';
import './ListCard.css';

// Define the props for the ListCard component
interface ListCardProps {
  title: string; // The title of the card
  items: string[]; // The list of items to display in the card
}

// ListCard functional component
const ListCard: React.FC<ListCardProps> = ({ title, items }) => {
  return (
    <div className="card list-card">
      <h2 className="card-title">{title}</h2>
      <ul className="card-list">
        {items.map((item, index) => (
          <li key={index} className="card-list-item">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListCard;