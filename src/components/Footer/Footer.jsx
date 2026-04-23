import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-box">
          <h2>Memora</h2>
          <p>
            Turn your beautiful memories into premium photobooks that last
            forever. We create personalized albums with elegance, emotion,
            and premium quality printing.
          </p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Templates</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Upload Photos</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>Contact Info</h3>
          <ul>
            <li><FaPhoneAlt /> +91 XXXXX XXXXX</li>
            <li><FaEnvelope /> support@memora.com</li>
            <li><FaWhatsapp /> WhatsApp Support Available</li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaWhatsapp /></a>
            <a href="#"><FaEnvelope /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Memora. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;