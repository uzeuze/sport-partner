import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import scrollToElement from 'scroll-to-element';

import Hero from './Hero';
import LandingNavbar from './LandingNavbar';
import FindPeopleTo from './FindPeopleTo';
import HowItWorks from './HowItWorks';
import Features from './Features';
import Footer from './Footer';
import Sports from './Sports';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false
    };
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
    } else if (document.body.scrollTop <= 100 && scrolled) {
      this.setState({ scrolled: false });
    }
  }

  render() {
    return (
      <div>
        <LandingNavbar
          onHowItWorks={() => {
            scrollToElement('#how-it-works');
          }}
          onFeatures={() => {
            scrollToElement('#features');
          }}
          onJoin={() => {
            scrollToElement('#footer');
          }}
          scrolled={this.state.scrolled}
        />
        <Hero
          onJoin={() => {
            scrollToElement('#footer');
          }}
        />
        <FindPeopleTo />
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="features">
          <Features />
        </div>
        <Sports />
        <div id="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Landing;
