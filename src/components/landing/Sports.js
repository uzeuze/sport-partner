import React, { Component } from 'react';
import './styles/Sports.css';
import SportsItem from './SportsItem';

class Sports extends Component {
  render() {
    return (
      <section className="Sports">
        <div className="Sports__row">
          <SportsItem name="Tennis" styleSuffix="tennis" />
          <SportsItem name="Dancing" styleSuffix="dancing" />
          <SportsItem name="Jogging" styleSuffix="jogging" />
        </div>
        <div className="Sports__row">
          <SportsItem name="Skiing" styleSuffix="skiing" />
          <SportsItem name="Cycling" styleSuffix="cycling" />
          <SportsItem name="Kayaking" styleSuffix="kayaking" />
        </div>
        <div className="Sports__row">
          <SportsItem name="Basketball" styleSuffix="basketball" />
          <SportsItem name="Golf" styleSuffix="golf" />
          <SportsItem name="Trekking" styleSuffix="trekking" />
        </div>
      </section>
    );
  }
}

export default Sports;
