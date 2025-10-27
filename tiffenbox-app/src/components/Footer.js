import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">Subscribe to our Newsletter</h2>
        <p className="footer-subtitle">Stay updated with our latest meals and offers.</p>

        <div className="subscribe-box">
          <input type="email" placeholder="Enter your email address" />
          <button>Subscribe →</button>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📞 +91 12345 67890</p>
          <p>✉️ hello@tiffinbox.example</p>
          <p>📍 Road No 1, Banjara hills , Hyderabad</p>
        </div>

        <div className="footer-links">
          <a href="#menu">Menu</a>
          <a href="#order">Order Online</a>
          <a href="#book">Book a Table</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-bottom">
          <small>© {new Date().getFullYear()} TiffinBox. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}
