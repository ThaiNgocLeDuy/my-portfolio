import { useRef, useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaProjectDiagram,
  FaThList,
  FaUser,
  FaGithubSquare,
} from "react-icons/fa";
import {
  SiGmail,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiJava,
  SiMysql,
  SiMongodb,
  SiSpring,
} from "react-icons/si";
import { TiTick } from "react-icons/ti";
import "./App.css";
import avatar from "./ava.jpg";
import banner from "./bg-banner.jpg";
import aboutimage from "./my_image.jpg";

function App() {
  const [isDark, setIsDark] = useState(true);

  const handleChangeDarkMode = () => {
    setIsDark(!isDark);
  };

  const homeRef = useRef();
  const aboutRef = useRef();
  const projectRef = useRef();
  const skillsRef = useRef();

  const handleClickToTop = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  }
  const handleClickToAboutSection = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickToProjectSection = () => {
    projectRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickToSkillsSection = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={homeRef} className="App" style={isDark ? { backgroundColor: "#121723" } : {}}>
      <div
        id="navbar"
        style={
          isDark ? { backgroundColor: "#1d2430" } : { backgroundColor: "white" }
        }
      >
        <h3 className="nav_logo">LE DUY</h3>
        <nav className="nav_menu">
          <ul className="nav_links">
            <li
              style={isDark ? { color: "white" } : { color: "black" }}
              className="nav_item"
              onClick={handleClickToTop}
            >
              <FaHome /> HOME
            </li>
            <li
              style={isDark ? { color: "white" } : { color: "black" }}
              className="nav_item"
              onClick={handleClickToAboutSection}
            >
              <FaUser /> ABOUT
            </li>
            <li
              style={isDark ? { color: "white" } : { color: "black" }}
              className="nav_item"
              onClick={handleClickToProjectSection}
            >
              <FaProjectDiagram /> PROJECT
            </li>
            <li
              style={isDark ? { color: "white" } : { color: "black" }}
              className="nav_item"
              onClick={handleClickToSkillsSection}
            >
              <FaThList /> SKILL
            </li>
          </ul>
        </nav>
        <button
          onClick={handleChangeDarkMode}
          className="change_mode"
          style={
            isDark
              ? { backgroundColor: "#1d2430" }
              : { backgroundColor: "transparent" }
          }
        >
          {isDark ? "🌝" : "🌑"}
        </button>
      </div>
      {/* end navbar */}
      <section id="home" style={{ backgroundImage: "url(" + banner + ")" }}>
        <div className="hello_item">
          <h1>Hello,</h1>
          <p>
            I'm <span>THAI NGOC LE DUY</span>
          </p>
          <ul className="social_links">
            <li className="social_item">
              <a
                href="https://www.facebook.com/tnld22/"
                className="social_item"
              >
                <FaFacebook />
              </a>
            </li>
            <li className="social_item">
              <a
                href="https://github.com/ThaiNgocLeDuy"
                className="social_item"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </section>
      {/* end section home */}
      <div className="mask" ref={aboutRef}></div>
      <section id="about">
        <div className="my_image">
          <div className="wrapper_image">
            {isDark ? (
              <img src={avatar} alt="about" className="image" />
            ) : (
              <img src={aboutimage} alt="about" className="image" />
            )}
          </div>
        </div>
        <div className="my_summary">
          <div
            className="summary"
            style={
              isDark
                ? { backgroundColor: "#1d2430", color: "white" }
                : { backgroundColor: "white", color: "black" }
            }
          >
            <ul>
              <li>
                Hi, my name is Thai Ngoc Le Duy. I'm from Ho Chi Minh city.
              </li>
              <li>
                I studied at Nong Lam University from 2017-2021 majoring in
                Information Technology
              </li>
              <li>
                I am considering a team-player because I like to help other and
                tend to work well within groups.
              </li>
              <li>
                Learning new languages and technologies are what I am passionate
                about.
              </li>
              <li>
                Be a motivated, adaptive and responsible IT student, I am
                looking for a IT position to develop my technical and
                professional skills learned in the university and then become a
                creative and independent IT.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="mask" ref={projectRef}></div>
      <section
        id="project"
        style={isDark ? { color: "white" } : { color: "black" }}
      >
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
                  <img
                    src="https://wiki.matbao.net/wp-content/uploads/2019/09/github-la-gi-1-1200x700.jpg"
                    alt="profile one"
                  />
                </div>
                <div className="details">
                  <h2>
                    Project ABC
                    <br />
                    <span className="job-title">
                      <a href="/">
                        <FaGithubSquare />
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
                  <img
                    src="https://wiki.matbao.net/wp-content/uploads/2019/09/github-la-gi-1-1200x700.jpg"
                    alt="profile one"
                  />
                </div>
                <div className="details">
                  <h2>
                    Project ABC
                    <br />
                    <span className="job-title">
                      <a href="/">
                        <FaGithubSquare />
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
                  <img
                    src="https://wiki.matbao.net/wp-content/uploads/2019/09/github-la-gi-1-1200x700.jpg"
                    alt="profile one"
                  />
                </div>
                <div className="details">
                  <h2>
                    Project ABC
                    <br />
                    <span className="job-title">
                      <a href="/">
                        <FaGithubSquare />
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
                  <img
                    src="https://wiki.matbao.net/wp-content/uploads/2019/09/github-la-gi-1-1200x700.jpg"
                    alt="profile one"
                  />
                </div>
                <div className="details">
                  <h2>
                    Project ABC
                    <br />
                    <span className="job-title">
                      <a href="/">
                        <FaGithubSquare />
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
      <div className="mask" ref={skillsRef}></div>
      <section
        id="skills"
        style={isDark ? { color: "white" } : { color: "black" }}
      >
        <div className="head_skills">
          <h1>💻💻💻</h1>
          <h2>Skills ⊶ Technologies </h2>
          <div className="super_skills">
            <ul>
              <li
                className="one_skill"
                style={
                  isDark
                    ? { backgroundColor: "#1d2430" }
                    : { backgroundColor: "white" }
                }
              >
                <span>
                  <TiTick />
                </span>
                <SiHtml5 /> HTML
              </li>
              <li
                className="one_skill"
                style={
                  isDark
                    ? { backgroundColor: "#1d2430" }
                    : { backgroundColor: "white" }
                }
              >
                <span>
                  <TiTick />
                </span>
                <SiCss3 /> CSS
              </li>
              <li
                className="one_skill"
                style={
                  isDark
                    ? { backgroundColor: "#1d2430" }
                    : { backgroundColor: "white" }
                }
              >
                <span>
                  <TiTick />
                </span>
                <SiJavascript /> JAVASCRIPT
              </li>
              <li
                className="one_skill"
                style={
                  isDark
                    ? { backgroundColor: "#1d2430" }
                    : { backgroundColor: "white" }
                }
              >
                <span>
                  <TiTick />
                </span>
                <SiReact /> REACTJS
              </li>
              <li
                className="one_skill"
                style={
                  isDark
                    ? { backgroundColor: "#1d2430" }
                    : { backgroundColor: "white" }
                }
              >
                <span>
                  <TiTick />
                </span>
                <SiJava /> JAVA
              </li>
              <li
                className="one_skill"
                style={
                  isDark
                    ? { backgroundColor: "#1d2430" }
                    : { backgroundColor: "white" }
                }
              >
                <span>
                  <TiTick />
                </span>
                <SiSpring /> SPRING FRAMEWORK
              </li>
              <li
                className="one_skill"
                style={
                  isDark
                    ? { backgroundColor: "#1d2430" }
                    : { backgroundColor: "white" }
                }
              >
                <span>
                  <TiTick />
                </span>
                <SiMysql /> MYSQL
              </li>
              <li
                className="one_skill"
                style={
                  isDark
                    ? { backgroundColor: "#1d2430" }
                    : { backgroundColor: "white" }
                }
              >
                <span>
                  <TiTick />
                </span>
                <SiMongodb /> MONGODB
              </li>
            </ul>
          </div>
        </div>
      </section>
      <footer style={isDark ? { backgroundColor: "#1d2430" } : {}}>
        <a
          style={isDark ? { color: "white" } : { color: "black" }}
          href="https://www.facebook.com/tnld22/"
          className="contact_flin"
        >
          <FaFacebook />
        </a>
        <a
          style={isDark ? { color: "white" } : { color: "black" }}
          href="thaingocleduy@gmail.com"
          className="contact_flin"
        >
          <SiGmail /> thaingocleduy@gmail.com
        </a>
        <a
          style={isDark ? { color: "white" } : { color: "black" }}
          href="https://github.com/ThaiNgocLeDuy"
          className="contact_flin"
        >
          <FaGithub />
        </a>
      </footer>
    </div>
  );
}

export default App;
