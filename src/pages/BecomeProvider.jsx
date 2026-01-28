import { useState, useEffect } from "react";

import ProviderFormModal from "../components/ProviderFormModal";
import "../styles/BecomeProvider.css";

function BecomeProvider() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("BecomeProvider rendered");
  }, []);

  return (
    <div className="bp-page">
      {/* HERO */}
      <section className="bp-hero">
        <h1>Become a FixOnGo Service Provider</h1>
        <p>
          Earn more • Work locally • Get verified customers • Grow
          professionally
        </p>

        <button className="bp-primary" onClick={() => setOpen(true)}>
          Become a Service Provider
        </button>
      </section>

      {/* WHY FIXONGO */}
      <section className="bp-benefits">
        <div>✔ Weekly payouts directly to your bank</div>
        <div>✔ Verified & genuine customers</div>
        <div>✔ Flexible working hours</div>
        <div>✔ Zero commission for initial jobs</div>
        <div>✔ Professional support team</div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bp-steps">
        <div>
          <h3>1. Apply</h3>
          <p>Fill basic details & submit documents</p>
        </div>
        <div>
          <h3>2. Verification</h3>
          <p>Our team verifies your profile</p>
        </div>
        <div>
          <h3>3. Start Earning</h3>
          <p>Accept jobs & get paid</p>
        </div>
      </section>

      <button
        onClick={() => alert("APPLY CLICK")}
        style={{
          position: "relative",
          zIndex: 9999,
          pointerEvents: "auto",
        }}
      >
        Apply Now
      </button>

      {/* MODAL */}
      {open && <ProviderFormModal onClose={() => setOpen(false)} />}
    </div>
  );
}

export default BecomeProvider;
