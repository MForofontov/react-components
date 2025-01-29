import React from 'react';
import './ProfileCard.css';

// Define the props for the ProfileCard component
interface ProfileCardProps {
  name: string; // The name of the profile
  imageUrl: string; // The URL of the profile image
  description: string; // The description of the profile
}

// ProfileCard functional component
const ProfileCard: React.FC<ProfileCardProps> = ({ name, imageUrl, description }) => {
  return (
    <div className="card profile-card">
      <img src={imageUrl} alt={name} className="profile-image" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-description">{description}</p>
    </div>
  );
};

export default ProfileCard;