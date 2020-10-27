import React from "react";
import ReactDOM from "react-dom";

//import components
import Navbar from '../components/navbar.jsx';
import Intro from '../components/intro.jsx';
import About from '../components/about.jsx';
import Portfolio from '../components/portfolio.jsx';
import Contact from '../components/contact.jsx';
import BackToTop from '../components/back-top.jsx';
import Preloader from '../components/preloader';

function Home() {
    return (
        <div className="Home">
            <Intro />
            <About />
            <Portfolio />
            <Contact />
            {/* <BackToTop />
            <Preloader /> */}
        </div>
    );
  }
  
  export default Home;