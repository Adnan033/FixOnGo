// src/components/ServiceCard.jsx

function ServiceCard({ service, onAdd }) {
  return (
    <div className="service-card">
      <img src={service.image} alt={service.name} />

      <div className="service-overlay">
        <h4>{service.name}</h4>
        <p>₹{service.price}</p>

        <button onClick={() => onAdd(service)}>+ Add</button>
      </div>
    </div>
  );
}

export default ServiceCard;
