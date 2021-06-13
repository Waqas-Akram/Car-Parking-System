import React, { Fragment, useState, useEffect, useRef } from "react";
import { Table, Row, Col, Jumbotron, Button } from "react-bootstrap";
import TimeLogTable from "./TimeLogTable";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import ReactToPrint from "react-to-print";
import PrintIcon from "@material-ui/icons/Print";

const TimeLog = () => {
  const [reg_data, setRegData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    setInterval(() => getRegData(), 1000);
  }, []);

  const getRegData = async () => {
    const res = await axios.get("/api/sqlconnection/timestamps");
    console.log(res.data);
    setRegData(res.data);
  };

  const componentRef = useRef();
  return (
    <Fragment>
      <Row>
        <Col xs="12" lg="4" md="12" sm="12">
          <div className="input-group md-form form-sm form-1 pl-0 my-5">
            <div className="input-group-prepend">
              <span
                className="input-group-text bg-info lighten-3 p-2"
                id="basic-text1"
              >
                <SearchIcon className="text-white" />
              </span>
            </div>
            <input
              className="form-control my-0 py-1"
              type="text"
              placeholder="Search by rfid "
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </Col>
        <Col></Col>
      </Row>
      <Jumbotron className="p-2 bg-white my-3">
        <h1 className="text-center mt-1" style={{ color: "gray" }}>
          Time Stamps
        </h1>
      </Jumbotron>
      <Row>
        <Col></Col>
        <Col lg="2" xs="12" md="2" sm="4">
          <ReactToPrint
            trigger={() => (
              <Button className="btn btn-info my-1 ">
                <PrintIcon />
              </Button>
            )}
            content={() => componentRef.current}
          />
        </Col>
      </Row>
      <div ref={componentRef}>
        <p
          style={{ color: "gray", position: "relative", bottom: "-30px" }}
          className="my-0 text-center p-0"
        >
          Car History
        </p>
        <Table size="sm" responsive className="my-5">
          <thead>
            <tr>
              <th>#</th>
              <th>RFID Number</th>
              <th>Time In</th>
              <th>Time Out</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {reg_data
              .filter((registration) => {
                if (search === "") {
                  return registration;
                } else if (
                  registration.RFID.toLowerCase().includes(search.toLowerCase())
                ) {
                  return registration;
                }
              })
              .map((registration) => {
                return (
                  <TimeLogTable
                    key={registration.id}
                    id={registration.id}
                    rfid={registration.RFID}
                    TimeIn={registration.TimeIn}
                    Status={registration.Status}
                    TimeOut={registration.TimeOut}
                  />
                );
              })}
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
};

export default TimeLog;
