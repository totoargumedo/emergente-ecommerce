import React from "react";

// LIBRERIAS
import "./Home.css";
import logo from "./logo.svg";

const Home = () => {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>I don´t know what i´m doing!!</p>
      <a
        className="App-link"
        href="https://emergentex.000webhostapp.com/index.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Go to Site
      </a>
    </div>
  );
};

export default Home;
