import React, { Component } from 'react';
import './styles/Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { width: '0', height: '0' };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <footer className="Footer">
        <div className="Footer__content">
          <h2 className="Footer__text">Get fit by having fun for free.</h2>
          <form
            className="Footer__form"
            method="POST"
            action="http://formspree.io/utkuuysal90@gmail.com"
          >
            <input
              className="Footer__input"
              type="email"
              name="email"
              required
              placeholder={
                this.state.width < 470
                  ? 'Email Address'
                  : 'Leave your email address to join the community'
              }
            />
            <button className="Footer__button" type="submit">
              Send
            </button>
          </form>
        </div>
      </footer>
    );
  }
}

export default Footer;
