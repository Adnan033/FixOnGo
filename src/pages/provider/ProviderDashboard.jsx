import { useEffect, useState } from "react";
import { useAuth } from "../../auth/AuthContext";
import "./ProviderDashboard.css";

function ProviderDashboard() {
  const { user } = useAuth();

  const [tab, setTab] = useState("pending");
  const [jobs, setJobs] = useState([]);

  // 🔹 Load jobs from localStorage
  useEffect(() => {
    if (!user) return;

    const allJobs = JSON.parse(localStorage.getItem("jobs")) || [];

    // provider-specific jobs
    const providerJobs = allJobs.filter(
      (job) => job.providerEmail === user.email,
    );

    setJobs(providerJobs);
  }, [user]);

  // 🔹 Job status update
  const updateStatus = (jobId, status) => {
    const allJobs = JSON.parse(localStorage.getItem("jobs")) || [];

    const updated = allJobs.map((job) =>
      job.id === jobId ? { ...job, status } : job,
    );

    localStorage.setItem("jobs", JSON.stringify(updated));

    setJobs(updated.filter((j) => j.providerEmail === user.email));
  };

  // 🔹 Filter by tab
  const filteredJobs = jobs.filter((job) => job.status === tab);

  // 🔹 Earnings
  const completedJobs = jobs.filter((j) => j.status === "completed");
  const totalEarnings = completedJobs.reduce(
    (sum, job) => sum + (job.price || 0),
    0,
  );

  return (
    <div className="provider-dashboard">
      <h1>Provider Dashboard</h1>

      {/* TABS */}
      <div className="pd-tabs">
        <button onClick={() => setTab("pending")}>Pending</button>
        <button onClick={() => setTab("accepted")}>My Jobs</button>
        <button onClick={() => setTab("completed")}>Completed</button>
      </div>

      {/* JOB LIST */}
      {filteredJobs.length === 0 && <p>No jobs here</p>}

      {filteredJobs.map((job) => (
        <div key={job.id} className="pd-job-card">
          <h3>{job.service}</h3>
          <p>Customer: {job.customerName}</p>
          <p>Location: {job.location}</p>
          <p>
            Status: <b>{job.status}</b>
          </p>
          <p>Amount: ₹{job.price}</p>

          {/* ACTIONS */}
          {job.status === "pending" && (
            <div className="pd-actions">
              <button onClick={() => updateStatus(job.id, "accepted")}>
                Accept
              </button>
              <button onClick={() => updateStatus(job.id, "rejected")}>
                Reject
              </button>
            </div>
          )}

          {job.status === "accepted" && (
            <button onClick={() => updateStatus(job.id, "completed")}>
              Mark Completed
            </button>
          )}
        </div>
      ))}

      {/* EARNINGS */}
      <hr />
      <h2>Earnings</h2>
      <p>Completed Jobs: {completedJobs.length}</p>
      <p>Total Earnings: ₹{totalEarnings}</p>
    </div>
  );
}

export default ProviderDashboard;
