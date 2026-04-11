import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EmployeeContext } from "../context/EmployeeContext";
import { Link } from "react-router-dom";

const ViewEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  //   console.log(id);

  const { employees, deleteEmployee } = useContext(EmployeeContext);

  //   console.log(employees);

  const employee = employees.find((emp) => emp.id === Number(id));
  //   console.log(employee);

  const handleDelete = () => {
    const confirmDelete = window.confirm(`Are u sure u want to delete ${employee.name}`)

    if(confirmDelete){
      deleteEmployee(employee.id);
      navigate('/employees')
    }
  };

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

      <div style={{ marginTop: "1rem" }}>
        <Link to={`/employees/${id}/edit`} style={{ marginRight: "1rem" }}>
          <button>Edit</button>
        </Link>
        &nbsp;
        <button
          onClick={handleDelete}
          style={{ color: "white", backgroundColor: "tomato" }}
        >
          Delete
        </button>
        <Link to="/employees" style={{marginLeft:'10px'}}>Back to List</Link>
      </div>
    </div>
  );
};

export default ViewEmployee;
