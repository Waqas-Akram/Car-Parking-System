import React, { Fragment } from "react";
import AboutCard from "./AboutCard";
import { Row, Col, Container, Jumbotron } from "react-bootstrap";
import AboutArray from "./AboutArray";
import AboutAnime from "../animations/about/AboutAnime";

const About = () => {
  return (
    <Fragment>
      <Container>
        <Jumbotron className="p-2 bg-white my-3">
          <h1 className="text-center mt-1" style={{ color: "gray" }}>
            About Us
          </h1>
        </Jumbotron>
        <Jumbotron className="p-2 bg-white my-3">
          <Row>
            <Col xs="12" lg="7" md="7" sm="7">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </Col>
            <Col xs="12" lg="4" md="4" sm="4">
              <center>
                <AboutAnime />
              </center>
            </Col>
          </Row>
        </Jumbotron>
        <Jumbotron className="p-2 bg-white">
          <h1 className="text-center mt-1" style={{ color: "gray" }}>
            Our Team Members
          </h1>
        </Jumbotron>
        <center>
          <Row>
            {AboutArray.map((profile_card) => {
              return (
                <Col xs="12" md="12" sm="12" lg="4" key={profile_card.id}>
                  <AboutCard profile_card={profile_card} />
                </Col>
              );
            })}
          </Row>
        </center>
      </Container>
    </Fragment>
  );
};

export default About;
