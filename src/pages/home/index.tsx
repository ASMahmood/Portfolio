import React from "react";
import { Container, Row, Col, CardDeck, Card, Button } from "react-bootstrap";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { reduxStore } from "../../types/reduxInterfaces";
import { changeTabDispatch } from "../../types/dispatchInterfaces";
import profilePic from "../../profilePic.jpeg";
import "./home.css";
import soloArray from "../../files/soloProjects.json";
import teamArray from "../../files/teamProjects.json";
import AboutSection from "../../components/AboutSection";
import SoloProject from "../../components/SoloProjects";
import TeamProject from "../../components/TeamProjects";

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
              {soloArray.map((project) => (
                <SoloProject {...project} />
              ))}
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
            <CardDeck className="p-4">
              {teamArray.map((project) => (
                <TeamProject {...project} />
              ))}
            </CardDeck>
          </div>
          <div
            onClick={() => props.changeTab(3)}
            className={
              props.activeTab === 3
                ? "contactSection  activeTab"
                : "contactSection"
            }
          >
            {props.activeTab !== 3 && "GUTEN TAG"}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
