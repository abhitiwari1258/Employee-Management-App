import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EmployeeContext } from "../context/EmployeeContext";
import { Link } from "react-router-dom";

const ViewEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  //   console.log(id);

  const { employees, deleteEmployee } = useContext(EmployeeContext);

  try {
    const employee = employees.find((emp) => emp.id === id);
    //   console.log(employee);

    if (!employee) {
      throw new Error("Employee not found!");
    }

    const handleDelete = () => {
      const confirmDelete = window.confirm(
        `Are u sure u want to delete ${employee.name}`,
      );

      if (confirmDelete) {
        deleteEmployee(employee.id);
        navigate("/employees");
      }
    };

    return (
      <div>
        <h2>Employee Details</h2>
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
          &nbsp;
          {/* <Link to="/employees" style={{marginLeft:'10px'}}>Back to List</Link> */}
          <button onClick={() => navigate("/employees")}>Back to List</button>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div>
        <h3 style={{ color: "red" }}>{error.message}</h3>
        <button onClick={() => navigate("/employees")}>
          Back to Employees
        </button>
      </div>
    );
  }
};

export default ViewEmployee;
