import React from "react";
import bg from "../assests/Header.jfif";

export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="Hero">
      <div className="hero-bg" style={{ backgroundImage: `url(${bg})` }} aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-content">
          <h1>Fresh homemade tiffins — delivered with care</h1>
          <p className="lead">Healthy, balanced meals prepared by local cooks and brought straight to your doorstep.</p>

          <div className="cta-row">
            <button className="cta-btn">Explore Menu</button>
            <a className="secondary-cta" href="#menu">View Plans</a>
          </div>
        </div>
      </div>
    </section>
  );
}
