import React from "react";
import { createContext, useState } from "react";

export const EmployeeContext = createContext();

export function EmployeeProvider({ children }) {
  console.log(children);

  const [employees, setEmployees] = useState([
    { id: 1, name: "Ramesh", role: "Developer", department: "IT" },
    { id: 2, name: "Suresh", role: "HR Manager", department: "HR" },
    { id: 3, name: "Priya", role: "Accountant", department: "Finance" },
    { id: 4, name: "Dinesh", role: "Software", department: "IT" },
  ]);

  const addEmployee = (emp) => {
    setEmployees([...employees, { ...emp, id: employees.length + 1 }]);
  };

  const updateEmployee = (updateEmployee)=>{
    setEmployees((prev)=>
      prev.map((emp)=> updateEmployee.id === emp.id ? updateEmployee : emp)
    )
  }

  const deleteEmployee = (empId)=>{
    setEmployees((prev)=>{
      return prev.filter((emp)=> empId !== emp.id )
    })
  }

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee , updateEmployee, deleteEmployee}}>
      {children}
    </EmployeeContext.Provider>
  );
}
