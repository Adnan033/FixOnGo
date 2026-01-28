import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import ServicesRow from "./components/ServicesRow";
import FloatingCart from "./components/FloatingCart";
import Toast from "./components/Toast";
import Footer from "./components/Footer";

import SearchResults from "./pages/SearchResults";
import BecomeProvider from "./pages/BecomeProvider";

import Login from "./auth/Login";
import Signup from "./auth/Signup";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("fixongo_user"),
  );

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
    setShowSignup(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("fixongo_user");
    setIsLoggedIn(false);
  };

  return (
    <>
      <Navigation
        isLoggedIn={isLoggedIn}
        onLoginClick={() => setShowLogin(true)}
        onLogout={handleLogout}
      />

      {/* 🔥 BLUR BACKGROUND WHEN MODAL OPEN */}
      <div className={showLogin || showSignup ? "blurred" : ""}>
        <Hero />
        <ServicesRow title="Popular Services" type="popular" />
        <ServicesRow title="Trending Near You" type="trending" />
        <ServicesRow title="Home Essentials" type="essentials" />
        <Footer />
      </div>

      {/* 🔐 LOGIN MODAL */}
      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onSignup={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
          onLogin={handleLoginSuccess}
        />
      )}

      {/* 🆕 SIGNUP MODAL */}
      {showSignup && (
        <Signup
          onClose={() => setShowSignup(false)}
          onLogin={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
        />
      )}
    </>
  );
}

export default App;
