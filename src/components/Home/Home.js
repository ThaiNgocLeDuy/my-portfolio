import React from "react";
import "./Home.css";
import ava from "../../ava.png";

const Home = () => {
  return (
    <>
      <div className="wrapper-home">
        <img src={ava} alt="ava" />
        <div className="haoquang"></div>
        <div className="intro">
          <div data-aos="fade-right" data-aos-duration="fa-rotate-2000">
            Hello there, I'm
          </div>
          <div className="typing">THAI NGOC LE DUY</div>
          <div data-aos="zoom-out-up" data-aos-duration="2000">
            <span style={{ color: "orange" }}>W</span>eb{" "}
            <span style={{ color: "orange" }}>D</span>eveloper
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
