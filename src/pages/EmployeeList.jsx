import React from "react";
import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { NavLink } from "react-router-dom";
const EmployeeList = () => {
  const { employees, addEmployee } = useContext(EmployeeContext);
  // console.log(employees);
  // console.log(addEmployee);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Employee List</h1>

        <NavLink
          to={"/employees/add"}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition text-sm font-medium"
        >
          {" "}
          + Add Employee{" "}
        </NavLink>
      </div>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr style={{ backgroundColor: "#eee" }}>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3">Deoartment</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {employees.map((emp) => (
              <tr key={emp.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium text-gray-800">
                  {emp.name}
                </td>

                <td className="px-6 py-4 text-gray-600">{emp.role}</td>

                <td className="px-6 py-4">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs font-medium">
                    {emp.department}
                  </span>
                </td>

                <td className="px-6 py-4 text-center">
                  <NavLink
                    to={`/employees/${emp.id}`}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    View
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {employees.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No employees found. Add one to get started.
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeList;
