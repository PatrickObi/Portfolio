import React, { Component } from "react";
import Images from "../images/MEE.JPEG";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Typical from "react-typical";
import { FaArrowDown } from "react-icons/fa";
import Contact from "./Contact";
import Navi from "../Navi";
import About from "./About";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className="homes">
      <>
        <div className="mytext">
          <div className="home">
            <img src={Images} alt="" className="image" />
          </div>
          <div>
            <h1 className="typhead">
              I'M{" "}
              <Typical
                steps={["A FULL STACK DEVELOPER", 3000, "A WEB DESIGNER", 3000]}
                loop={Infinity}
                wrapper="b"
                className="typical"
              />
            </h1>
            <h1 className="head1">PATRICK OBI</h1>

            <NavLink to="/about" className="notlink">
              <button className="buttonabout">ABOUT ME</button>
            </NavLink>
          </div>
        </div>
      </>
    </div>
  );
}

export default Home;
