import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

function Blog() {
  return (
    <Container className="blog" style={{ padding: '3rem 0' }}>
      <p>LATEST BLOG POST</p>
      <h2>Our Blog</h2>
      <Row>
        <Col lg={6} md={12}>
          <a href="#top">
            <img src="http://papers.co/wallpaper/papers.co-nu84-city-night-view-hongkong-nature-32-wallpaper.jpg" alt="" />
          </a>
          <a href="#top">How to Invest In Investing Company</a>
          <p>JANUARY 18, 2019 BY <span>JAMES COOPER</span></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat et suscipit iste libero neque. Vitae quidem ducimus voluptatibus nemo cum odio ab enim nisi, itaque, libero fuga veritatis culpa quis!</p>
          <a href="#top">Read more</a>
        </Col>
        <Col lg={6} md={12}>
          <a href="#top">
            <img src="http://papers.co/wallpaper/papers.co-nu84-city-night-view-hongkong-nature-32-wallpaper.jpg" alt="" />
          </a>
          <a href="#top">How to Invest In Investing Company</a>
          <p>JANUARY 18, 2019 BY <span>JAMES COOPER</span></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat et suscipit iste libero neque. Vitae quidem ducimus voluptatibus nemo cum odio ab enim nisi, itaque, libero fuga veritatis culpa quis!</p>
          <a href="#top">Read more</a>
        </Col>
      </Row>
    </Container>
  )
}

export default Blog
