import React, { Component } from 'react';
import Hero from './Hero';
import LandingNavbar from './LandingNavbar';
import FindPeopleTo from './FindPeopleTo';

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
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima id laboriosam commodi mollitia quas voluptatem ex iusto, corrupti nihil deserunt, pariatur velit. Quaerat laborum sequi, numquam vero consequuntur tenetur. Eum?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima id laboriosam commodi mollitia quas voluptatem ex iusto, corrupti nihil deserunt, pariatur velit. Quaerat laborum sequi, numquam vero consequuntur tenetur. Eum?</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima id laboriosam commodi mollitia quas voluptatem ex iusto, corrupti nihil deserunt, pariatur velit. Quaerat laborum sequi, numquam vero consequuntur tenetur. Eum?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima id laboriosam commodi mollitia quas voluptatem ex iusto, corrupti nihil deserunt, pariatur velit. Quaerat laborum sequi, numquam vero consequuntur tenetur. Eum?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima id laboriosam commodi mollitia quas voluptatem ex iusto, corrupti nihil deserunt, pariatur velit. Quaerat laborum sequi, numquam vero consequuntur tenetur. Eum?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima id laboriosam commodi mollitia quas voluptatem ex iusto, corrupti nihil deserunt, pariatur velit. Quaerat laborum sequi, numquam vero consequuntur tenetur. Eum?</p>

        </div>
      </div>
    );
  }
}

export default Landing;
