import React from 'react';
import { Row, Col, Container, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
const FontAwesome = require('react-fontawesome')

const StyledFooter = styled.footer`
  background-color: #343A40;
  padding: 6rem 4rem 0 4rem;
  @media (max-width: 768px) {
    padding: 3rem 2rem 0 2rem;
  }
  div {
    max-width:71.25rem;
  }
  > div > div {
    padding-bottom: 4rem;
  }
  h5 {
    color: white;
    margin: 1rem 0
  }
  ul {
    list-style-type: none;
    padding-left: 0
  }
  li {
    margin-bottom: 0.75rem;
  }
  p, li, a {
    color: #737373;
  }
  button {
    background-color: #7f4782;
    border-color: #7f4782;
    color: white
  }
`;

const Copyright = styled.p`
  text-align: center;
  margin: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 3rem 0 6rem 0;
`;

function Footer() {
  return (
    <StyledFooter>
      <Container fluid>
        <Row>
          <Col md={8} sm={12}>
            <Row>
              <Col sm={12} md={6}>
                <h5>Abous us</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
              </Col>
              <Col sm={12} md={6}>
                <h5>Features</h5>
                <ul>
                  <li><a href="#top"> About Us</a></li>
                  <li><a href="#top"> Press Releases</a></li> 
                  <li><a href="#top"> Testimonials</a></li> 
                  <li><a href="#top"> Terms of Service</a></li> 
                  <li><a href="#top"> Privacy</a></li> 
                  <li><a href="#top"> Contact Us</a></li>                
                </ul>
              </Col>
            </Row>
          </Col>
          <Col md={4} sm={12}>
            <h5>Some Paragraph</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nostrum libero iusto dolorum vero atque aliquid.</p>
            <h5>Subscribe to Newsletter</h5>
            <Form>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                  <Button variant="outline-secondary">Button</Button>
                </InputGroup.Append>
              </InputGroup>
            </Form>
            <h5>Follow us</h5>
            <div>
            <FontAwesome
              name="facebook"
              size="1x"
              style={{ color:" #737373", paddingRight: '2rem' }}
            />
            <FontAwesome
              name="twitter"
              size="1x"
              style={{ color:" #737373", paddingRight: '2rem' }}
            />
            <FontAwesome
              name="instagram"
              size="1x"
              style={{ color:" #737373", paddingRight: '2rem' }}
            />
            <FontAwesome
              name="linkedin"
              size="1x"
              style={{ color:" #737373", paddingRight: '2rem' }}
            />
            </div>
          </Col>
        </Row>
        <Copyright>
        Copyright ©2019 All rights reserved | This template is made with  by Colorlib
        </Copyright>
      </Container>
    </StyledFooter>
  )
}

export default Footer
