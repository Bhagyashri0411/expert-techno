import React from 'react';
import banner1 from "../../../assets/banner1.png";
import banner2 from "../../../assets/banner2.png";
import banner3 from "../../../assets/banner3.png";
import banner4 from "../../../assets/banner4.png";
import banner5 from "../../../assets/banner5.png";
import banner6 from "../../../assets/banner6.png";
import banner7 from "../../../assets/banner7.png";
import './home.css'; // Create a CSS file for styling

function HomefirstSection() {


  return (

    <div className="banner-area">
      <div className="container">
        <div className="banner-content">
          <h1 >Expert Digital Technology web Provide Dashboards</h1>
          <a href="#demos" className="default-btn">See Demos</a>
        </div>
      </div>
      <div data-animate="fadeInUp" data-delay="0.6s" className="banner-box one animate animate__fadeInUp animate__animated"
        style={{ animationDelay: '0.6s', visibility: 'visible' }}>
        <img src={banner1} alt="demo-image" />
      </div>

      <div data-animate="fadeInUp" data-delay="0.6s" className="banner-box two animate"
        style={{ animationDelay: '0.6s', visibility: 'visible' }}>
        <img src={banner2} alt="demo-image" />
      </div>

      <div data-animate="fadeInUp" data-delay="0.6s"
        className="banner-box three animate"
        style={{ animationDelay: '0.6s', visibility: 'visible' }}>
        <img src={banner3} alt="demo-image" />
      </div>

      <div data-animate="fadeInUp" data-delay="0.6s"
        className="banner-box four animate animate__fadeInUp animate__animated"
        style={{ animationDelay: '0.6s', visibility: 'visible' }}>
        <img src={banner5} alt="demo-image" />
      </div>

      <div data-animate="fadeInUp" data-delay="0.6s"
        className="banner-box five animate animate__fadeInUp animate__animated"
        style={{ animationDelay: '0.6s', visibility: 'visible' }}>
        <img src={banner4} alt="demo-image" />
      </div>

      <div data-animate="fadeInUp" data-delay="0.6s" className="banner-box six animate"
        style={{ animationDelay: '0.6s', visibility: 'visible' }}>
        <img src={banner6} alt="demo-image" />
      </div>

      <div data-animate="fadeInUp" data-delay="0.6s"
        className="banner-box seven animate"
        style={{ animationDelay: '0.6s', visibility: 'visible' }}>
        <img src={banner7} alt="demo-image" />
      </div>

    </div>
  );
}

export default HomefirstSection;
