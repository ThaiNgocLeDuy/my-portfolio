import React from "react";
import {
    SiCss3, SiHtml5, SiJava, SiJavascript, SiMongodb, SiMysql, SiReact, SiSpring
} from "react-icons/si";
import { TiTick } from "react-icons/ti";
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills">
      <div className="head_skills">
        <h1>💻💻💻</h1>
        <h2>Main ⊶ Skills </h2>
        <div className="super_skills">
          <ul>
            <li className="one_skill">
              <span>
                <TiTick />
              </span>
              <SiHtml5 /> HTML
            </li>
            <li className="one_skill">
              <span>
                <TiTick />
              </span>
              <SiCss3 /> CSS
            </li>
            <li className="one_skill">
              <span>
                <TiTick />
              </span>
              <SiJavascript /> JAVASCRIPT
            </li>
            <li className="one_skill">
              <span>
                <TiTick />
              </span>
              <SiReact /> REACTJS
            </li>
            <li className="one_skill">
              <span>
                <TiTick />
              </span>
              <SiJava /> JAVA
            </li>
            <li className="one_skill">
              <span>
                <TiTick />
              </span>
              <SiSpring /> SPRING FRAMEWORK
            </li>
            <li className="one_skill">
              <span>
                <TiTick />
              </span>
              <SiMysql /> MYSQL
            </li>
            <li className="one_skill">
              <span>
                <TiTick />
              </span>
              <SiMongodb /> MONGODB
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
