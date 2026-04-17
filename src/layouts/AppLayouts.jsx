import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const AppLayouts = () => {
  const { user, logout } = useAuth();

  const linkClass = "px-3 py-2 rounded-md text-sm font-medium transition";

  const activeClass = "bg-blue-100 text-blue-700";

  const inactiveClass = "text-gray-700 hover:bg-gray-100";

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm ">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo / Title */}
          <h1 className="text-xl font-bold text-blue-600">Employee Portal</h1>

          {/* Navigation Links */}
          <nav className="flex items-center gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : inactiveClass}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/employees"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : inactiveClass}`
              }
            >
              Employees
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : inactiveClass}`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : inactiveClass}`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Right Section (Auth) */}
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <span className="text-sm text-gray-600">
                  Hi, <span className="font-medium">{user.username}</span>
                </span>

                <button
                  onClick={logout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-md text-sm transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <NavLink
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-sm transition"
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayouts;
