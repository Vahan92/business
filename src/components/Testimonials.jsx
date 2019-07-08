import React from 'react';
import CarouselSlider from "react-carousel-slider";
const FontAwesome = require('react-fontawesome')

function Testimonials() {
  let data = [

    {
      "imgSrc": "http://kavehome.com.uy/wp-content/uploads/2015/06/people-img6.jpg",
      "name": "Niklas Koppernigk",
      "des": "19 February 1473 – 24 May 1543"
    },
    {
      "imgSrc": "http://kavehome.com.uy/wp-content/uploads/2015/06/people-img10.jpg",
      "name": "Galileo Galilei",
      "des": "15 February 1564 – 8 January 1642"
    },
    {
      "imgSrc": "http://shoppingcentreawards.com/wp-content/uploads/2015/06/people-img8.jpg",
      "name": "Michael Faraday",
      "des": "22 September 1791 – 25 August 1867"
    },
    {
      "imgSrc": "https://cdn.ey.com/echannel/gl/en/industries/financial-services/fso-emeia/img/people/EY-FS-david-frias.jpg",
      "name": "Marie Curie",
      "des": "7 November 1867 – 4 July 1934"
    }
  ];

  let manner = {
    autoSliding: { interval: "3s" },
    duration: "2s"
  };

  let itemsStyle = {
    padding: "0px",
    background: "white",
    margin: "0 30px",
    boxShadow: "1px 1px 1px 1px #9E9E9E",
    borderRadius: "4px"
  };

  let imgStyle = {
    height: "70%",
    borderBottom: "1px solid #9E9E9E"
  };

  let textBoxStyle = {
    width: "40%",
    top: "290px",
    color: "black",
    background: "transparent",
    fontSize: "14px",
    fontFamily: "Times New Roman"
  };

  let textBoxStyle2 = {
    width: "70%",
    top: "330px",
    color: "black",
    background: "transparent",
    fontSize: "12px",
    fontStyle: "italic"
  };

  let scientists = data.map((item, index) =>
    <div key={index} >
      <img style={imgStyle} alt='' src={item.imgSrc} ></img>
      <p style={textBoxStyle} >{item.name}</p>
      <p style={textBoxStyle2} >{item.des}</p>
    </div>
  );

  let btnWrapperStyle = {
    position: "relative",
    borderRadius: "50%",
    height: "50px",
    width: "50px",
    boxShadow: "1px 1px 1px 1px #9E9E9E",
    textAlign: "center"
  }

  let btnStyle = {
    display: "inline-block",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "36px"
  }  

  let rBtnCpnt = (<div style={btnWrapperStyle} >
    <div style={btnStyle} className="material-icons" ><FontAwesome
      name="right"
      size="5x"
      style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
    /></div>
  </div>);

  let lBtnCpnt = (<div style={btnWrapperStyle} >
    <div style={btnStyle} className="material-icons" ><FontAwesome
      name="left"
      size="5x"
      style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
    /></div>
  </div>);

  let scientistsCard = (<CarouselSlider
    manner={manner}
    sliderBoxStyle={{ height: "450px", width: "80%", background: "transparent" }}
    accEle={{ dots: false }}
    slideCpnts={scientists}
    itemsStyle={itemsStyle}
    buttonSetting={{ placeOn: 'middle-outside' }}
    rBtnCpnt={rBtnCpnt}
    lBtnCpnt={lBtnCpnt}
  />);


  return (
    <div className="testimonials">
      <h2 style={{ textAlign: 'center', padding: '5rem 0', color: 'white' }}>Testimonials</h2>
      <div style={{ position: "relative", margin: "0 auto", width: "80%" }} >
        {scientistsCard}
      </div>
    </div>
  )
}

export default Testimonials
