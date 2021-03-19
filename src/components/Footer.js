import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="d-flex  justify-content-around">
          <Link smooth={true} to="home" className="footer-nav">
            Home
          </Link>
          <br />
          <Link smooth={true} to="about" className="footer-nav">
            About Me
          </Link>
          <Link smooth={true} to="portfolio" className="footer-nav">
            Portfolio
          </Link>
          <br />
          <Link smooth={true} to="contact" className="footer-nav">
            Contact Me
          </Link>
        </div>
        <div className=" aling-items-center">
          <div className="d-flex justify-content-center">
            <a href="https://github.com/cvilla714" target="_blank" className="link">
              {" "}
              <FaGithub className="media" />
            </a>
            <a href="https://twitter.com/kckeyti" target="_blank" className="link">
              {" "}
              <FaTwitter className="media" />
            </a>
            <a href="https://www.linkedin.com/in/cosvilla/" target="_blank" className="link">
              {" "}
              <FaLinkedin className="media" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
