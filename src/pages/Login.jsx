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
    navigate(from, {replace: true});
  } else {
    setErr(res?.message || "Login Failed");
  }
};

  return (
    <div style={{ maxWidth: 420 }}>
      <h2>Login</h2>

      {err && <div style={{ color: "red" }}>{err}</div>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 8 }}>
          <label>UserName : </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>Password : </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>

      <p style={{ marginTop: 12, fontSize: 13 }}>
        Tip: use <code>admin / admin</code> to login as admin for this demo.
      </p>
    </div>
  );
};

export default Login;
