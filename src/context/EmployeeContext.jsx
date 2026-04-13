import { v4 as uuidv4 } from 'uuid'; 
import React from "react";
import { createContext, useState } from "react";

export const EmployeeContext = createContext();

export function EmployeeProvider({ children }) {
  console.log(children);

  const [employees, setEmployees] = useState([
    { id: uuidv4(), name: "Ramesh", role: "Developer", department: "IT" },
    { id: uuidv4(), name: "Suresh", role: "HR Manager", department: "HR" },
    { id: uuidv4(), name: "Priya", role: "Accountant", department: "Finance" },
    { id: uuidv4(), name: "Dinesh", role: "Software", department: "IT" },
  ]);

  const addEmployee = (emp) => {
    setEmployees([...employees, { ...emp, id:uuidv4()}]);
  };

  const updateEmployee = (id,updateEmployee)=>{
    setEmployees((prev)=>
      prev.map((emp)=> emp.id === id ? {...emp,...updateEmployee} : emp)
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
