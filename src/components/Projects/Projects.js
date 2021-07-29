import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import "./Projects.css";
import pro1 from "../../pro1.png";
import pro2 from "../../pro2.png";
import pro3 from "../../pro3.png";

const Projects = () => {
  return (
    <>
      <section id="project">
        <div className="head_project">
          <h1>Ξ</h1>
          <h2>My Project</h2>
          <p>
            Below are some small projects that <br /> I have learned and worked
            on over the time
          </p>
          <div className="project_list">
            <div className="card-wrapper">
              <div className="card">
                <div className="card-image">
                  <img src={pro1} alt="profile one" />
                </div>
                <div className="details">
                  <h2>
                    CRUD USER MANAGEMENT
                    <br />
                    <span className="job-title">
                      <a href="https://github.com/ThaiNgocLeDuy/Redux-User-Management">
                        <FaGithubSquare style={{ color: "black" }} />
                      </a>
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            {/* end box wrapper */}
            <div className="card-wrapper">
              <div className="card">
                <div className="card-image">
                  <img src={pro2} alt="profile one" />
                </div>
                <div className="details">
                  <h2>
                    Shopping cart
                    <br />
                    <span className="job-title">
                      <a href="https://github.com/ThaiNgocLeDuy/Store-shopping">
                        <FaGithubSquare style={{ color: "black" }} />
                      </a>
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            {/* end box wrapper */}
            <div className="card-wrapper">
              <div className="card">
                <div className="card-image">
                  <img src={pro3} alt="profile one" />
                </div>
                <div className="details">
                  <h2>
                    Chat App
                    <br />
                    <span className="job-title">
                      <a href="https://github.com/ThaiNgocLeDuy/chat-app">
                        <FaGithubSquare style={{ color: "black" }} />
                      </a>
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            {/* end box wrapper */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
