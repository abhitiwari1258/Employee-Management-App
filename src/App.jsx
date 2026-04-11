import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AppLayouts from "./layouts/AppLayouts";
import EmployeeList from "./pages/EmployeeList";
import AddEmployee from "./pages/AddEmployee"
import ViewEmployee from "./pages/ViewEmployee"
import EditEmployee from "./pages/EditEmployee"
function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayouts />}>
        <Route index element={<Home />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="employee/add" element={<AddEmployee/>}></Route>

        <Route path="employees/:id" element={<ViewEmployee />} /> 

        <Route path="employees/:id/edit" element={<EditEmployee />} /> 

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
