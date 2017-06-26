import React, { Component } from 'react';
import './styles/HowItWorksItem.css';

const HowItWorksItem = (props) => {
  return (
    <div className='HowItWorksItem'>
      <img src={props.iconSrc} className='HowItWorksItem__icon' alt={props.iconAlt}/>
      <h3 className='HowItWorksItem__title'>{props.title}</h3>
      <p className='HowItWorksItem__text'>{props.text}</p>
    </div>
  );
};




export default HowItWorksItem;
