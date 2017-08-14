import React, { Component } from 'react';
import './styles/Sports.css';
import SportsItem from './SportsItem';

class Sports extends Component {
  render() {
    return (
      <section className='Sports'>
        <div className='Sports__row'>
          <SportsItem
            name='Tennis'
            styleSuffix='tennis'
          />
          <SportsItem
            name='Jogging'
            styleSuffix='jogging'
          />
          <SportsItem
            name='Dancing'
            styleSuffix='dancing'
          />
        </div>
        <div className='Sports__row'>
          <SportsItem
            name='Tennis'
            styleSuffix='tennis'
          />
          <SportsItem
            name='Jogging'
            styleSuffix='tennis'
          />
          <SportsItem
            name='Dancing'
            styleSuffix='tennis'
          />
        </div>
        <div className='Sports__row'>
          <SportsItem
            name='Tennis'
            styleSuffix='tennis'
          />
          <SportsItem
            name='Jogging'
            styleSuffix='tennis'
          />
          <SportsItem
            name='Dancing'
            styleSuffix='tennis'
          />
        </div>
      </section>
    );
  }
}

export default Sports;
