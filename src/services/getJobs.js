// import { collection, onSnapshot, query, where } from "firebase/firestore";
// import { db } from "../firestore";

// export function subscribeToPendingJobs(callback) {
//   const q = query(collection(db, "jobs"), where("status", "==", "pending"));

//   return onSnapshot(q, (snapshot) => {
//     const jobs = snapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     callback(jobs);
//   });
// }
