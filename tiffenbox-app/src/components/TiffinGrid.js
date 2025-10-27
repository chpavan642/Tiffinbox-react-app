import React from "react";
import "./TiffenGrid.css";
import TiffinCard from "./TiffinCard";

const tiffins = [
  { id: 1, title: "Veg Thali", desc: "Seasonal veg + rice + roti", price: 149 },
  { id: 2, title: "Non-Veg Thali", desc: "Chicken curry + rice", price: 199 },
  { id: 3, title: "South Special", desc: "Sambar, rasam, rice", price: 159 },
  { id: 4, title: "Light Lunch", desc: "Bowl + salad", price: 129 },
];

export default function TiffinGrid() {
  return (
    <section className="tiffin-grid" id="menu">
      <div className="container">
        <header className="section-header">
          <h2>Popular Plans</h2>
          <p className="section-lead">Choose your daily happiness — fresh, homely, and delivered fast.</p>
        </header>

        <div className="grid">
          {tiffins.map((tiffin) => (
            <TiffinCard key={tiffin.id} item={tiffin} />
          ))}
        </div>
      </div>
    </section>
  );
}
