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
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Employee Details
          </h2>

          <div className="space-y-4 text-gray-700">
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Name</span>
              <span>{employee.name}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Role</span>
              <span>{employee.role}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Department</span>
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs font-medium">
                {employee.department}
              </span>
            </div>
          </div>

          <div className="mt-6 flex justify-between">
            <Link to={`/employees/${id}/edit`}>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm transition">
                Edit
              </button>
            </Link>
            &nbsp;
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition"
            >
              Delete
            </button>
            &nbsp;
            <button
              onClick={() => navigate("/employees")}
              className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg text-sm transition"
            >
              Back to List
            </button>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h3 className="text-red-500 text-lg font-semibold mb-4">
          {error.message}
        </h3>
        <button
          onClick={() => navigate("/employees")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Back to Employees
        </button>
      </div>
    );
  }
};

export default ViewEmployee;
