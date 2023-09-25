// src/components/BeerCard.js
import React from 'react';
 import "./BeerCard.css"
const BeerCard = ({ beer }) => {
  return (
    <div className="beer-card">
      <img src={beer.image_url} alt={beer.name} />
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
    </div>
  );
};

export default BeerCard;
