import { useSearchParams } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import ServicesRow from "../components/ServicesRow";

function normalize(str) {
  return str.toLowerCase().replace(/\s+/g, "");
}

function SearchResults({ onAdd }) {
  const [params] = useSearchParams();
  const rawQuery = params.get("q") || "";

  const query = normalize(rawQuery);

  const allServices = [
    ...servicesData.popular,
    ...servicesData.trending,
    ...servicesData.essentials,
  ];

  const matched = allServices.filter((service) =>
    normalize(service.name).includes(query),
  );

  console.log("QUERY:", rawQuery);
  console.log("MATCHED:", matched);

  return (
    <ServicesRow
      title={`Services related to "${rawQuery}"`}
      onAdd={onAdd}
      servicesOverride={matched}
    />
  );
}

export default SearchResults;
