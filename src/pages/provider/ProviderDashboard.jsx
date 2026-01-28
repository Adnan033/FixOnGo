// import { useEffect, useState } from "react";
// import { useAuth } from "../../auth/AuthContext";

// import { subscribeToPendingJobs } from "../../services/getJobs";
// import { subscribeToMyJobs } from "../../services/getMyJobs";
// // import { subscribeProviderCompletedJobs } from "../../services/getProviderEarnings";
// import { updateJobStatus } from "../../services/updateJobStatus";

// function ProviderDashboard() {
//   const { user } = useAuth();

//   const [tab, setTab] = useState("pending");

//   const [pendingJobs, setPendingJobs] = useState([]);
//   const [myJobs, setMyJobs] = useState([]);
//   const [completedJobs, setCompletedJobs] = useState([]);

//   // 🔹 Pending + My Jobs
//   useEffect(() => {
//     if (!user) return;

//     const unsubPending = subscribeToPendingJobs(setPendingJobs);
//     const unsubMy = subscribeToMyJobs(user.uid, setMyJobs);

//     return () => {
//       unsubPending();
//       unsubMy();
//     };
//   }, [user]);

//   // 🔹 Completed Jobs (Earnings)
//   useEffect(() => {
//     if (!user) return;

//     const unsubCompleted = subscribeProviderCompletedJobs(
//       user.uid,
//       setCompletedJobs,
//     );

//     return () => unsubCompleted();
//   }, [user]);

//   // 🔹 Earnings
//   const totalEarnings = completedJobs.reduce(
//     (sum, job) => sum + (job.price || 0),
//     0,
//   );

//   // 🔹 Tab-based jobs
//   const jobs =
//     tab === "pending" ? pendingJobs : tab === "my" ? myJobs : completedJobs;

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>Provider Dashboard</h1>

//       {/* Tabs */}
//       <div style={{ marginBottom: 16 }}>
//         <button onClick={() => setTab("pending")}>Pending Jobs</button>
//         <button onClick={() => setTab("my")}>My Jobs</button>
//         <button onClick={() => setTab("completed")}>Completed</button>
//       </div>

//       {/* No Jobs */}
//       {jobs.length === 0 && <p>No jobs here</p>}

//       {/* Job Cards */}
//       {jobs.map((job) => (
//         <div
//           key={job.id}
//           style={{
//             border: "1px solid #ccc",
//             padding: 12,
//             marginBottom: 10,
//             borderRadius: 6,
//           }}
//         >
//           <h3>{job.service}</h3>
//           <p>Location: {job.location}</p>
//           <p>Status: {job.status}</p>
//           {job.price && <p>Amount: ₹{job.price}</p>}

//           {/* Pending Actions */}
//           {tab === "pending" && (
//             <>
//               <button
//                 style={{ marginRight: 10 }}
//                 onClick={() =>
//                   updateJobStatus(job.id, {
//                     status: "accepted",
//                     providerId: user.uid,
//                   })
//                 }
//               >
//                 Accept
//               </button>

//               <button
//                 onClick={() => updateJobStatus(job.id, { status: "rejected" })}
//               >
//                 Reject
//               </button>
//             </>
//           )}

//           {/* My Jobs */}
//           {tab === "my" && (
//             <button
//               onClick={() => updateJobStatus(job.id, { status: "completed" })}
//             >
//               Mark Completed
//             </button>
//           )}
//         </div>
//       ))}

//       {/* Earnings Section */}
//       <hr />
//       <h2>Earnings</h2>
//       <p>Total Completed Jobs: {completedJobs.length}</p>
//       <p>Total Earnings: ₹{totalEarnings}</p>
//     </div>
//   );
// }

// export default ProviderDashboard;
