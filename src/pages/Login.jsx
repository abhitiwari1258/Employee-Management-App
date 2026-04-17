import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  console.log(username);
  console.log(password);

  // where to redirect after login (default to /employees)
  const from = location.state?.from?.pathname || "/employees";
  // This means:
  // If user tried to access a protected route → send them back there
  // Otherwise → go to /

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = auth.login({
      username,
      password,
    });
    if (res?.ok) {
      navigate(from, { replace: true });
    } else {
      setErr(res?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 px-4 -mt-20">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login to Your Account
        </h2>

        {err && (
          <div className="bg-red-100 text-red-600 text-sm px-4 py-2 rounded-md mb-4 text-center">
            {err}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div style={{ marginBottom: 8 }}>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              UserName :{" "}
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div style={{ marginBottom: 8 }}>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Password :{" "}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition font-medium shadow-md"
          >
            Login
          </button>
        </form>

        <p className="mt-5 text-xs text-gray-500 text-center">
          Tip: use{" "}
          <code className="bg-gray-100 px-1 rounded">admin / admin</code> to
          login as admin for this demo.
        </p>
      </div>
    </div>
  );
};

export default Login;
