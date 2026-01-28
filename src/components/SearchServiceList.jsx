// import { servicesData } from "../data/servicesData";
// import "./SearchServiceList.css";

// function SearchServiceList({ query, onAdd }) {
//   const allServices = [
//     ...servicesData.popular,
//     ...servicesData.trending,
//     ...servicesData.essentials,
//   ];

//   const results = allServices.filter((s) =>
//     s.name.toLowerCase().includes(query.toLowerCase()),
//   );

//   if (!results.length) {
//     return <p style={{ padding: 24 }}>No services found</p>;
//   }

//   return (
//     <div className="search-list">
//       {results.map((service) => (
//         <div key={service.id} className="search-item">
//           <img src={service.image} alt={service.name} />
//           <div>
//             <h4>{service.name}</h4>
//             <p>₹{service.price}</p>
//             <button onClick={() => onAdd(service)}>Add</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default SearchServiceList;
