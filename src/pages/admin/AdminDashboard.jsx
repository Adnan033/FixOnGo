import { useState, useEffect } from "react";
import "./AdminDashboard.css";

function AdminProviders() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("provider_applications")) || [];
    setApplications(data);
  }, []);

  const approveProvider = (app) => {
    const approved =
      JSON.parse(localStorage.getItem("approved_providers")) || [];

    const provider = {
      ...app,
      status: "approved",
      rating: 0,
      totalReviews: 0,
      jobsCompleted: 0,
      profileImage: null,
    };

    localStorage.setItem(
      "approved_providers",
      JSON.stringify([...approved, provider]),
    );

    removeFromPending(app.id);
  };

  const rejectProvider = (id) => {
    removeFromPending(id);
  };

  const removeFromPending = (id) => {
    const updated = applications.filter((a) => a.id !== id);
    setApplications(updated);
    localStorage.setItem("provider_applications", JSON.stringify(updated));
  };

  return (
    <div className="admin-content">
      <h2>Pending Provider Applications</h2>

      {applications.length === 0 && <p>No pending applications</p>}

      {applications.map((p) => (
        <div key={p.id} className="admin-card">
          <h3>{p.name}</h3>
          <p>Category: {p.category}</p>
          <p>Phone: {p.phone}</p>

          <button onClick={() => approveProvider(p)}>Approve</button>
          <button onClick={() => rejectProvider(p.id)}>Reject</button>
        </div>
      ))}
    </div>
  );
}

export default AdminProviders;
