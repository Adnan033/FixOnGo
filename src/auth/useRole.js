// import { useEffect, useState } from "react";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../firestore";

// export function useRole(user) {
//   const [role, setRole] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchRole = async () => {
//       if (!user) {
//         setRole(null);
//         setLoading(false);
//         return;
//       }

//       const ref = doc(db, "users", user.uid);
//       const snap = await getDoc(ref);

//       if (snap.exists()) {
//         setRole(snap.data().role);
//       }

//       setLoading(false);
//     };

//     fetchRole();
//   }, [user]);

//   return { role, loading };
// }
