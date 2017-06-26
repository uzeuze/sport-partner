import React, { Component } from 'react';
import './styles/HowItWorks.css';
import SearchIcon from '../../assets/search.svg';
import CreateIcon from '../../assets/create.svg';
import MeetIcon from '../../assets/meet.svg';
import HowItWorksItem from './HowItWorksItem';

class HowItWorks extends Component {
  render() {
    return (
      <section className='HowItWorks'>
        <div className='HowItWorks__content'>
          <HowItWorksItem
            iconSrc={SearchIcon}
            iconAlt="browse other peoples activities"
            title="BROWSE ACTIVITIES FROM OTHER PEOPLE"
            text="Search available sport partners in your area and send request to join them."
          />
          <HowItWorksItem
            iconSrc={CreateIcon}
            iconAlt="create your own activity"
            title="CREATE YOUR OWN ACTIVITY"
            text="Let other people know where and when you will do sport so they can join."
          />
          <HowItWorksItem
            iconSrc={MeetIcon}
            iconAlt="meet with other people and do sport together"
            title="MEET AND ENJOY DOING SPORT TOGETHER"
            text="Search available sport partners in your area and send request to join them."
          />
        </div>

      </section>
    );
  }
}

export default HowItWorks;
