import React from 'react';
import NavNavigationBar from './components/Navbar';
import Carousel from './components/Carousel';
import Solutions from './components/Solutions';
import Investors from './components/Investors';
import Welcome from './components/Welcome';
import Services from './components/Services';
import Leadership from './components/Leadership';
import Releases from './components/Releases';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

import './App.scss';

function App() {
  return (
    <div className="App">
      <NavNavigationBar />
      <Carousel/>
      <Solutions/>
      <Investors/>
      <Welcome/>
      <Services/>
      <Leadership/>
      <Releases/>
      <Testimonials/>
      <Blog/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
