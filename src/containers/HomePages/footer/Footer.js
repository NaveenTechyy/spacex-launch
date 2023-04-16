import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="addr-container">
        <p>SpaceX © 2022</p>
      </div>
      <div className="links-container">
        <a href="https://twitter.com/SpaceX" rel="noreferrer" target="_blank">
          Twitter
        </a>
        <a href="https://www.spacex.com/" rel="noreferrer" target="_blank">
          Website
        </a>
        <a
          href="https://www.flickr.com/photos/spacex/"
          rel="noreferrer"
          target="_blank"
        >
          Flickr
        </a>
      </div>
    </div>
  );
}

export default Footer;
