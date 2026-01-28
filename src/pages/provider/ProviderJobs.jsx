import { useState } from "react";
import "./ProviderJobs.css";

function ProviderJobs() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      service: "Plumbing",
      customer: "Rahul Sharma",
      location: "Pusad",
      amount: 500,
      status: "pending",
    },
    {
      id: 2,
      service: "AC Repair",
      customer: "Amit Verma",
      location: "Yavatmal",
      amount: 1200,
      status: "pending",
    },
  ]);

  const handleAccept = (id) => {
    setJobs(
      jobs.map((job) => (job.id === id ? { ...job, status: "accepted" } : job))
    );
  };

  const handleReject = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  return (
    <div className="jobs-page">
      <h2>Available Jobs</h2>

      {jobs.map((job) => (
        <div key={job.id} className="job-card">
          <div>
            <h3>{job.service}</h3>
            <p>Customer: {job.customer}</p>
            <p>Location: {job.location}</p>
            <p>Amount: ₹{job.amount}</p>
            <p>
              Status: <b>{job.status}</b>
            </p>
          </div>

          <div className="job-actions">
            {job.status === "pending" && (
              <>
                <button className="accept" onClick={() => handleAccept(job.id)}>
                  Accept
                </button>
                <button className="reject" onClick={() => handleReject(job.id)}>
                  Reject
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProviderJobs;
