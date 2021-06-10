import React, { Fragment, useState, useEffect } from "react";
import { Jumbotron, Row, Col, Container, Table } from "react-bootstrap";
import ParkingAnimation from "../animations/parking/ParkingAnimation";
import axios from "axios";

const Home = () => {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    setInterval(() => getSlotsData(), 100);
  }, []);

  const getSlotsData = async () => {
    const res = await axios.get("/api/sqlconnection/slots");
    console.log(res.data);
    setSlots(res.data);
  };
  return (
    <Fragment>
      <Container>
        <Jumbotron className="p-2 bg-white mt-3">
          <h1 className="text-center mt-1" style={{ color: "gray" }}>
            Slots
          </h1>
        </Jumbotron>
        <center>
          <Table size="sm" responsive>
            <thead>
              <tr>
                <th>Parking Slot</th>
                <th>Occupancy indicator</th>
                <th>Occupancy Message</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>P1</td>
                <td>
                  {slots.Slot1 === "0" ? (
                    <>
                      <div
                        className="circle"
                        style={{ background: "red" }}
                      ></div>
                      <div
                        className="circle"
                        style={{ background: "rgb(168, 247, 191)" }}
                      ></div>
                    </>
                  ) : (
                    <>
                      <div
                        className="circle"
                        style={{ background: "rgb(247, 175, 175)" }}
                      ></div>
                      <div
                        className="circle"
                        style={{ background: "green" }}
                      ></div>
                    </>
                  )}
                </td>
                <td>{slots.Slot1 === "0" ? <>occupied</> : <>vacant</>}</td>
              </tr>
              <tr>
                <td>P2</td>
                <td>
                  {slots.Slot2 === "0" ? (
                    <>
                      <div
                        className="circle"
                        style={{ background: "red" }}
                      ></div>
                      <div
                        className="circle"
                        style={{ background: "rgb(168, 247, 191)" }}
                      ></div>
                    </>
                  ) : (
                    <>
                      <div
                        className="circle"
                        style={{ background: "rgb(247, 175, 175)" }}
                      ></div>
                      <div
                        className="circle"
                        style={{ background: "green" }}
                      ></div>
                    </>
                  )}
                </td>
                <td>{slots.Slot2 === "0" ? <>occupied</> : <>vacant</>}</td>
              </tr>
              <tr>
                <td>P3</td>
                <td>
                  {slots.Slot3 === "0" ? (
                    <>
                      <div
                        className="circle"
                        style={{ background: "red" }}
                      ></div>
                      <div
                        className="circle"
                        style={{ background: "rgb(168, 247, 191)" }}
                      ></div>
                    </>
                  ) : (
                    <>
                      <div
                        className="circle"
                        style={{ background: "rgb(247, 175, 175)" }}
                      ></div>
                      <div
                        className="circle"
                        style={{ background: "green" }}
                      ></div>
                    </>
                  )}
                </td>
                <td>{slots.Slot3 === "0" ? <>occupied</> : <>vacant</>}</td>
              </tr>
              <tr>
                <td>P4</td>
                <td>
                  {slots.Slot4 === "0" ? (
                    <>
                      <div
                        className="circle"
                        style={{ background: "red" }}
                      ></div>
                      <div
                        className="circle"
                        style={{ background: "rgb(168, 247, 191)" }}
                      ></div>
                    </>
                  ) : (
                    <>
                      <div
                        className="circle"
                        style={{ background: "rgb(247, 175, 175)" }}
                      ></div>
                      <div
                        className="circle"
                        style={{ background: "green" }}
                      ></div>
                    </>
                  )}
                </td>
                <td>{slots.Slot4 === "0" ? <>occupied</> : <>vacant</>}</td>
              </tr>
            </tbody>
          </Table>
        </center>
        <Jumbotron className="bg-white">
          <Row>
            <Col>
              <h3 style={{ color: "gray" }}>
                <q>Park Where You are , Not Where You Are'nt </q>
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
