import React, { Component } from 'react';
import './styles/SportsItem.css';

class SportsItem extends Component {
  render() {
    return (
      <div className={`SportsItem SportsItem--${this.props.styleSuffix}`}>
        <div className='SportsItem__overlay'>
          <h3 className='SportsItem__name'>{this.props.name}</h3>
        </div>
      </div>
    );
  }
}

export default SportsItem;
