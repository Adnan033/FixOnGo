import "./Auth.css";
import { useState } from "react";

function Login({ onLogin, onClose, onSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!email || !password) return alert("Fill all fields");

    localStorage.setItem("fixongo_user", JSON.stringify({ email }));
    onLogin();
  };

  return (
    <div className="auth-overlay">
      <form className="auth-card" onSubmit={submit}>
        <h2>Login</h2>

        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        <p onClick={onSignup} style={{ cursor: "pointer", color: "#6c63ff" }}>
          New user? Create account
        </p>

        <button type="button" onClick={onClose}>
          Close
        </button>
      </form>
    </div>
  );
}

export default Login;
