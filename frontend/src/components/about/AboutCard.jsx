import React, { Fragment } from "react";
import "../../styles/about-style.css";
import { Card, Image } from "react-bootstrap";

const AboutCard = ({
  profile_card: {
    bgImg,
    profile,
    name,
    status,
    description,
    facebook,
    twitter,
    instagram,
    github,
    linkedIn,
    fb_link,
    tw_link,
    is_link,
    git_link,
    linked_link,
  },
}) => {
  return (
    <Fragment>
      <Card style={{ width: "18rem" }} className="mb-5 border-0">
        <Image
          thumbnail
          variant="top"
          style={{ height: "200px" }}
          src={bgImg}
          className="border-0"
        />
        <center>
          <Image variant="top" className="avatar" roundedCircle src={profile} />
        </center>
        <Card.Body style={{ marginTop: "-50px" }}>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{status}</Card.Subtitle>
          <Card.Text className="text-justify">{description}</Card.Text>
          <a href={fb_link}>{facebook}</a>
          <a href={tw_link}>{twitter}</a>
          <a href={is_link}>{instagram}</a>
          <a href={linked_link}>{linkedIn}</a>
          <a href={git_link}>{github}</a>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default AboutCard;
