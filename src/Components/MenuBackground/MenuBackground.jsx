// MenuBackground Component
// This component displays a background image with an overlay and centered text elements.
// It features a delayed reveal animation for the subtext using CSS animations.

import menuBackground from "../../assets/menuBackground.png";
import './MenuBackground.css';
import { useEffect } from "react";

function MenuBackground() {
    useEffect(() => {
        const subtextElement = document.querySelector(".subtext");

        // Delay before showing the text and starting the animation
        setTimeout(() => {
            subtextElement.classList.remove("hidden");
        }, 500); // Delay of 0.5 second
    }, []);

    return (
        <div className="menu-background">
            <img src={menuBackground} alt="Menu Background" />
            <div className="text-container">
                <div className="centered-text">MENU</div>
                <div className="subtext hidden">「甜品不止是一种食物 , 它也是一种生活方式」</div>
            </div>
        </div>
    );
}

export default MenuBackground;