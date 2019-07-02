import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
const FontAwesome = require('react-fontawesome')


const Services = () => {
  return (
    <Container fluid style={{ marginTop: "6rem", padding: '7rem 0', backgroundColor: '#f8f9fa' }}>
      <Row style={{margin: 0}}>
        <Col lg={4} md={6} sm={12} >
          <div>
            <FontAwesome
              name="signal"
              size="5x"
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
          </div>
          <h3>
            Individual Approach
          </h3>
          <p>
            Accusantium dignissimos voluptas rem consequatur ratione illo sit quasi.
          </p>
        </Col>
        <Col lg={4} md={6} sm={12} >
          <div>
            <FontAwesome
              name="dollar"
              size="5x"
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
          </div>
          <h3>
            Individual Approach
          </h3>
          <p>
            Accusantium dignissimos voluptas rem consequatur ratione illo sit quasi.
          </p>
        </Col>
        <Col lg={4} md={6} sm={12} >
          <div>
            <FontAwesome
              name="magnet"
              size="5x"
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
          </div>
          <h3>
            Individual Approach
          </h3>
          <p>
            Accusantium dignissimos voluptas rem consequatur ratione illo sit quasi.
          </p>
        </Col>
        <Col lg={4} md={6} sm={12} >
          <div>
            <FontAwesome
              name="umbrella"
              size="5x"
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
          </div>
          <h3>
            Individual Approach
          </h3>
          <p>
            Accusantium dignissimos voluptas rem consequatur ratione illo sit quasi.
          </p>
        </Col>
        <Col lg={4} md={6} sm={12} >
          <div>
            <FontAwesome
              name="briefcase"
              size="5x"
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
          </div>
          <h3>
            Individual Approach
          </h3>
          <p>
            Accusantium dignissimos voluptas rem consequatur ratione illo sit quasi.
          </p>
        </Col>
        <Col lg={4} md={6} sm={12} >
          <div>
            <FontAwesome
              name="money"
              size="5x"
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
          </div>
          <h3>
            Individual Approach
          </h3>
          <p>
            Accusantium dignissimos voluptas rem consequatur ratione illo sit quasi.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Services
