import React from "react";
import { Container, Row, Col, CardDeck, Card, Button } from "react-bootstrap";
import "./style.css";

function AboutSection() {
  return (
    <Container className="w-100 h-100">
      <Row className="h-100">
        <Col
          xs={4}
          className="bioHalf d-flex flex-column align-content-center justify-content-center p-5"
        >
          <p>Good morning and/or evening! </p>
          <p>
            I am a<strong> London-based, MERN stack, web developer</strong>, who
            is ready and waiting to work,
            <strong> remotely or local.</strong> Thanks to the rigorous
            curriculum with which the following skills were attained, my rate of
            learning is a point of personal pride.
          </p>
          <p></p>
        </Col>
        <Col
          xs={8}
          className="skillHalf d-flex flex-column align-content-center justify-content-center p-5"
        >
          <Row>
            <Col xs={6}>
              <p>
                <strong>Languages - Human</strong>
              </p>
              <ul>
                <li>English</li>
              </ul>
            </Col>
            <Col xs={6}>
              <p>
                <strong>Languages - Code</strong>
              </p>
              <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>SQL</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <p>
                <strong>Skills - Human</strong>
              </p>
              <ul>
                <li>Pair Programming</li>
                <li>Agile</li>
                <li>SCRUM</li>
                <li>GitHub</li>
                <li>Instant Coffee</li>
              </ul>
            </Col>
            <Col xs={4}>
              <p>
                <strong>Skills - Backend</strong>
              </p>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB & Mongoose</li>
                <li>MySQL & Sequelize</li>
                <li>Passport.js</li>
                <li>OAuth</li>
                <li>socket.io</li>
                <li>multer</li>
                <li>
                  Cookies <small>yum</small>
                </li>
                <li>Test Driven Development via Jest</li>
              </ul>
            </Col>
            <Col xs={4}>
              <p>
                <strong>Skills - Frontend</strong>
              </p>
              <ul>
                <li>React</li>
                <li>React Redux</li>
                <li>React Router Dom</li>
                <li>Hooks</li>
                <li>Bootstrap</li>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default AboutSection;
