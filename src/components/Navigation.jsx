import "./Navigation.css";
import { useEffect, useState, useRef } from "react";
import CartButton from "./CartButton";
import { useSearchSuggestions } from "../hooks/useSearchSuggestions";
import { RiSearch2Line } from "react-icons/ri";

import { useNavigate } from "react-router-dom";


function Navigation({
  isLoggedIn,
  onLoginClick,
  onLogout,
  cartCount,
  openCart,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [location, setLocation] = useState("Auto Detect");
  const [openProfile, setOpenProfile] = useState(false);
  const profileRef = useRef(null);

  const search = useSearchSuggestions();
  const navigate = useNavigate();



  // scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // geo (unchanged)
  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
      );
      const data = await res.json();
      setLocation(
        data.address.city ||
          data.address.town ||
          data.address.village ||
          "Your Area",
      );
    });
  }, []);

  // outside click
  useEffect(() => {
    const handler = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setOpenProfile(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span>FixOnGo</span>
        </div>

        {/* nav-search */}
        {scrolled && (
          <div className="nav-search">
            <span className="location">{location}</span>

            <div className="nav-search-box">
              <input
                placeholder="Search for services..."
                value={search.query}
                onChange={(e) => {
                  search.setQuery(e.target.value);
                  search.setShow(true);
                }}
                onBlur={() => setTimeout(() => search.setShow(false), 150)}
              />
              <button
                className="nav-search-btn"
                onClick={() => {
                  if (!search.query) return;
                  navigate(`/search?q=${search.query}`);
                }}
              >
                <RiSearch2Line size={18} />
              </button>

              {search.show && search.query && (
                <div className="search-suggestions">
                  {search.results.length ? (
                    search.results.map((item, i) => (
                      <div
                        key={i}
                        onMouseDown={() => {
                          search.setQuery(item);
                          search.setShow(false);
                        }}
                      >
                        {item}
                      </div>
                    ))
                  ) : (
                    <div className="no-result">No service found</div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
        <div className="nav-actions">
          <CartButton count={cartCount} onClick={openCart} />
          
          {!isLoggedIn ? (
            <button className="login-btn" onClick={onLoginClick}>
              Login
            </button>
          ) : (
            <div className="profile-wrap" ref={profileRef}>
              <button
                className="profile-btn"
                onClick={() => setOpenProfile((p) => !p)}
              >
                👤
              </button>

              {openProfile && (
                <div className="profile-dropdown">
                  <button>My Bookings</button>
                  <button>Help Center</button>
                  <button className="danger" onClick={onLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navigation;
