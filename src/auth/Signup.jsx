import "./Auth.css";
import { useState } from "react";

function Signup({ onClose, onLogin }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    age: "",
    gender: "",
    address: "",
    officeAddress: "",
  });

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    localStorage.setItem("fixongo_user", JSON.stringify(form));
    onLogin();
  };

  return (
    <div className="auth-overlay">
      <form className="auth-card" onSubmit={submit}>
        <h2>Create Account</h2>

        <input name="name" placeholder="Full Name" onChange={change} />
        <input name="email" placeholder="Email" onChange={change} />
        <input name="phone" placeholder="Phone" onChange={change} />
        <input name="age" placeholder="Age" onChange={change} />

        <select name="gender" onChange={change}>
          <option value="">Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <input name="address" placeholder="Address" onChange={change} />
        <input
          name="officeAddress"
          placeholder="Office Address (optional)"
          onChange={change}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={change}
        />

        <button type="submit">Sign Up</button>

        <button type="button" onClick={onClose}>
          Close
        </button>
      </form>
    </div>
  );
}

export default Signup;
