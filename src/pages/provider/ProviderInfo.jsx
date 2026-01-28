import "./ProviderInfo.css";

function ProviderInfo({ onApply }) {
  return (
    <div className="provider-info-page">
      {/* HERO */}
      <section className="provider-hero">
        <h1>Become a Service Provider with FixOnGo</h1>
        <p>
          Earn more, work flexibly, and grow your business with India’s
          fast-growing home service platform.
        </p>

        <button className="primary-btn" onClick={onApply}>
          Become a Service Provider
        </button>
      </section>

      {/* WHY FIXONGO */}
      <section className="provider-section">
        <h2>Why join FixOnGo?</h2>

        <div className="provider-cards">
          <div className="card">
            <h3>💰 Higher Earnings</h3>
            <p>
              Get well-paid jobs near your location with transparent pricing.
            </p>
          </div>

          <div className="card">
            <h3>⏰ Flexible Work</h3>
            <p>Accept jobs when you want. No fixed working hours.</p>
          </div>

          <div className="card">
            <h3>📍 Local Jobs</h3>
            <p>Get service requests from customers near your area.</p>
          </div>

          <div className="card">
            <h3>🛡️ Trusted Platform</h3>
            <p>Verified customers, secure payments, and support team.</p>
          </div>
        </div>
      </section>

      {/* WHO CAN APPLY */}
      <section className="provider-section light">
        <h2>Who can apply?</h2>

        <ul className="provider-list">
          <li>✔ Electricians, Plumbers, AC Technicians</li>
          <li>✔ Appliance Repair Experts</li>
          <li>✔ Home Cleaning & Maintenance Professionals</li>
          <li>✔ Minimum 18 years age</li>
          <li>✔ Valid Aadhaar for verification</li>
        </ul>
      </section>

      {/* VERIFICATION */}
      <section className="provider-section">
        <h2>Simple & Secure Verification</h2>
        <p>
          To maintain trust and quality, we verify all service providers before
          approval.
        </p>

        <div className="verify-steps">
          <div>1️⃣ Submit basic details</div>
          <div>2️⃣ Aadhaar verification</div>
          <div>3️⃣ Admin approval</div>
          <div>4️⃣ Start receiving jobs</div>
        </div>
      </section>

      {/* CTA BOTTOM */}
      <section className="provider-cta">
        <h2>Ready to grow with FixOnGo?</h2>
        <button className="primary-btn" onClick={onApply}>
          Apply Now
        </button>
      </section>
    </div>
  );
}

export default ProviderInfo;
