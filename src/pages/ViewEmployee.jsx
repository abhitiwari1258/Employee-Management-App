import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { EmployeeContext } from "../context/EmployeeContext";
import { Link } from "react-router-dom";

const ViewEmployee = () => {
  const { id } = useParams();
//   console.log(id);

  const { employees } = useContext(EmployeeContext);

  console.log(employees);
  

  const employee = employees.find((emp) => emp.id === Number(id));
  console.log(employee);

  if (!employee) {
    return (
      <div>
        <h2>Employee not found!</h2>
        <Link to="/employees">Go Back</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Employee Details</h2>
      <p>
        <strong>ID:</strong> {employee.id}
      </p>
      <p>
        <strong>Name:</strong> {employee.name}
      </p>
      <p>
        <strong>Role:</strong> {employee.role}
      </p>
      <p>
        <strong>Department:</strong> {employee.department}
      </p>

      <div style={{ marginTop: '1rem' }}>

        <Link to={"/employees/:id/edit"} style={{ marginRight: '1rem' }}>Edit</Link>

         <Link to="/employees">Back to List</Link>
      </div>
    </div>
  );
};

export default ViewEmployee;
