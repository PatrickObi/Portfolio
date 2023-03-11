import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import emailjs from "emailjs-com";
import Navi from "../Navi";
import {
  FaUser,
  FaPhone,
  FaInstagram,
  FaLinkedin,
  FaYahoo,
  FaGithub,
  FaTelegramPlane,
} from "react-icons/fa";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    if (name == "" || message == "" || email == "") {
      alert("Please Complete Form");
    } else {
      emailjs
        .sendForm(
          "service_agc25nc",
          "template_kv963qv",
          e.target,
          "sCITUSZSIG5scCosG"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      alert("Thank you");
      setName("");
      setMessage("");
      setEmail("");
    }
  }

  return (
    <div name="contact" className="contactPage">
      <Container>
        <div className="contactinfo">
          <div className="texts">
            <h3 className="head">
              GET <p className="para">IN TOUCH</p>
            </h3>
            <p className="para2">
              I’M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK
            </p>
          </div>

          <Row>
            <Col className="col1">
              <div className="col1s">
                Phone
                <p>
                  <FaPhone /> 437-227-3955
                </p>
              </div>
              <div className="col1s">
                Email
                <p>
                  <FaYahoo />
                  patrickobi19@yahoo.com
                </p>
              </div>

              <div className="col1s">
                Social Profiles
                <div>
                  <a href="https://www.instagram.com/stephen_obi1/">
                    <div className="socials">
                      <FaInstagram className="instagram" />
                    </div>
                  </a>

                  <a href="https://www.linkedin.com/in/ifeanyichukwu-obi-86585a1b1/">
                    <div className="socials">
                      <FaLinkedin className="linkedin" />
                    </div>
                  </a>
                  <a href="https://github.com/PatrickObi">
                    <div className="socials">
                      <FaGithub className="github" />
                    </div>
                  </a>
                </div>
              </div>
            </Col>
            <Col sm={8} className="col">
              <p>
                If you have any suggestion, project or even you want to say
                Hello.. please fill out the form below and I will reply you
                shortly.
              </p>
              <Form onSubmit={sendEmail} className="form">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="forms"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    name="email"
                    className="forms"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                </Form.Group>
                <button className="button" type="submit">
                  <FaTelegramPlane />
                  Send Message
                </button>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
