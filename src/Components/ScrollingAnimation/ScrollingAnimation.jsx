// ScrollingAnimation.jsx
// Creates an infinite horizontal scrolling text animation
import React, { useRef, useEffect } from "react";
import { scrollingAnimationText } from "../../info";
import "./scrollingAnimation.css";

export default function ScrollingAnimation() {
  const wrapperRef = useRef(null); // Container for scrolling elements
  const contentRef = useRef(null); // Original content to clone
  const speed = 80;                // Scrolling speed in pixels per second

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;

    // Clone original content to create seamless loop
    const clone = content.cloneNode(true);
    wrapper.appendChild(clone);

    // Calculate width and gap for looping distance
    const contentWidth = content.getBoundingClientRect().width;
    const style = window.getComputedStyle(wrapper);
    const gap = parseFloat(style.gap || 0);
    const loopWidth = contentWidth + gap;

    let startTime = null;
    let frameId;

    // Animation step: translate wrapper based on elapsed time
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000; // Convert ms to seconds
      const distance = (elapsed * speed) % loopWidth;
      wrapper.style.transform = `translateX(-${distance}px)`;
      frameId = requestAnimationFrame(step);
    }

    frameId = requestAnimationFrame(step);

    // Cleanup on unmount
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Prepare multiple items to fill content
  const items = Array.from({ length: 5 }, (_, i) => (
    <span key={i} className="scrollItem">{scrollingAnimationText}</span>
  ));

  return (
    <div className="infiniteScrollWrapper">
      <div className="infiniteScroll" ref={wrapperRef}>
        <div className="scrollContent" ref={contentRef}>
          {items}
        </div>
      </div>
    </div>
  );
}