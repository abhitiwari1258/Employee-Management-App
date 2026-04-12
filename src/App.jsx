import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AppLayouts from "./layouts/AppLayouts";
import EmployeeList from "./pages/EmployeeList";
import AddEmployee from "./pages/AddEmployee";
import ViewEmployee from "./pages/ViewEmployee";
import EditEmployee from "./pages/EditEmployee";
import EmployeeLayout from "./pages/employees/EmployeeLayout";
import EmployeeStats from "./pages/employees/EmployeeStats";
import RequireAuth from "./components/RequireAuth";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayouts />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="login" element={<Login />} />

        <Route element={<RequireAuth/>}>
          <Route path="/employees" element={<EmployeeLayout />}>
            <Route index element={<EmployeeList />} />

            <Route path="stats" element={<EmployeeStats />}/>

            <Route path="add" element={<AddEmployee />}/>

            <Route path=":id" element={<ViewEmployee />} />

            <Route path=":id/edit" element={<EditEmployee />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
