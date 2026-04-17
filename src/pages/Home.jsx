import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const Home = () => {
  const { user } = useAuth(); // check login state
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center justify-center px-6">
      {/* hero-Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-extrabold text-gray-800 leading-tight mb-6">
          Welcome to Employee Management System
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          A modern platform to manage employees, track performance, and
          streamline HR operations efficiently.
        </p>

        {/* for navigation button uses Link */}
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            to={user ? "/employees" : "/login"}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg transition duration-200"
          >
            {user ? "Go to Dashboard" : "Get Started"}
          </Link>

          <Link
            to="/about"
            className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl font-medium transition duration-200"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* ------------------------------------ */}
      {/* Feature-sectiom */}

      <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl w-full">
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2 text-blue-700">
            Employee Records
          </h3>
          <p className="text-gray-600 text-sm">
            Easily add, update, and manage employee information in one place.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2 text-blue-700">
            Secure Access
          </h3>
          <p className="text-gray-600 text-sm">
            Role-based authentication ensures safe and controlled access.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2 text-blue-700">
            Fast & Responsive
          </h3>
          <p className="text-gray-600 text-sm">
            Optimized UI with Tailwind for smooth and responsive experience.
          </p>
        </div>
      </div>

      {/* footer */}

      <div className="mt-16 text-center text-sm text-gray-500 space-y-1">
        <p>
          Built with <span className="text-red-500 animate-pulse">❤️</span>{" "}
          using{" "}
          <span className="font-semibold text-blue-600 hover:underline cursor-pointer">
            React
          </span>{" "}
          &{" "}
          <span className="font-semibold text-blue-600 hover:underline cursor-pointer">
            Tailwind CSS
          </span>
        </p>

        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Home;
