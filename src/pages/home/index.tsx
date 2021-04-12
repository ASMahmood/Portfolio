import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./home.css";

export default function HomePage() {
  return (
    <Container id="homepage">
      <Row>
        <Col xs={12}>
          <h1>Abdul Mahmood</h1>
        </Col>
      </Row>
    </Container>
  );
}
