import { useParams } from "react-router-dom";
import { providersData } from "../data/providersData";
import { useAuth } from "../auth/AuthContext";
import "./ServiceProviders.css";

function ServiceProviders() {
  const { serviceId } = useParams();
  const { user } = useAuth();

  const providers = providersData[serviceId] || [];

  const handleBookProvider = (provider) => {
    if (!user) {
      alert("Please login first to book a service");
      return;
    }

    const job = {
      id: "JOB_" + Date.now(),
      serviceId,
      serviceName: serviceId.toUpperCase(),

      providerId: provider.id,
      providerName: provider.name,

      customerEmail: user.email,
      customerName: user.name || "Customer",

      price: provider.price,
      status: "pending", // pending → accepted → completed
      createdAt: new Date().toISOString(),
    };

    const existingJobs = JSON.parse(localStorage.getItem("fixongo_jobs")) || [];
    localStorage.setItem(
      "fixongo_jobs",
      JSON.stringify([...existingJobs, job]),
    );

    alert("Service booked successfully!");
  };

  return (
    <div className="providers-page">
      <h2>Available Providers</h2>

      {providers.length === 0 && (
        <p>No providers available for this service.</p>
      )}

      <div className="providers-list">
        {providers.map((p) => {
          // ⭐ Average rating calculation
          const avgRating =
            p.reviews && p.reviews.length
              ? (
                  p.reviews.reduce((sum, r) => sum + r.rating, 0) /
                  p.reviews.length
                ).toFixed(1)
              : p.rating || "New";

          return (
            <div key={p.id} className="provider-card">
              <img src={p.image} alt={p.name} className="provider-avatar" />

              <div className="provider-info">
                <h3>{p.name}</h3>

                <p>
                  ⭐ {avgRating} • {p.jobs || 0} jobs
                </p>

                <p>
                  <b>Starting ₹{p.price}</b>
                </p>

                <button onClick={() => handleBookProvider(p)}>
                  Book Provider
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServiceProviders;
