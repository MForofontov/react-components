import React from 'react';
import './CardWithTags.css';

// Define the props for the CardWithTags component
interface CardWithTagsProps {
  title: string; // The title of the card
  content: string; // The content of the card
  tags: string[]; // The tags to display in the card
}

// CardWithTags functional component
const CardWithTags: React.FC<CardWithTagsProps> = ({ title, content, tags }) => {
  return (
    <div className="card card-with-tags">
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CardWithTags;