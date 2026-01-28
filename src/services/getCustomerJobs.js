// import {
//   collection,
//   onSnapshot,
//   query,
//   where,
//   orderBy,
// } from "firebase/firestore";
// import { db } from "../firestore";

// export function subscribeToCustomerJobs(customerId, callback) {
//   const q = query(
//     collection(db, "jobs"),
//     where("customerId", "==", customerId),
//     orderBy("createdAt", "desc"),
//   );

//   return onSnapshot(q, (snapshot) => {
//     const jobs = snapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     callback(jobs);
//   });
// }
