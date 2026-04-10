import React from "react";
import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
const EmployeeList = () => {
  const { employees, addEmployee } = useContext(EmployeeContext);
  // console.log(employees);
  // console.log(addEmployee);
  
  
  return (
    <>
      <h1>Employee List</h1>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Role</td>
            <td>Deoartment</td>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.role}</td>
              <td>{emp.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default EmployeeList;
