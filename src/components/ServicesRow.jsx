import ServiceCard from "./ServiceCard";
import { servicesData } from "../data/servicesData";
import "./ServicesRow.css";

function ServicesRow({ title, type, onAdd, servicesOverride }) {
  let services = [];

  // Home rows
  if (type && servicesData[type]) {
    services = servicesData[type];
  }

  // Search override
  if (servicesOverride) {
    services = servicesOverride;
  }

  return (
    <section className="services-row">
      <h3>{title}</h3>

      {services.length === 0 ? (
        <p style={{ paddingLeft: 32 }}>No services found</p>
      ) : (
        <div className="services-scroll">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} onAdd={onAdd} />
          ))}
        </div>
      )}
    </section>
  );
}

export default ServicesRow;
