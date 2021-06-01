import React, { Fragment, useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      message: "",
      email: "",
      subject: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is Required"),
      message: Yup.string().required("You cannot send an empty message"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
      subject: Yup.string().required("Subject is Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const body = JSON.stringify(values);
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const res = await axios.post("/api/contact/send", body, config);
      setLoading(false);
      if (res.status === 200) {
        Swal.fire({
          text: "Message sent successfuly",
          icon: "success",
        });
      }

      resetForm();
    },
  });
  return (
    <Fragment>
      <Form className="my-0" onSubmit={formik.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            placeholder="Enter subject of your message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
            name="subject"
          />
          {formik.touched.subject && formik.errors.subject ? (
            <div className="text-danger ml-2">{formik.errors.subject}</div>
          ) : null}
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            placeholder="Your Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            name="name"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-danger ml-2">{formik.errors.name}</div>
          ) : null}
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            size="sm"
            type="email"
            placeholder="Enter email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            name="email"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-danger ml-2">{formik.errors.email}</div>
          ) : null}
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Message</Form.Label>
          <Form.Control
            size="sm"
            as="textarea"
            rows="3"
            placeholder="Your Message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            name="message"
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="text-danger ml-2">{formik.errors.message}</div>
          ) : null}
        </Form.Group>
        <center>
          <Button
            style={{ backgroundColor: "gray" }}
            type="submit"
            className="btn-block p-1"
            disabled={loading}
          >
            {loading ? <Spinner animation="border" size="sm" /> : <>Send</>}
          </Button>
        </center>
      </Form>
    </Fragment>
  );
};

export default ContactForm;
