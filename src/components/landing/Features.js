import React, { Component } from 'react';
import './styles/Features.css';
import FeaturesItem from './FeaturesItem';
import Free from '../../assets/features-free.jpeg';
import Connected from '../../assets/features-connected.jpg';
import GetBetter from '../../assets/features-get-better.jpeg';

class Features extends Component {
  render() {
    return (
      <section className='Features'>
        <div className='Features__content'>
          <FeaturesItem
            image={Free}
            alt='Completely free'
            title='Completely free'
            text='We do not charge any intermediary costs to bring sportive people together!'
          />
          <FeaturesItem
            image={Connected}
            alt='Get connected'
            title='Get connected'
            text='Meet new people in your area to have fun and challenge.'
            reverse
          />
          <FeaturesItem
            image={GetBetter}
            alt='Get better'
            title='Get better'
            text='Set goals with your partner. Get better everyday.'
          />
        </div>
      </section>
    );
  }
}

export default Features;
