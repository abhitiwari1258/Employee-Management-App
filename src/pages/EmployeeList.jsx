import React from "react";
import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { NavLink } from "react-router-dom";
const EmployeeList = () => {
  const { employees, addEmployee } = useContext(EmployeeContext);
  // console.log(employees);
  // console.log(addEmployee);
  
  
  return (
    <div>
      <h1>Employee List</h1>

      <NavLink 
      to={"/employees/add"}
      style={{
        display: 'inline-block',
        marginBottom: '1rem',
        padding: '0.5rem 1rem',
        backgroundColor: '#003366',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '4px',
      }}
      > + Add Employee </NavLink>
      <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ backgroundColor: '#eee' }}>
            <th>Name</th>
            <th>Role</th>
            <th>Deoartment</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.role}</td>
              <td>{emp.department}</td>
              <td>
              <NavLink to={`/employees/${emp.id}`}>View</NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
