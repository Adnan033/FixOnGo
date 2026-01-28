import { googleLogin } from "../auth/googleLogin";
import "./LoginModal.css";

function LoginModal({ open, onClose }) {
  if (!open) return null;

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      onClose();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-modal">
        <h2>Login to FixOnGo</h2>

        <button className="google-btn" onClick={handleGoogleLogin}>
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="google"
          />
          Continue with Google
        </button>

        <button className="close" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default LoginModal;
