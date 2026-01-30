import "./AuthModal.css";

function AuthModal({ open, type, onClose }) {
  if (!open) return null;

  return (
    <div className="auth-overlay">
      <div className="auth-modal">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <h2>{type === "login" ? "Login" : "Sign Up"}</h2>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        {type === "signup" && <input type="text" placeholder="Phone Number" />}

        <button className="submit-btn">
          {type === "login" ? "Login" : "Create Account"}
        </button>
      </div>
    </div>
  );
}

export default AuthModal;
