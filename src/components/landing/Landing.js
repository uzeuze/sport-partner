import React, { Component } from 'react';
import Hero from './Hero';
import LandingNavbar from './LandingNavbar';
import FindPeopleTo from './FindPeopleTo';
import HowItWorks from './HowItWorks';
import Features from './Features';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { scrolled } = this.state;
    if (document.body.scrollTop > 100 && !scrolled) {
      this.setState({ scrolled: true });
    } else if (document.body.scrollTop <= 100 && scrolled){
      this.setState({ scrolled: false });
    }
  }

  render() {
    return (
      <div>
        <LandingNavbar scrolled={this.state.scrolled} />
        <Hero />
        <FindPeopleTo />
        <HowItWorks />
        <Features />
      </div>
    );
  }
}

export default Landing;
