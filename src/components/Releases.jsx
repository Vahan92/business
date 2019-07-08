import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';

function Releases() {
  return (
    <Container className="releases">
      <Row>
        <Col lg={6} sm={12}>
          <h2>Press Realese</h2>
        </Col>
        <Col lg={6} sm={12}>
          <Row>
            <Col md={12} lg={6}>
              <img src="https://dynamicmedia.zuza.com/zz/m/original_/f/9/f9d8e816-6bcf-4ade-8c00-5c18d9d94e3a/PGBE_20130905_Final_A3_01_I001_Gallery.jpg" alt="" />
            </Col>
            <Col md={12} lg={6}>
              <p>How To Invest In Investing Company</p>
              <p>Apr 19, 2019</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis, perferendis molestias commodi adipisci.</p>
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={6}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTFYoNmHTTOJ28iaLvvvzm2NLUG9d8i7ZkXNOfEMQ4Z5S8njOvNA" alt="" />
            </Col>
            <Col md={12} lg={6}>
              <p>How To Invest In Investing Company</p>
              <p>Apr 19, 2019</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis, perferendis molestias commodi adipisci.</p>
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={6}>
              <img src="http://www.federalcapital.co.uk/assets/home-contact.png" alt="" />
            </Col>
            <Col md={12} lg={6}>
              <p>How To Invest In Investing Company</p>
              <p>Apr 19, 2019</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis, perferendis molestias commodi adipisci.</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Releases
