// import { collection, onSnapshot, query, where } from "firebase/firestore";
// import { db } from "../firestore";

// export function subscribeToMyJobs(providerId, callback) {
//   const q = query(
//     collection(db, "jobs"),
//     where("providerId", "==", providerId),
//     where("status", "==", "accepted"),
//   );

//   return onSnapshot(q, (snapshot) => {
//     const jobs = snapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     callback(jobs);
//   });
// }
