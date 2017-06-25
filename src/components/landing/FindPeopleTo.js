import React, { Component } from 'react';
import TypeWriter from './TypeWriter';
import './styles/FindPeopleTo.css';

export default class FindPeopleTo extends Component {
  render() {
    const sports = [
      'tennis',
      'hiking',
      'cycling',
      'jogging',
      'dancing',
      'squash',
      'running'
    ];
    return (
      <section className='FindPeopleTo'>
        <p className='FindPeopleTo__text'>Easily find people in your area for {' '}
          <TypeWriter data={sports} />
        </p>
      </section>

    );
  }
}
