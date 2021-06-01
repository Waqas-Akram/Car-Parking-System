import React, { Fragment, useState, useEffect } from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/nav-style.css";
import ReorderIcon from "@material-ui/icons/Reorder";

const NavHeader = () => {
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, []);

  return (
    <Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: scrollY ? "gray" : "white" }}
        variant="dark"
        className={scrollY ? "p-2" : "p-3"}
        fixed="top"
      >
        <Container>
          <Navbar.Brand
            style={{
              color: scrollY ? "white" : "gray",
              fontSize: "25px",
              textAlign: "center",
            }}
          >
            <Image src="/images/icon.png" width="50px" height="50px" />
            <span className=""> Car Parking</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <ReorderIcon
              style={{ color: scrollY ? "white" : "gray", font: "40px" }}
              className="mt-0 "
            />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Link
                to="/"
                className="link"
                style={{ color: scrollY ? "white" : "gray" }}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="link"
                style={{ color: scrollY ? "white" : "gray" }}
              >
                About
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default NavHeader;
