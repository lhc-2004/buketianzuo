import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import BakeryVideo from "../../assets/BakeryVideoToBeReplace.mp4";
import BUKETianZuoLogo from "../../assets/BUKETianZuoLogo.png"

import "./homepageVideo.css"

function HomepageVideo() {
    const videoRef = useRef(null);
    const overlayRef = useRef(null);
    const sloganRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        const showSloganBeforeEnd = 5; // Number of seconds before the video ends

        const handleTimeUpdate = () => {
            if (video.currentTime >= video.duration - showSloganBeforeEnd) {
                if (overlayRef.current) {
                    overlayRef.current.classList.add("visible");
                }
            }
        };

        const handleOverlayTransitionEnd = () => {
            if (sloganRef.current) {
                sloganRef.current.classList.add("visible");
            }
        };

        video.addEventListener("timeupdate", handleTimeUpdate);

        if (overlayRef.current) {
            overlayRef.current.addEventListener("transitionend", handleOverlayTransitionEnd);
        }

        return () => {
            video.removeEventListener("timeupdate", handleTimeUpdate);

            if (overlayRef.current) {
                overlayRef.current.removeEventListener("transitionend", handleOverlayTransitionEnd);
            }
        };
    }, []);

    return (
        <div className="homepageVideo">
            <video ref={videoRef} src={BakeryVideo} autoPlay loop muted />
            <div ref={overlayRef} className="blackOverlay"></div>
            <div ref={sloganRef} className="slogan">
                <img src={BUKETianZuoLogo} alt="BUKE Tian Zuo Logo" className = "sloganImage"/>
                <h1>布渴甜作 不止今甜</h1>
                <Link to="/menu" className="menuLink">
                    View Our Menu
                </Link>
            </div>
        </div>
    );
}

export default HomepageVideo;