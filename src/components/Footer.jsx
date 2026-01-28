import "./Footer.css";



function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h4>FixOnGo</h4>
          <p>Trusted home services at your doorstep.</p>
        </div>

        <div>
          <h4>Services</h4>
          <p>Plumbing</p>
          <p>Electrical</p>
          <p>Appliance Repair</p>
        </div>

        <div>
          <h4>Support</h4>
          <p>Help Center</p>
          <p>Contact Us</p>
          <p>Privacy Policy</p>
        </div>

        <div>
          <h4>Social</h4>
          <p>Instagram</p>
          <p>WhatsApp</p>
          <p>YouTube</p>
        </div>
      </div>

      <div className="footer-bottom">© 2026 FixOnGo. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
