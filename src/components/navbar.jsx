import React from "react";
import $ from "jquery";

// import logo1 from "../img/male.png";
import logo1 from "../img/0.jpeg";
import logo2 from "../img/0.jpeg";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      logo: logo1,
      width: "100px"
    };
  }

  componentDidMount() {
    const nav = $("nav");
    let navHeight = nav.outerHeight();

    $(".navbar-toggler").on("click", function() {
      if (!$("#mainNav").hasClass("navbar-reduce")) {
        $("#mainNav").addClass("navbar-reduce");
      }
    });

    $("body").scrollspy({
      target: "#mainNav",
      offset: navHeight
    });

    $(".js-scroll").on("click", function() {
      $(".navbar-collapse").collapse("hide");
    });

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-reduce");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-trans");
        this.setState({ 
          logo: logo2,
          width: "50px"
        });
      } else {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-trans");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-reduce");
        this.setState({ 
          logo: logo1,
          width: "100px" 
        });
      }
    });

    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function() {
      if (
        window.location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        window.location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - navHeight + 5
            },
            1000,
            "easeInExpo"
          );
          return false;
        }
      }
    });

    $(".js-scroll").on("click", function() {
      $(".navbar-collapse").collapse("hide");
    });

    switch(window.location.pathname){
      case "/home":
        $("#home").addClass("active");
        break;
      case "/about":
        $("#about").addClass("active");
        break;
      case "/work":
        $("#work").addClass("active");
        break;
      case "/contact":
        $("#contact").addClass("active");
        break;
      default:
        $("#home").addClass("active");
        break;
    }
  }

  render() {
    return (
      <nav
        className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
        id="mainNav"
      >
        <div className="container">
          { window.innerWidth > 767 ? 
            <a className="navbar-brand js-scroll" href="/">
              <img
                src={this.state.logo}
                alt="logo"
                style={{ maxWidth: this.state.width, borderRadius: "50%" }}
              />
            </a>
            : <a className="navbar-brand js-scroll" href="/"></a> }
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div
            className="navbar-collapse collapse justify-content-end"
            id="navbarDefault"
          >
            <ul className="navbar-nav" style={{textAlign: "center"}}>
              <li className="nav-item">
                <a id="home" className="nav-link js-scroll" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a id="about" className="nav-link js-scroll" href="/about">
                  About
                </a>
                {/* <Link to="/about">About</Link> */}
              </li>
              <li className="nav-item">
                <a id="work" className="nav-link js-scroll" href="/work">
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a id="contact" className="nav-link js-scroll" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
