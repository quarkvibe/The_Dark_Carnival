import React from 'react';

interface AttractionProps {
  id: string;
  name: string;
  description: string;
  tentClass: string;
  silhouetteClass: string;
  onClick: () => void;
}

export const Attraction = ({
  id,
  name,
  description,
  tentClass,
  silhouetteClass,
  onClick,
}: AttractionProps) => {
  return (
    <div className="attraction">
      <div className={`tent ${tentClass}`}>
        <div className="tent-entrance"></div>
        <div className={`character-silhouette ${silhouetteClass}`}></div>
      </div>
      <div className="attraction-details">
        <h2>{name}</h2>
        <p>{description}</p>
        <button className="enter-button" onClick={onClick}>
          Enter
        </button>
      </div>
    </div>
  );
};