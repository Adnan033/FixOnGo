import { useState } from "react";
import { useAuth } from "../../auth/AuthContext";
// import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// import { db } from "../../firestore";

function Checkout({ items, onSuccess }) {
  const { user } = useAuth();

  const [form, setForm] = useState({
    name: user?.displayName || "",
    mobile: "",
    address: "",
    city: "",
    pincode: "",
    date: "",
    slot: "Morning",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return alert("Please login");

    await addDoc(collection(db, "jobs"), {
      customerId: user.uid,
      services: items,
      ...form,
      status: "pending",
      createdAt: serverTimestamp(),
    });

    alert("Booking placed");
    onSuccess();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Checkout</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="mobile"
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={handleChange}
          required
        />
        <input
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          required
        />
        <input
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          required
        />
        <input
          name="pincode"
          placeholder="Pincode"
          value={form.pincode}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />

        <select name="slot" value={form.slot} onChange={handleChange}>
          <option>Morning</option>
          <option>Afternoon</option>
          <option>Evening</option>
        </select>

        <button type="submit">Book Service</button>
      </form>
    </div>
  );
}

export default Checkout;
