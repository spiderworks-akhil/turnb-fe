// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <img src="/img/logo.png" className="img-fluid" alt="Logo" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-3 col-6">
            <div className="footer-links ml-lg-3 mt-lg-4 mt-md-4 mt-3">
              <h6 className="clr-ab">About Us</h6>
              <ul>
                <li><a href="/aboutus.html">Who We Are</a></li>
                <li><a href="/aboutus.html">Why Us</a></li>
                <li><a href="/aboutus.html">Core Values</a></li>
                <li><a href="/aboutus.html">Milestones</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-6">
            <div className="footer-links ml-lg-3 mt-lg-4 mt-md-4 mt-3">
              <h6 className="clr-ab">Our Services</h6>
              <ul>
                <li><a href="/our-services.html">Our Offerings</a></li>
                <li><a href="/case-studies.html">Case Studies</a></li>
                <li><a href="/scanB/index.html">ScanB</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-6">
            <div className="footer-links ml-lg-3 mt-lg-4 mt-md-4 mt-3">
              <h6 className="clr-ab">Consult D5</h6>
              <ul>
                <li><a href="/consult-D5tm.html">Consult D5™ Framework</a></li>
                <li><a href="/consult-D5tm.html">Analytical Consulting Spectrum</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-6">
            <div className="footer-links ml-lg-3 mt-lg-4 mt-md-4 mt-3">
              <h6 className="clr-ab">Quick Links</h6>
              <ul>
                <li><a href="/life%40turnb.html">Life@TurnB</a></li>
                <li><a href="/career.html">Career</a></li>
                <li><a href="/contact-us.html">Contact Us</a></li>
                <li><a href="/blog.html">Blog</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mt-lg-5 mt-md-5 mt-3">
          <div className="col-lg-6 col-md-6 col-12">
            <p className="flw">Follow us</p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/company/turnb/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/turnb_official/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <p className="flw2">© 2024 TurnB. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
