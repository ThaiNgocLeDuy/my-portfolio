import React from "react";
import "./Intro.css";
import ava2 from "../../ava2.png";
import hobbies from "./hobbies";
import { Col, Tooltip } from "antd";

const Intro = () => {
  return (
    <>
      <div className="wrapper-intro">
        <Col span={10}>
          <div className="thumb">
            <img src={ava2} alt="ava2" />
          </div>
        </Col>
        <Col span={14}>
          <div className="about-me">
            <div className="about-me-title">
              <h2 className="title">About Me</h2>
              <p className="description">
                Hi, my name is Thai Ngoc Le Duy. I'm from Ho Chi Minh city.
                Learning new languages and technologies are what I am passionate
                about. Be a motivated, adaptive and responsible IT student, I am
                looking for a IT position to develop my technical and
                professional skills learned in the university and then become a
                creative and independent IT.
              </p>
            </div>
            <div className="about-my-hobbies">
              <h2>I'm Interested in</h2>
              <div className="hobbies">
                {hobbies.map((hobby) => (
                  <Tooltip key={hobby.title} title={hobby.title}>
                    <img className="hobbies-image" src={hobby.image} alt="hobbies" />
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
        </Col>
      </div>
    </>
  );
};

export default Intro;
