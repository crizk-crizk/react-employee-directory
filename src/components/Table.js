import React from "react";
import Row from "./Row.js";


export default function Table({employeeList}) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surame</th>
            <th>Email</th>
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
