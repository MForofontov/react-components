import React, { useState } from 'react';
import './CardWithModal.css';

// Define the props for the CardWithModal component
interface CardWithModalProps {
  title: string; // The title of the card
  content: string; // The content of the card
}

// CardWithModal functional component
const CardWithModal: React.FC<CardWithModalProps> = ({ title, content }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track if the modal is open

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="card card-with-modal">
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
      <button onClick={openModal} className="view-more-button">View More</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2 className="modal-title">{title}</h2>
            <p className="modal-content">{content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardWithModal;
