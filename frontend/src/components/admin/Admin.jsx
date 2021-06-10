import React, { Fragment, useState } from "react";
import { Container, Tabs, Tab, Form, Button, Row, Col } from "react-bootstrap";
import RegisterUsers from "./RegisterUsers";
import TimeLog from "./TimeLog";
import AdminAnimation from "../animations/admin/AdminAnimation";
import Swal from "sweetalert2";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const confirmedMail = "admin@carparking.com";
  const confirmedPassword = "admin";

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === confirmedMail && password === confirmedPassword) {
      setVisible(true);
    } else {
      Swal.fire({
        text: "invalid or empty credentials",
        icon: "error",
      });
    }
  };

  return (
    <Fragment>
      <Container>
        {visible ? (
          <Tabs defaultActiveKey="user" id="uncontrolled-tab-example">
            <Tab eventKey="user" title="Users">
              <RegisterUsers />
            </Tab>
            <Tab eventKey="timelog" title="Time Logs">
              <TimeLog />
            </Tab>
          </Tabs>
        ) : (
          <>
            <Row>
              <Col>
                <AdminAnimation />
              </Col>
              <Col xs="12" md="12" sm="12" lg="4" xl="4">
                <Form className="mt-2" onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Admin Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter admin email"
                      size="sm"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      size="sm"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    className="btn btn-block p-1"
                  >
                    Log In
                  </Button>
                </Form>
              </Col>
            </Row>
            <br />
            <br />
            <br />
          </>
        )}
      </Container>
    </Fragment>
  );
};

export default Admin;
