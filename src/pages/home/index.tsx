import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./home.css";

export default function HomePage() {
  return (
    <Container id="homepage">
      <Row>
        <Col xs={12} className="d-flex align-items-center p-2">
          <img
            src="https://res.cloudinary.com/dhmw620tl/image/upload/v1613076291/benchmark3/jgzt2ecwelboqfq8uelx.jpg"
            alt="profile"
            className="profilePic mr-3"
          />
          <div className="titleBox mx-3 d-flex flex-column align-items-start">
            <h1>Abdul Mahmood</h1>
            <h5>Junior Backend Dev w/ Frontend Knowledge</h5>
          </div>
          <div className="linksBox ml-auto mr-2 d-flex flex-column justify-content-between align-items-between">
            <FaLinkedinIn />
            <FaGithub />
          </div>
        </Col>
      </Row>
      <Row className="mt-5 h-75">
        <Col xs={12} className="position-relative">
          <div className="aboutSection">HI</div>
          <div className="projectsSection">HELLO</div>
          <div className="teamProjectsSection">BONJOUR</div>
        </Col>
      </Row>
    </Container>
  );
}
