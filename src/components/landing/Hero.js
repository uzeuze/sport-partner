import React, { Component } from 'react';
import './styles/Hero.css';

class Hero extends Component {
  render() {
    return (
      <section className='Hero'>
        <div className='Hero__overlay'>
          <div className='Hero__content'>
            <h1 className='Hero__title'>Find sport partners.</h1>
            <p className='Hero__subtitle'>Search partners in your city and have fun.</p>
            <button className='Hero__button'>Get Started</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
