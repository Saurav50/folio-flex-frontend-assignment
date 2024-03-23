import React from "react";
import Banner from "../HeaderBanner/Banner";
import logoImg from "../../assets/image/logo-img.png";

const Header = () => {
  return (
    <div className="header-and-banner-con w-100 float-left position-relative">
      <div className="header-and-banner-inner-con">
        <header className="main-header">
          <div className="container pl-0 pr-0">
            <div className="header-con">
              <nav className="navbar navbar-expand-lg navbar-light p-0">
                <a className="navbar-brand p-0" href="index.html">
                  <img src={logoImg} alt="logo-img" className="img-fluid" />
                </a>
                <button
                  className="navbar-toggler p-0 collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                  <span className="navbar-toggler-icon"></span>
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active pl-0">
                      <a className="nav-link p-0 is-active" href="index.html">
                        Home<span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-0" href="#service-con">
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-0" href="#about-con">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-0" href="#Portfolio">
                        Portfolio
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-0" href="#testimonials">
                        Testimonials
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-0" href="#blog">
                        Blog
                      </a>
                    </li>
                  </ul>
                  <div className="d-inline-block contact">
                    <a href="#Contact">Contact</a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </header>
        <Banner />
      </div>
    </div>
  );
};

export default Header;
