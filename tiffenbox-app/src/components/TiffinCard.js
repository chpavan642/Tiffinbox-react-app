import React, { useState } from "react";
import img1 from "../assests/cs-1.jfif";
import img2 from "../assests/cs-2.jfif";

const IMAGES = {
  1: img1,
  2: img2,
  3: img1,
  4: img2,
};

export default function TiffinCard({ item }) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="tiffin-card" aria-labelledby={`t-${item.id}`}>
      <div
        className="card-media"
        style={{ backgroundImage: `url(${IMAGES[item.id]})` }}
        role="img"
        aria-label={item.title}
      />

      <div className="card-body">
        <h3 id={`t-${item.id}`}>{item.title}</h3>
        <p className="muted">{item.desc}</p>

        <div className="card-footer">
          <div className="price">₹{item.price}</div>

          <div className="card-actions">
            <button
              className={`like-btn ${liked ? "liked" : ""}`}
              aria-pressed={liked}
              onClick={() => setLiked(!liked)}
              title={liked ? "Remove from favourites" : "Add to favourites"}
            >
              {liked ? "♥" : "♡"}
            </button>

            <button className="add-btn">Add</button>
          </div>
        </div>
      </div>
    </article>
  );
}
