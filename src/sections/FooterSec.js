import React from "react";
import "../App.css";

class FooterSec extends React.Component {
  render() {
    return (
      <section className="FooterSec">
        <div className="FooterDiv1">
          <div className="FooterBox">
            <h3>What's New</h3>
            <a href="#">Surface Pro X</a>
            <a href="#">Surface Laptop 3</a>
            <a href="#">Surface Pro 7</a>
            <a href="#">Windows 10 apps</a>
            <a href="#">Office apps</a>
          </div>
          <div className="FooterBox">
            <h3>Microsoft Store</h3>
            <a href="#">Account Profile</a>
            <a href="#">Download Center</a>
            <a href="#">Microsoft Store support</a>
            <a href="#">Returns</a>
            <a href="#">Older tracking</a>
          </div>
          <div className="FooterBox">
            <h3>Education</h3>
            <a href="#">Microsoft in education</a>
            <a href="#">Office for students</a>
            <a href="#">Office 365 for schools</a>
            <a href="#">Deals for students</a>
            <a href="#">Microsfot Azure</a>
          </div>
          <div className="FooterBox">
            <h3>Enterprise</h3>
            <a href="#">Azure</a>
            <a href="#">AppSource</a>
            <a href="#">Automotive</a>
            <a href="#">Government</a>
            <a href="#">Healthcare</a>
          </div>
          <div className="FooterBox">
            <h3> Developer</h3>
            <a href="#">Visual Studio</a>
            <a href="#">Windows Dev Center</a>
            <a href="#">Developer Network</a>
            <a href="#">TechNet</a>
            <a href="#">Microsoft Developer</a>
          </div>
          <div className="FooterBox">
            <h3>Company</h3>
            <a href="#">Careers</a>
            <a href="#">About Microsoft</a>
            <a href="#">Company news</a>
            <a href="#">Privacy at Microsoft</a>
            <a href="#">Inverstors</a>
          </div>
        </div>
        <div className="FooterDiv2">
          <p>English (United States)</p>
          <a href="#">Sitemap</a>
          <a href="#">Contact Microsoft</a>
          <a href="#">Privacy &amp; cookies</a>
          <a href="#">Terms of use</a>
          <a href="#">Trademarks</a>
          <a href="#">Safety &amp; eco</a>
          <a href="#">About our ads</a>
          <a href="#">© Microsoft 2020</a>
        </div>
      </section>
    );
  }
}

export default FooterSec;
