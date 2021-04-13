import React from "react";
import { Container, Row, Col, CardDeck, Card, Button } from "react-bootstrap";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { soloProject } from "../../types/jsonInterfaces";
import "./style.css";

function SoloProjects(props: soloProject) {
  return (
    <Card bg="none" text="light" className="soloCard">
      <Card.Img variant="top" className="projectPreview" src={props.preview} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <div className="d-flex flex-column justify-content-between">
          <Card.Text>{props.description}</Card.Text>
          <div className="d-flex justify-content-between">
            <Button variant="light" className="projectLinks">
              <FaGithub className="mr-1" /> Frontend
            </Button>
            <Button variant="outline-light" className="projectLinks px-2">
              Live
            </Button>
            <Button variant="light" className="projectLinks">
              <FaGithub className="mr-1" /> Backend
            </Button>
          </div>
        </div>
      </Card.Body>
      <Card.Footer>
        <small>Last updated {props.lastUpdated}</small>
      </Card.Footer>
    </Card>
  );
}
export default SoloProjects;
