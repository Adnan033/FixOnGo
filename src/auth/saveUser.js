// import { doc, getDoc, setDoc } from "firebase/firestore";
// import { db } from "../firestore";

// export async function saveUser(user) {
//   const userRef = doc(db, "users", user.uid);
//   const snap = await getDoc(userRef);

//   if (!snap.exists()) {
//     await setDoc(userRef, {
//       uid: user.uid,
//       name: user.displayName,
//       email: user.email,
//       photo: user.photoURL,
//       role: "customer", // 🔒 default
//       createdAt: new Date(),
//     });
//   }
// }
