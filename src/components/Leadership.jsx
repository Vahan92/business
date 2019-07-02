import React, { Component } from 'react'
import { Row, Col, Card, Button, Container } from 'react-bootstrap';

class Solutions extends Component {
  render() {
    return (
      <Container className="leadership">
        <h2>Our Leadership</h2>
        <Row>
          <Col lg={4} md={6} xsm={12} >
            <Card>
              <div>
                <Card.Img style={{ borderRadius: '50%' }} variant="top" roundedCircle src="https://avatars0.githubusercontent.com/u/1024025?s=460&v=4" />
              </div>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
            </Card.Text>
                <p>Read more</p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} xsm={12} >
            <Card>
              <div>
                <Card.Img style={{ borderRadius: '50%' }} variant="top" roundedCircle src="https://lifeboat.com/images/bill.gates.jpg" />
              </div>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
              </Card.Text>
                <p>Read more</p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} xsm={12} >
            <Card>
              <div>
                <Card.Img style={{ borderRadius: '50%', width: '75% !important' }} variant="top" roundedCircle src="https://lifeboat.com/images/elon.musk.jpg" />
              </div>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
            </Card.Text>
                <p>Read more</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Solutions
