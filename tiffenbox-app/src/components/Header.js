import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fullpage-header">
      <div className="overlay" aria-hidden="true"></div>

      <nav className={`header-navbar ${menuOpen ? "open" : ""}`}>
        <div className="brand">
          <h1 className="header-logo">TiffinBox <span className="logo-emoji">🍱</span></h1>
        </div>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((s) => !s)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <div className={`header-nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#menu" onClick={() => setMenuOpen(false)}>Menu</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      </nav>

      <div className="header-content">
        <h2>Delicious homemade tiffins — freshly prepared & delivered daily</h2>
        <p className="lead">Comfort food made with love by local cooks. Nutritious, affordable, and convenient.</p>
        <div className="cta-row">
          <button className="cta-btn">Explore Menu</button>
          <a className="secondary-cta" href="#contact">Subscribe</a>
        </div>
      </div>
    </header>
  );
}
