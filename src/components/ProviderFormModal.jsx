import "./ProviderFormModal.css";
import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
// import { submitProviderApplication } from "../services/submitProviderApplication";

function ProviderFormModal({ onClose }) {
  const { user } = useAuth();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    category: "",
    aadhaar: "",
    experience: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!user) {
      alert("Please login first");
      return;
    }

    await submitProviderApplication(user.uid, {
      ...form,
      email: user.email,
    });

    alert("Application submitted. Verification pending.");
    onClose();
  };

  return (
    <div className="pf-overlay">
      <div className="pf-modal">
        <h2>Service Provider Application</h2>

        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <input
          name="phone"
          placeholder="Mobile Number"
          onChange={handleChange}
        />
        <input name="city" placeholder="City" onChange={handleChange} />

        <select name="category" onChange={handleChange}>
          <option value="">Select Service Category</option>
          <option>Electrician</option>
          <option>Plumber</option>
          <option>AC Repair</option>
          <option>Cleaning</option>
          <option>Salon</option>
        </select>

        <input
          name="experience"
          placeholder="Years of Experience"
          onChange={handleChange}
        />

        <input
          name="aadhaar"
          placeholder="Aadhaar Number (for verification)"
          onChange={handleChange}
        />

        <button className="pf-primary" onClick={handleSubmit}>
          Submit Application
        </button>

        <button className="pf-close" onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
}

export default ProviderFormModal;
