import React, { Fragment } from "react";
import { Jumbotron, Row, Col, Container } from "react-bootstrap";
import DashboardCard from "./DashboardCard";
import ParkingAnimation from "../animations/parking/ParkingAnimation";

const Home = () => {
  return (
    <Fragment>
      <Container>
        <Jumbotron className="p-2 bg-white my-3">
          <h1 className="text-center mt-1" style={{ color: "gray" }}>
            DashBoard
          </h1>
        </Jumbotron>
        <Jumbotron className="my-3 bg-white ">
          <Row>
            <Col>
              <DashboardCard
                background="bg-info"
                value="20"
                title="Total Space"
              />
            </Col>
            <Col>
              <DashboardCard
                background="bg-success"
                value="10"
                title="Available Space"
              />
            </Col>
            <Col>
              <DashboardCard
                background="bg-warning"
                value="10"
                title="Car Parked"
              />
            </Col>
          </Row>
        </Jumbotron>
        <Jumbotron className="bg-white">
          <Row>
            <Col>
              <h3 style={{ color: "gray" }}>
                <q>Park Where You are , Not Where You Are'nt</q>
              </h3>
            </Col>
            <Col>
              <ParkingAnimation />
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    </Fragment>
  );
};

export default Home;
