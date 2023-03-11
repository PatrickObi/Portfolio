import Navi from "./Navi";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import "./App.css";
import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Routess from "./Routess";

function App() {
  return (
    <div className="App">
      <Navi></Navi>
    </div>
  );
}

export default App;
