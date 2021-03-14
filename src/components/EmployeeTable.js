import React from "react";
import Row from "./Row.js";
import "./EmployeeTable.css";
import Table from "react-bootstrap/Table";

export default function EmployeeTable({ employeeList, handleSort }) {
  return (
    <div className="tableContainer">
      <Table responsive="sm">
        <thead>
          <tr>
            <th className="clickable" onClick={() => handleSort("name.first")}>
              Name
            </th>
            <th className="clickable" onClick={() => handleSort("name.last")}>
              Surame
            </th>
            <th className="clickable" onClick={() => handleSort("email")}>
              Email
            </th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {employeeList.map((employee) => {
            return <Row key={employee.email} employee={employee} />;
          })}
        </tbody>
      </Table>
    </div>
  );
}
