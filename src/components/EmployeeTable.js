import React from "react";
import Row from "./Row.js";
import "./EmployeeTable.css";
//change Table name
export default function Table({employeeList, handleSort}) {
  return (
    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th className="clickable" onClick={()=>handleSort("name.first")} >Name</th>
            <th className="clickable" onClick={()=>handleSort("name.last")}>Surame</th>
            <th className="clickable" onClick={()=>handleSort("email")}>Email</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {
            employeeList.map((employee) => {
              return <Row key={employee.email} employee={employee} />
            })
          }
        </tbody>
        </table>
    </div>
  );
}
