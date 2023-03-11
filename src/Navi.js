import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./index.css";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Routess from "./Routess";
import {
  FaBars,
  FaClosedCaptioning,
  FaContao,
  FaFileContract,
  FaHamburger,
  FaHome,
  FaPersonBooth,
  FaPhone,
  FaTimes,
  FaUser,
  FaWarehouse,
} from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
import React, { useState } from "react";
import { Link } from "react-scroll";

function Navi() {
  const [style, setStyle] = useState("links1");
  const [value, setValue] = useState(<BiMenuAltLeft />);
  const [icon, setIcon] = useState("iconhead");
  function myFunction() {
    // if (style == "myLinks") {
    //   setStyle("cont2");
    //   setValue(<FaTimes />);
    // } else {
    //   setStyle("myLinks");
    //   setValue(<FaBars />);
    // }
    setStyle("lin");
    setValue("");
  }
  function myFunction2() {
    setStyle("links1");
    setValue(<BiMenuAltLeft />);
  }
  function closeFunction() {
    setStyle("links1");
    setValue(<BiMenuAltLeft />);
  }

  return (
    <div>
      <div>
        <div className="links1">
          <div className={style}>
            <div className="closebutton" onClick={closeFunction}>
              <p className="iconhead">
                <FaTimes />
              </p>
            </div>
            <NavLink to="/" className="links" onClick={myFunction2}>
              <FaHome />
              <p className="val">Home</p>
            </NavLink>
            <NavLink to="/about" className="links" onClick={myFunction2}>
              <FaUser />
              <p className="val">About</p>
            </NavLink>
            <NavLink to="/work" className="links" onClick={myFunction2}>
              <FaWarehouse />
              <p className="val">Projects</p>
            </NavLink>
            <NavLink to="/contact" className="links" onClick={myFunction2}>
              <FaPhone />
              <p className="val">Contact</p>
            </NavLink>
          </div>
        </div>

        <div className="icon" id="iconsid" onClick={myFunction}>
          <h3 className={icon}>{value}</h3>
        </div>
      </div>
    </div>
  );
}

export default Navi;
