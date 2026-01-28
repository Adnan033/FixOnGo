import "./Hero.css";
import { useSearchSuggestions } from "../hooks/useSearchSuggestions";
import { useNavigate } from "react-router-dom";




function Hero() {

  const search = useSearchSuggestions();
  const navigate = useNavigate();


  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>Find Trusted Home Service Professionals</h1>
        <p>Plumbers, electricians, AC repair & more</p>
        <div className="hero-search">
          <div className="hero-search-box">
            <input
              placeholder="Search for services..."
              value={search.query}
              onChange={(e) => {
                search.setQuery(e.target.value);
                search.setShow(true);
              }}
              onBlur={() => setTimeout(() => search.setShow(false), 150)}
            />

            {search.show && search.query && (
              <div className="search-suggestions">
                {search.results.map((item, i) => (
                  <div
                    key={i}
                    onMouseDown={() => {
                      search.setQuery(item);
                      search.setShow(false);
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => {
              if (!search.query) return;
              navigate(`/search?q=${search.query}`);
            }}
          >
            Search
          </button>

          <button
            className="become-provider-btn"
            onClick={() => navigate("/become-provider")}
          >
            Become a Service Provider
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
