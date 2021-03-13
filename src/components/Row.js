import React from "react";

function Row({ employee, id }) {
  return (
    <tr>
      <td>{employee.name.first}</td>
      <td>{employee.name.last}</td>
      <td>{employee.email}</td>
      <td>
        <img src={employee.picture.thumbnail} alt={employee.name.first} />
      </td>
    </tr>
  );
}
export default Row;
