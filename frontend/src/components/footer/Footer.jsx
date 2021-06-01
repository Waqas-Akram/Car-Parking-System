import React, { Fragment } from "react";
import "../../styles/footer-style.css";
import ContactForm from "../form/ContactForm";
import { Image } from "react-bootstrap";

const Footer = () => {
  return (
    <Fragment>
      <div className="mt-5 pt-5 pb-5 mb-0 footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xs-12 about-company">
              <center>
                <Image src="/images/icon.png" width="200px" height="200px" />
                <h2 style={{ color: "gray" }}>Car Parking</h2>
              </center>
              <p style={{ color: "gray" }} className="text-center">
                we are passionate to provide a system of automatic car parking.
                This web app is made with Love and full of devotion
              </p>
            </div>

            <div className="col-lg-4 col-xs-12 location">
              <h4 className="mt-lg-0 mt-sm-4" style={{ color: "gray" }}>
                Leave Us a Message
              </h4>
              <br />
              <ContactForm />
            </div>
          </div>
          <div className="row ">
            <div className="col copyright">
              <p className=" text-center mt-5 mb-0">
                <small style={{ color: "gray", fontWeight: "bold" }}>
                  © {new Date().getFullYear()}. All Rights Reserved.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
