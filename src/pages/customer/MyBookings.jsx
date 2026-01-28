import { useEffect, useState } from "react";
import { useAuth } from "../../auth/AuthContext";
import { subscribeToCustomerJobs } from "../../services/getCustomerJobs";
import { updateJobStatus } from "../../services/updateJobStatus";
import { addReview } from "../../services/addReview";

function MyBookings() {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  // rating & review per job (important)
  const [ratings, setRatings] = useState({});
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    if (!user) return;
    const unsub = subscribeToCustomerJobs(user.uid, setJobs);
    return () => unsub();
  }, [user]);

  const submitReview = async (job) => {
    const rating = ratings[job.id];
    const review = reviews[job.id];

    if (!rating) {
      alert("Please select rating");
      return;
    }

    await addReview({
      jobId: job.id,
      providerId: job.providerId,
      customerId: user.uid,
      rating,
      review: review || "",
    });

    await updateJobStatus(job.id, { reviewed: true });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>My Bookings</h1>

      {jobs.length === 0 && <p>No bookings yet</p>}

      {jobs.map((job) => (
        <div
          key={job.id}
          style={{
            border: "1px solid #ccc",
            padding: 12,
            marginBottom: 10,
            borderRadius: 6,
          }}
        >
          <h3>{job.service}</h3>
          <p>Location: {job.location}</p>
          <p>Status: {job.status}</p>

          {/* Cancel Booking */}
          {(job.status === "pending" || job.status === "accepted") && (
            <button
              style={{ marginTop: 8 }}
              onClick={() => updateJobStatus(job.id, { status: "cancelled" })}
            >
              Cancel Booking
            </button>
          )}

          {/* Rating & Review */}
          {job.status === "completed" && !job.reviewed && (
            <div style={{ marginTop: 10 }}>
              <select
                value={ratings[job.id] || ""}
                onChange={(e) =>
                  setRatings({
                    ...ratings,
                    [job.id]: Number(e.target.value),
                  })
                }
              >
                <option value="">Rating</option>
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>

              <input
                placeholder="Write a review"
                value={reviews[job.id] || ""}
                onChange={(e) =>
                  setReviews({
                    ...reviews,
                    [job.id]: e.target.value,
                  })
                }
                style={{ marginLeft: 8 }}
              />

              <button
                style={{ marginLeft: 8 }}
                onClick={() => submitReview(job)}
              >
                Submit
              </button>
            </div>
          )}

          {job.reviewed && (
            <p style={{ fontSize: 12, color: "green" }}>Review submitted ✔</p>
          )}

          {job.providerId && (
            <p style={{ fontSize: 12, color: "#555" }}>Provider assigned</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default MyBookings;
