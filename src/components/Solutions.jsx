import React, { Component } from 'react'
import { Row, Col, Card, Button, Container } from 'react-bootstrap';

class Solutions extends Component {
  render() {
    return (
      <Container style={{marginTop: "-3rem"}}>
        <Row>
          <Col lg={4} md={6} xsm={12} >
            <Card style={{ width: '100%', marginBottom: '1rem' }}>
              <Card.Img variant="top" src="https://dynamicmedia.zuza.com/zz/m/original_/f/9/f9d8e816-6bcf-4ade-8c00-5c18d9d94e3a/PGBE_20130905_Final_A3_01_I001_Gallery.jpg" />
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
            <Card style={{ width: '100%', marginBottom: '1rem' }}>
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTFYoNmHTTOJ28iaLvvvzm2NLUG9d8i7ZkXNOfEMQ4Z5S8njOvNA" />
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
            <Card style={{ width: '100%', marginBottom: '1rem' }}>
              <Card.Img variant="top" src="http://www.federalcapital.co.uk/assets/home-contact.png" />
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
