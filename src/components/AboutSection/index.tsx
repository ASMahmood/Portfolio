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
            My name is Abdul Mahmood, and I'm a London-based, MERN stack, web
            developer. While
          </p>
        </Col>
        <Col xs={6} className="skillHalf pt-5">
          SKILLS HERE
        </Col>
      </Row>
    </Container>
  );
}
export default AboutSection;
