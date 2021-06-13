import React, { Fragment, useState, useEffect } from "react";
import { Form, Button, Spinner, Jumbotron } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateUser = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [defaultUser, setDefaultUser] = useState(null);

  const formik = useFormik({
    initialValues: {
      Name: "",
      RFID: "",
    },
    validationSchema: Yup.object({
      Name: Yup.string().required("Name is Required"),
      RFID: Yup.string().required("You cannot send an empty message"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const body = JSON.stringify(values);
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const res = await axios.put(
        `/api/sqlconnection/registrations/update/${id}`,
        body,
        config
      );
      setLoading(false);
      if (res.status === 200) {
        Swal.fire({
          text: res.data.msg,
          icon: "success",
        });
      }

      resetForm();
    },
  });

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const res = await axios.get(`/api/sqlconnection/registrations/${id}`);
    setDefaultUser(res.data);
  };
  return defaultUser === null ? (
    <Spinner animation="border" size="lg" />
  ) : (
    <Fragment>
      <Jumbotron className="bg-white p-1">
        <p className="text-center" style={{ color: "gray" }}>
          Update Member
        </p>
      </Jumbotron>
      <Form className="my-0" onSubmit={formik.handleSubmit}>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            placeholder="Your Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="Name"
            defaultValue={defaultUser.Name}
          />
          {formik.touched.Name && formik.errors.Name ? (
            <div className="text-danger ml-2">{formik.errors.Name}</div>
          ) : null}
        </Form.Group>
        <Form.Group controlId="formBasicRFID">
          <Form.Label>RFID Number</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            placeholder="RFID"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            // value={formik.values.RFID}
            name="RFID"
            defaultValue={defaultUser.RFID}
          />
          {formik.touched.RFID && formik.errors.RFID ? (
            <div className="text-danger ml-2">{formik.errors.RFID}</div>
          ) : null}
        </Form.Group>
        <center>
          <Button
            style={{ backgroundColor: "gray" }}
            type="submit"
            className="btn-block p-1"
            disabled={loading}
          >
            {loading ? <Spinner animation="border" size="sm" /> : <>Update</>}
          </Button>
        </center>
      </Form>
    </Fragment>
  );
};

export default UpdateUser;
