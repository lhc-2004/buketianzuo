import React from "react";
import HomePageVideo from "../Components/HomepageVideo/HomepageVideo";
import ScrollingAnimation from "../Components/ScrollingAnimation/ScrollingAnimation.jsx";
import Featured from "../Components/Featured/Featured.jsx";

function Home() {
    return (
        <div>
            <HomePageVideo />
            <ScrollingAnimation />
            <Featured />
        </div>
    );
}

export default Home;