import { BackTop } from "antd";
import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Intro from "./components/Introduction/Intro";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Intro />
      <Skills />
      <Projects />
      <BackTop />
    </>
  );
};

export default App;
