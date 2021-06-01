import React, { Fragment } from "react";
import { Card } from "react-bootstrap";

const DashboardCard = ({ background, title, value }) => {
  return (
    <Fragment>
      <Card style={{ width: "18rem" }} className={`${background}`}>
        <Card.Body>
          <Card.Title
            className="text-center text-white"
            style={{ fontSize: "30px" }}
          >
            {value}
          </Card.Title>
        </Card.Body>
      </Card>
      <h4 className="text-center my-3 " style={{ color: "gray" }}>
        {title}
      </h4>
    </Fragment>
  );
};

export default DashboardCard;
