import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-2xl shadow-xl">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
          About This Application
        </h2>

        {/* Intro */}
        <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto mb-10">
          A modern Employee Management System built to simplify HR operations,
          improve productivity, and provide a seamless user experience.
        </p>

        {/* Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Section 1 */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              📌 What it does
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Manage employees, track departments, and update records easily.
              Designed to reduce manual HR work and centralize employee data.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-green-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              ⚙️ Technologies Used
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Built using React, React Router, Context API, and Tailwind CSS.
              Backend powered by Node.js for handling API and data flow.
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-purple-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              🔐 Key Features
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Authentication, protected routes, CRUD operations, and responsive
              UI for a smooth and secure user experience.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-yellow-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-yellow-700 mb-2">
              🚀 Purpose
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Ideal for learning full-stack development concepts and scalable
              architecture for enterprise-level applications.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
          <p>
            Version <span className="font-semibold text-gray-700">1.0.0</span>
          </p>
          <p className="mt-1">
            Developed by{" "}
            <span className="font-semibold text-blue-600">Abhishek Tiwari</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
