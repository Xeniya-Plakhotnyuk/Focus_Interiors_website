import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';

import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Shop from "./Components/Shop";
import Footer from "./Components/Footer";

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    
    <div >
      
      <Router>
      
        <nav data-aos="fade-down" >
          <Link to ="/" className="link"><img src='images/logo.png' alt="logo" width="100px" className="logo" data-aos="zoom-in" data-aos-duration="2000" /></Link>
          <Link to="/" className="link">Shop</Link>
          <Link to="/about" className="link">About</Link>
          <Link to="/services" className="link">Services</Link>
          <Link to="/contact" className="link">Contact</Link>
                  </nav>
        

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>

      <div>
        <Footer />
      </div>
               
    </div>
  );
}

export default App;
