import React from 'react';
import './styles/FeaturesItem.css';

const FeaturesItem = props => {
  return (
    <div className={props.reverse ? 'FeaturesItem FeaturesItem--reverse' : 'FeaturesItem' }>
      <img
        src={props.image}
        className="FeaturesItem__image"
        alt={props.alt}
      />
      <div className="FeaturesItem__textContent">
        <h3 className="FeaturesItem__title">{props.title}</h3>
        <p className="FeaturesItem__text">{props.text}</p>
      </div>
    </div>
  );
}

export default FeaturesItem;
