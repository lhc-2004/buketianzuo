// src/Components/Featured/Featured.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { featuredItems } from "../../info";
import "./featured.css";

export default function Featured() {
  const itemRefs = useRef([]);

  useEffect(() => {
    // Observe when items enter viewport to trigger animation
    const observer = new IntersectionObserver(
      (entries, obs) => {
        if (entries.some(entry => entry.isIntersecting)) {
          itemRefs.current.forEach(el => el?.classList.add("visible"));
          obs.disconnect();
        }
      },
      { threshold: 1 }
    );

    // Attach observer to each item
    itemRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="featured-page">
      <h2 className="featured-title">BUKE FEATURED</h2>
      <div className="featured-items">
        {featuredItems.map((item, idx) => (
          <div
            className="featured-item"
            key={item.title}
            ref={el => (itemRefs.current[idx] = el)}
          >
            <div className="featured-image-container">
              <img src={item.image} alt={item.title} className="featured-image" />
            </div>
            <div className="item-info">
              <p className="item-title">- {item.title} -</p>
              <p className="item-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Scroll to top when navigating to full menu */}
      <Link to="/menu" className="browse-menu-button" onClick={() => window.scrollTo(0, 0)}>
        Browse Full Menu
      </Link>
    </section>
  );
}