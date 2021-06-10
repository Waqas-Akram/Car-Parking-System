import React, { Fragment } from "react";
import Moment from "react-moment";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Button } from "react-bootstrap";
// import axios from 'axios'
// import Swal from 'sweetalert2'

const RegistrationTable = ({ id, rfid, Name, Status, reg_date }) => {
  // const deleteUser = async(user_id)=>{
  //   const res = await axios.delete(`/api/sqlconnection/delete/${user_id}`);
  //   console.log(res.data);
  //   if(res.status === 200){
  //     Swal.fire({
  //       text:"User deleted Successfully",
  //       icon:"success"
  //     })

  //   }

  // }
  return (
    <Fragment>
      <tr>
        <td>{id}</td>
        <td>{rfid}</td>
        <td>{Name}</td>
        <td>
          {Status === "1" ? (
            <span className="text-info">Active</span>
          ) : (
            <span className="text-danger">In-Active</span>
          )}
        </td>

        <td>
          <Moment format="dddd, MMMM Do YYYY, h:mm:ss a">{reg_date}</Moment>
        </td>
        <td>
          <Button
            onClick={() => alert("Hello Edit")}
            className="border-0 bg-white  p-1"
          >
            {" "}
            <EditIcon className="text-info" />
          </Button>
          <Button
            onClick={() => alert("delete button")}
            className="border-0 bg-white  p-1"
          >
            {" "}
            <DeleteIcon className="text-danger " />
          </Button>
        </td>
      </tr>
    </Fragment>
  );
};

export default RegistrationTable;
