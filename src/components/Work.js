import React, { useRef, useState } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { BiCodeBlock } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";

import Modal from "react-bootstrap/Modal";
import { NavLink } from "react-router-dom";

function Contact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="workPage">
      <Container>
        <div style={{ textAlign: "center", marginBottom: "10vh" }}>
          <BiCodeBlock style={{ fontSize: "5vh" }} />

          <p>
            View some significant project that highlight my technical expertise
          </p>
        </div>
        <Row>
          <Col md={4}>
            <div onClick={handleShow} className="cards"></div>
            <Modal
              size="lg"
              show={show}
              onHide={handleClose}
              className="modall"
            >
              <Modal.Header closeButton>
                <Modal.Title>Sparked Innovations</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                A full stack web application for company called "Sparked
                Innovations". This project was built using Jquery, HTML, CSS and
                so on, this project highlights their services and helps
                establish their brand. The client was exceptionally impressed
                with the results this project has brought.
              </Modal.Body>
              <Modal.Footer>
                <a href="https://shop.sparkedinnovations.com/" target="_blank">
                  <Button>
                    <CgWebsite style={{ fontSize: "5vh" }} /> Live Project
                  </Button>
                </a>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>

        <div className="skillss">
          <NavLink to="/contact" className="navvi">
            <button className="button3">GET IN TOUCH</button>
          </NavLink>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
