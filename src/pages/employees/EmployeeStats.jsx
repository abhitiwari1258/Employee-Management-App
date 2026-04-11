import { useContext } from "react";
import { EmployeeContext } from "../../context/EmployeeContext";

const EmployeeStats = () => {
    const {employees} = useContext(EmployeeContext)
    const total = employees.length
    const departments = [...new Set(employees.map(e => e.department))].join(',')

    console.log(departments);
    
  return (
    <div>
      <h3>Employee Statistics</h3>
      <p><strong>Total Employees :</strong>{total}</p>
      <p><strong> Departments :</strong>{departments}</p>
    </div>
  )
}

export default EmployeeStats
