// HomepageVideo.jsx
// Displays a fullscreen background video with an overlay and slogan near the end
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  homepageVideoBakeryVideo,
  homepageVideoBUKETianZuoLogo,
  homepageVideoSlogan,
} from "../../info";
import "./homepageVideo.css";

export default function HomepageVideo() {
  const videoRef = useRef(null);     // Reference to the <video> element
  const overlayRef = useRef(null);   // Reference to the overlay div
  const sloganRef = useRef(null);    // Reference to the slogan container

  useEffect(() => {
    const video = videoRef.current;
    const showSloganBeforeEnd = 5; // seconds before video end to show overlay

    // When video time updates, display overlay near the end
    const onTimeUpdate = () => {
      if (video.currentTime >= video.duration - showSloganBeforeEnd) {
        overlayRef.current?.classList.add("visible");
      }
    };

    // After overlay fades in, reveal slogan
    const onOverlayTransitionEnd = () => {
      sloganRef.current?.classList.add("visible");
    };

    video.addEventListener("timeupdate", onTimeUpdate);
    overlayRef.current?.addEventListener("transitionend", onOverlayTransitionEnd);

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      overlayRef.current?.removeEventListener(
        "transitionend",
        onOverlayTransitionEnd
      );
    };
  }, []);

  return (
    <div className="homepageVideo">
      {/* Background video */}
      <video
        ref={videoRef}
        src={homepageVideoBakeryVideo}
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
      />

      {/* Semi-transparent overlay that appears near video end */}
      <div ref={overlayRef} className="blackOverlay" />

      {/* Slogan and logo reveal container */}
      <div ref={sloganRef} className="slogan">
        <img
          src={homepageVideoBUKETianZuoLogo}
          alt="BUKE Tian Zuo Logo"
          className="sloganImage"
        />
        <h1>{homepageVideoSlogan}</h1>
        <Link
          to="/menu"
          className="menuLink"
          onClick={() => window.scrollTo(0, 0)}
        >
          View Our Menu
        </Link>
      </div>
    </div>
  );
}