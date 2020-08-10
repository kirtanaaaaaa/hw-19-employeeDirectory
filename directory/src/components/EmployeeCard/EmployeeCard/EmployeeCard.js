import React from "react";
import "./Employee.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
          <li>
            <strong>Role:</strong> {props.role}
          </li>
          <li>
            <strong>Department:</strong> {props.department}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;