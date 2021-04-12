import React from "react";
import { Container, Row, Col, CardDeck, Card, Button } from "react-bootstrap";
import "./style.css";

function AboutSection() {
  return (
    <Container className="w-100 h-100">
      <Row className="h-100">
        <Col xs={6} className="bioHalf pt-5">
          <p>Good morning and/or evening! </p>
          <p>
            My name is Abdul Mahmood, and I'm a
            <strong> London-based, MERN stack, web developer</strong>. While I
            may be living in London, I am fully ready for
            <strong> remote working.</strong>
          </p>
          <p></p>
        </Col>
        <Col xs={6} className="skillHalf pt-5">
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
                <li>HTML5</li>
                <li>CSS</li>
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
                <li>Instant Coffee</li>
              </ul>
            </Col>
            <Col xs={4}>
              <p>
                <strong>Skills - Backend</strong>
              </p>
              <ul>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS</li>
                <li>SQL</li>
              </ul>
            </Col>
            <Col xs={4}>
              <p>
                <strong>Skills - Frontend</strong>
              </p>
              <ul>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS</li>
                <li>SQL</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default AboutSection;
