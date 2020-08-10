import React from "react";
import "./Employee.css";

function EmployeeCard(props) {
    return (
        <div className="row">
            <table className="table">
             <tr>
                <th> Name</th>
                <th> Email</th>
                <th> Department</th>
                <th> Role</th>
              </tr>
              <tr>
                <td>{props.Name}</td>
                <td>{props.email}</td>
                <td>{props.department}</td>
                <td>{props.role}</td>
              </tr>
         </table>
       </div>
    );}
export default EmployeeCard;