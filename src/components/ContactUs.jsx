import React from 'react'
import { Row, Col, Container, Form, Button } from 'react-bootstrap';

function ContactUs() {
  return (
    <section className="contact-us">
      <Container>
        <p>GET IN TOUCH</p>
        <h2 style={{color: '#7f4782'}}>Contact Us</h2>
        <Row>
          <Col lg={6} md={12}>
            <Form>
              <Row>
                <Col sm={12} lg={6}>
                  <Form.Control size="lg" placeholder="First name" />
                </Col>
                <Col sm={12} lg={6}>
                  <Form.Control size="lg" placeholder="Last name" />
                </Col>
                <Col md={12}>
                  <Form.Control size="lg" placeholder="Email address" />
                </Col>
                <Col md={12}>
                  <Form.Control as="textarea" rows="10" placeholder="Write your message" />
                </Col>
                <Col md={12}>
                  <Button size='lg' variant="primary" className="pull-right">Primary</Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col lg={6} md={12} className="changeable">
            <h2>Need to know more on details? Call Us <a href="#top">+1 392 3929 482</a></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, distinctio! Harum quibusdam nisi, illum nulla aspernatur <a href="#top"> voluptas nam praesentium </a> aut quidem aperiam, quae non tempora recusandae voluptatibus fugit impedit.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactUs
