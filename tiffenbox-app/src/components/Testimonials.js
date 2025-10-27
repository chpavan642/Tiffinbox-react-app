import React from "react";

const reviews = [
  {
    id: 1,
    name: "Ajay Kumar",
    text: "TiffinBox makes weekday lunches so easy — fresh, tasty and on time every day.",
    stars: 5,
    time: "2 days ago",
  },
  {
    id: 2,
    name: "Ram Chandra",
    text: "Great portion sizes and home-style flavours. Highly recommended for office meals.",
    stars: 5,
    time: "1 week ago",
  },
  {
    id: 3,
    name: "Sonal",
    text: "Excellent value and the customer support helped me customize my plan.",
    stars: 5,
    time: "3 days ago",
  },
  {
    id: 4,
    name: "Mery Jain",
    text: "Loved the variety and the packaging — everything arrived warm and fresh.",
    stars: 5,
    time: "4 days ago",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="reviews">
      <div className="container">
        <p className="section-subtitle">Testimonials</p>
        <h2>What Our Customers Say</h2>

        <div className="reviews-grid">
          {reviews.map((r) => (
            <article key={r.id} className="review-card">
              <div className="stars">{"★".repeat(r.stars)}</div>
              <p className="review-text">{r.text}</p>
              <div className="review-meta">
                <strong>{r.name}</strong>
                <small className="time">{r.time}</small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
