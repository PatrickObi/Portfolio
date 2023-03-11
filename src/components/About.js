import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Navi from "../Navi";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Images from "../images/MEE.JPEG";
import Row from "react-bootstrap/Row";
import { NavLink } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Images2 from "../images/sparkedinnovation.png";
import Work from "./Work";
import { Link } from "react-scroll";
import {
  FaDownload,
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaPersonBooth,
} from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { SiExpress, SiMongodb, SiGraphql, SiHeroku } from "react-icons/si";
import { IoIosPerson } from "react-icons/io";

function About() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("resumee.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume.pdf";
        alink.click();
      });
    });
  };

  const [key, setKey] = useState("about");
  function tabsbutton() {
    setKey("skills");
  }
  function tabsbutton2() {
    setKey("experience");
  }
  return (
    <div name="about" className="aboutpage">
      <Container>
        <div style={{ textAlign: "center", marginBottom: "10vh" }}>
          <IoIosPerson style={{ fontSize: "5vh" }} />
        </div>

        <div>
          <Tabs
            defaultActiveKey={key}
            id="fill-tab-example"
            className="cont"
            fill
          >
            <Tab eventKey="about" title="ABOUT" className="about">
              <Container>
                <Row>
                  <Col className="imgcol">
                    <img src={Images} alt="" className="image" />
                  </Col>
                  <Col className="colss" md={8}>
                    <h2>
                      <p className="name">Patrick Obi</p> - Full Stack Developer
                    </h2>
                    <br />
                    <p className="fits">
                      I am a Full-stack developer with over one years of
                      experience in the industry. Throughout my career, I have
                      developed a passion for front-end and back-end
                      development, and I am dedicated to continuously improving
                      my skills and knowledge in this area. I take great pride
                      in my ability to problem solve and develop web-apps, which
                      has allowed me to work work on a variety of projects. I am
                      also known for my great listening skills, communication
                      skills and my ability to work well in a team, which
                      enables me to work collaboratively with others. In
                      addition to my professional experience, I hold a computer
                      science degree from <b>Carleton university</b>.I am always
                      eager to learn and take on new challenges, which is why I
                      enjoy participating in leetcode weekly challenges,
                      hackathons and any challenges I can get my hands on. When
                      I am not working or studying, you can find me coding,
                      playing chess, playing basketball, spending time with my
                      family, or volunteering in my community. Thank you for
                      taking the time to get to know me. I look forward to
                      connecting with you and exploring opportunities to work
                      together.
                    </p>
                    <button onClick={onButtonClick} className="button2">
                      Download CV <FaDownload />
                    </button>
                  </Col>
                </Row>
              </Container>
            </Tab>
            <Tab
              eventKey="skills"
              title="SKILLS"
              className="about"
              onClick={tabsbutton}
            >
              <Container>
                <Row>
                  <Col>
                    <h1 className="head2">FRONT END </h1>
                    <ul>
                      <li>
                        <p>
                          <FaHtml5 className="icons" /> HTML5
                        </p>
                      </li>
                      <li>
                        <p>
                          <FaCss3 className="icons" /> Css
                        </p>
                      </li>
                      <li>
                        <p>
                          <DiJqueryLogo className="icons" /> jQuery
                        </p>
                      </li>
                      <li>
                        <p>
                          <FaBootstrap className="icons" /> Bootstrap
                        </p>
                      </li>
                      <li>
                        <p>
                          <FaReact className="icons" /> React
                        </p>
                      </li>
                    </ul>
                  </Col>
                  <Col>
                    <h1 className="head2">BACK END </h1>
                    <ul>
                      <li>
                        <p>
                          <FaNodeJs className="icons" /> Node.js
                        </p>
                      </li>
                      <li>
                        <p>
                          <SiExpress className="icons" /> Express.js
                        </p>
                      </li>
                      <li>
                        <p>
                          <SiMongodb className="icons" /> MongoDb
                        </p>
                      </li>
                      <li>
                        <p>
                          <SiGraphql className="icons" /> GraphQL
                        </p>
                      </li>
                      <li>
                        <p>
                          <SiHeroku className="icons" /> Heroku
                        </p>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </Tab>
            <Tab
              eventKey="work"
              title="WORK"
              className="about"
              onClick={tabsbutton2}
            >
              <Container className="mainwork">
                <Row>
                  <Col className="works" xs={9}>
                    <h1>Full Stack Developer</h1>
                    <p>Sparked Innovations, May 2022 - Present</p>
                  </Col>
                  <Col xs={3}>
                    <img
                      src={Images2}
                      alt="sparkedInnovation"
                      className="worksimg"
                    />
                  </Col>
                </Row>
                <div className="skillss">
                  <NavLink to="/work" className="navvi">
                    <button className="button3">VIEW PROJECTS</button>
                  </NavLink>
                </div>
              </Container>
            </Tab>
          </Tabs>
        </div>
      </Container>
    </div>
  );
}

export default About;
