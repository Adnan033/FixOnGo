import { useNavigate } from "react-router-dom";

function ServiceCard({ service }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/service/${service.id}`);
  };

  return (
    <div className="service-card" onClick={handleClick}>
      <img src={service.image} alt={service.name} />

      <div className="service-overlay">
        <h4>{service.name}</h4>
        <p>Starting ₹{service.price}</p>

        <button>View Providers</button>
      </div>
    </div>
  );
}

export default ServiceCard;
