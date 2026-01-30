// import { collection, query, where, onSnapshot } from "firebase/firestore";
// import { db } from "../firestore";

// export function subscribeProviderCompletedJobs(providerId, callback) {
//   const q = query(
//     collection(db, "jobs"),
//     where("providerId", "==", providerId),
//     where("status", "==", "completed"),
//   );

//   return onSnapshot(q, (snap) => {
//     const jobs = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
//     callback(jobs);
//   });
// }
