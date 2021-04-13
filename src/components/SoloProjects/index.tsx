import React from "react";
import { Container, Row, Col, CardDeck, Card, Button } from "react-bootstrap";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { soloProject } from "../../types/jsonInterfaces";
import drawGif from "../../images/draw.gif";
import weatherGif from "../../images/weather.gif";
import "./style.css";

function SoloProjects(props: soloProject) {
  console.log(props);
  const previewSelector = (name: string) => {
    switch (name) {
      case "drawGif":
        return drawGif;
      case "weatherApp":
        return weatherGif;
      default:
        return "https://place-hold.it/300x180";
    }
  };

  return (
    <Card bg="none" text="light" className="soloCard">
      <Card.Img
        variant="top"
        className="projectPreview"
        src={previewSelector(props.preview)}
      />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <div className="d-flex flex-column justify-content-between">
          <Card.Text>{props.description}</Card.Text>
          <div className="d-flex justify-content-between">
            <Button
              onClick={() => window.open(props.frontendLink, "_blank")}
              variant="light"
              className="projectLinks"
            >
              <FaGithub className="mr-1" /> Frontend
            </Button>
            <Button
              onClick={() => window.open(props.hostedLink, "_blank")}
              variant="outline-light"
              className="projectLinks px-2"
            >
              Live
            </Button>
            <Button
              onClick={() => window.open(props.backendLink, "_blank")}
              variant="light"
              className="projectLinks"
            >
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
