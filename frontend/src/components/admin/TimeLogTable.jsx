import React, { Fragment } from "react";
import Moment from "react-moment";

const TimeLogTable = ({ id, rfid, TimeIn, Status, TimeOut }) => {
  return (
    <Fragment>
      <tr>
        <td>{id}</td>
        <td>{rfid}</td>
        <td>{TimeIn}</td>
        <td>{TimeOut}</td>
        <td>
          {Status === "1" ? (
            <span className="text-info">Active</span>
          ) : (
            <span className="text-danger">In-Active</span>
          )}
        </td>
      </tr>
    </Fragment>
  );
};

export default TimeLogTable;
