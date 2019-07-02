import React, { Component } from 'react';
import {Carousel, Button } from 'react-bootstrap';

class ControlledCarousel extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          indicators={false}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.thoughtco.com/thmb/bN5tVwfK9aL0hhTW9GnaiMqhoBM=/1280x720/smart/filters:no_upscale()/GettyImages-547087929-59abe2d7396e5a001065880e.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <Button variant="outline-light">Get In Touch</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.economist.com/sites/default/files/20170923_FNP501.jpg"
              alt="Third slide"
            />
  
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Button variant="outline-light">Get In Touch</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://centsai.com/wp-content/uploads/2018/07/should-you-marry-for-money-iStock-514564862-1280x720.jpg"
              alt="Third slide"
            />
  
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
                <Button variant="outline-light">Get In Touch</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }

export default ControlledCarousel
