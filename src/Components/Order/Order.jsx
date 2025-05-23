// Order.jsx
import React from "react";
import "./order.css";
import { orderPlatforms, orderDescription } from "../../info";

function Order() {
  return (
    <>
      <div className="order-page">
        <div className="order-header">
          <div className="split-text-container">
            <span className="text-part left">Order</span>
            <span className="text-part right">Online</span>
          </div>
        </div>
      </div>

      <p className="order-desc">
        {orderDescription}
      </p>

      <div className="order-buttons">
        {orderPlatforms.map(({ name, url, brandColor, textColor }) => (
          <a
            key={name}
            className="btn"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ "--brand": brandColor, "--text": textColor }}
          >
            {name}
          </a>
        ))}
      </div>
    </>
  );
}

export default Order;
