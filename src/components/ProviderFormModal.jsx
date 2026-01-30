import "./ProviderFormModal.css";
import { useState } from "react";
import { useAuth } from "../auth/AuthContext";

function ProviderFormModal({ onClose }) {
  const { user } = useAuth();

  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    // BASIC
    name: "",
    dob: "",
    email: user?.email || "",
    password: "",
    phone: "",
    address1: "",
    address2: "",

    // KYC
    aadhaarNo: "",
    panNo: "",
    aadhaarImg: null,
    panImg: null,
    portfolioImg: null,
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFile = (e) =>
    setForm({ ...form, [e.target.name]: e.target.files[0] });

  const nextStep = () => {
    if (!form.name || !form.phone || !form.password) {
      alert("Please fill all required fields");
      return;
    }
    setStep(2);
  };

  const handleSubmit = () => {
    if (!user) {
      alert("Please login first");
      return;
    }

    const applications =
      JSON.parse(localStorage.getItem("provider_applications")) || [];

    const newApplication = {
      id: Date.now(),
      userEmail: user.email,

      // BASIC
      name: form.name,
      dob: form.dob,
      email: form.email,
      phone: form.phone,
      address1: form.address1,
      address2: form.address2,

      // KYC
      aadhaarNo: form.aadhaarNo,
      panNo: form.panNo,

      // images (frontend placeholder)
      aadhaarImg: form.aadhaarImg?.name || null,
      panImg: form.panImg?.name || null,
      portfolioImg: form.portfolioImg?.name || null,

      status: "pending",
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "provider_applications",
      JSON.stringify([...applications, newApplication]),
    );

    alert("Application submitted. Verification pending.");
    onClose();
  };

  return (
    <div className="pf-overlay">
      <div className="pf-modal">
        <h2>Service Provider Application</h2>

        {/* 🔹 PHASE 1 */}
        {step === 1 && (
          <>
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
            />

            <input
              name="dob"
              type="date"
              placeholder="Date of Birth"
              onChange={handleChange}
            />

            <input value={form.email} disabled />

            <input
              name="password"
              type="password"
              placeholder="Create Password"
              onChange={handleChange}
            />

            <input
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
            />

            <input
              name="address1"
              placeholder="Address"
              onChange={handleChange}
            />

            <input
              name="address2"
              placeholder="Second Address (optional)"
              onChange={handleChange}
            />

            <button className="pf-primary" onClick={nextStep}>
              Next →
            </button>
          </>
        )}

        {/* 🔹 PHASE 2 */}
        {step === 2 && (
          <>
            <input
              name="aadhaarNo"
              placeholder="Aadhaar Number"
              onChange={handleChange}
            />

            <input
              name="panNo"
              placeholder="PAN Number"
              onChange={handleChange}
            />

            <label>Aadhaar Image</label>
            <input type="file" name="aadhaarImg" onChange={handleFile} />

            <label>PAN Image</label>
            <input type="file" name="panImg" onChange={handleFile} />

            <label>Portfolio Image (optional)</label>
            <input type="file" name="portfolioImg" onChange={handleFile} />

            <button className="pf-primary" onClick={handleSubmit}>
              Submit Application
            </button>

            <button className="pf-secondary" onClick={() => setStep(1)}>
              ← Back
            </button>
          </>
        )}

        <button className="pf-close" onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
}

export default ProviderFormModal;
