import React from "react";
import { Container, Row, Col, CardDeck, Card, Button } from "react-bootstrap";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { reduxStore } from "../../types/reduxInterfaces";
import { changeTabDispatch } from "../../types/dispatchInterfaces";
import profilePic from "../../profilePic.jpeg";
import "./home.css";
import AboutSection from "../../components/AboutSection";

type homePageType = reduxStore & changeTabDispatch;

const mapStateToProps = (state: reduxStore) => state;

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeTab: (tab: number) =>
    dispatch({
      type: "CHANGE_TAB",
      payload: tab,
    }),
});

function HomePage(props: homePageType) {
  return (
    <Container id="homepage">
      <Row>
        <Col xs={12} className="d-flex align-items-center p-2">
          <img src={profilePic} alt="profile" className="profilePic mr-3" />
          <div className="titleBox mx-3 d-flex flex-column align-items-start">
            <h1>Abdul Mahmood</h1>
            <h5>Junior Backend Dev w/ Frontend Knowledge</h5>
          </div>
          <div className="linksBox ml-auto mr-2 d-flex flex-column justify-content-between align-items-between">
            <div className="socialMediaLink">
              <FaLinkedinIn /> /abdul-samad-mahmood/
            </div>
            <div className="socialMediaLink">
              <FaGithub /> /ASMahmood
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mt-5 h-75">
        <Col xs={12} className="position-relative">
          <div
            onClick={() => props.changeTab(0)}
            className={
              props.activeTab === 0 ? "aboutSection activeTab" : "aboutSection"
            }
          >
            {props.activeTab !== 0 && "HELLO"}
            <AboutSection />
          </div>
          <div
            onClick={() => props.changeTab(1)}
            className={
              props.activeTab === 1
                ? "projectsSection  activeTab"
                : "projectsSection"
            }
          >
            {props.activeTab !== 1 && "HOLA"}
            <CardDeck className="p-4">
              <Card className="soloCard">
                <Card.Img
                  variant="top"
                  className="projectPreview"
                  src="https://place-hold.it/300x180"
                />
                <Card.Body>
                  <Card.Title>DRAW</Card.Title>
                  <Card.Text>
                    My Solo Capstone! This is a whiteboard app, with
                    file-sharing capabilities, wherein companies can
                    collaborate, discuss and draw images in real-time.
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="light" className="projectLinks">
                      <FaGithub className="mr-1" /> Frontend
                    </Button>
                    <Button variant="dark" className="projectLinks">
                      Live
                    </Button>
                    <Button variant="light" className="projectLinks">
                      <FaGithub className="mr-1" /> Backend
                    </Button>
                  </div>
                </Card.Body>
                <Card.Footer>
                  <small>Last updated Today</small>
                </Card.Footer>
              </Card>
              <Card className="soloCard">
                <Card.Img
                  variant="top"
                  className="projectPreview"
                  src="https://place-hold.it/300x180"
                />
                <Card.Body>
                  <Card.Title>Weather App</Card.Title>
                  <Card.Text>
                    My first TypeScript project! An app that provides weather
                    predications for any location, up to a week in advance.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small>Last updated 26 Feb 2021</small>
                </Card.Footer>
              </Card>
              <Card className="soloCard">
                <Card.Img
                  variant="top"
                  className="projectPreview"
                  src="https://place-hold.it/300x180"
                />
                <Card.Body>
                  <Card.Title>Amazon Clone</Card.Title>
                  <Card.Text>PLACEHOLDER</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small>Last updated 22 Jan 2021</small>
                </Card.Footer>
              </Card>
            </CardDeck>
          </div>
          <div
            onClick={() => props.changeTab(2)}
            className={
              props.activeTab === 2
                ? "teamProjectsSection  activeTab"
                : "teamProjectsSection"
            }
          >
            {props.activeTab !== 2 && "BONJOUR"}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
