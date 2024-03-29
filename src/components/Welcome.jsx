import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { Player } from 'video-react';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

class Welcome extends Component {
  state = {
    delay: 10
  }
  onChange = (isVisible) => {
    if (isVisible) {
      this.setState({
        delay: 1
      })
    }
  }
  render() {
    return (
      <Container className="welcome">
        <Row>
          <Col md={6} sm={12}>
            <Player
              playsInline
              poster="/assets/poster.png"
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
          </Col>
          <Col md={6} sm={12}>
            <h4>Welcome to Inves</h4>
            <p>
              Accusantium dignissimos voluptas rem consequatur blanditiis error ratione illo sit quasi ut, praesentium magnam, pariatur quae, necessitatibus<br /><br />
              Dolor, eligendi voluptate ducimus itaque esse autem perspiciatis sint! Recusandae dolor aliquid inventore sit,<br /><br />
              Recusandae dolor aliquid inventore sit, maiores quisquam nostrum quaerat dolorum error rerum
                </p>
            <span>
              Read More
                </span>
          </Col>
          <Col md={12}>
            <VisibilitySensor onChange={this.onChange}>
              <Row>
                <Col lg={3} md={6} sm={12}>
                  <span>
                    <CountUp end={15} duration={10} delay={this.state.delay} />
                  </span>
                  <p>
                    Year of Expirience
                  </p>
                </Col>
                <Col lg={3} md={6} sm={12}>
                  <span>
                    <CountUp end={392} duration={10} delay={this.state.delay} />
                  </span>
                  <p>
                    Number of Engineers
                  </p>
                </Col>
                <Col lg={3} md={6} sm={12}>
                  <span>
                    <CountUp end={3293} duration={10} delay={this.state.delay} />
                  </span>
                  <p>
                    Number of Employees
                  </p>
                </Col>
                <Col lg={3} md={6} sm={12}>
                  <span>
                    <CountUp end={1212} duration={10} delay={this.state.delay} />
                  </span>
                  <p>
                    Number of Golds
                  </p>
                </Col>
              </Row>
            </VisibilitySensor>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Welcome
