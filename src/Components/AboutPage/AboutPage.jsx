import './aboutPage.css';
import BUKElogo from "../../assets/BUKETianZuoLogoBlack.png";

const AboutPage = () => {
    return (
        <div className="aboutUsContainer">
            <h1 className="AboutTitle">BUKE's STORY</h1>
            <div className="storyContent">
                <p>
                    blah blah blah blah blah blah blah blah blah blah 
                </p>
                <p>
                    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
                </p>
                <p>
                    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
                </p>
                <img src={BUKElogo} alt="BUKE Logo" className="storyIcon" />
            </div>

            <div className="promisesSection">
                <h2 className="promisesTitle">
                    <span className="line"></span>
                    Our Promises
                    <span className="line"></span>
                </h2>
                <div className="promisesContainer">
                    <div className="promise">
                        <div className="circle"></div>
                        <p>Promise 1</p>
                        <p className="promiseDescription">
                            We are committed to delivering the highest quality in everything we do, ensuring excellence at every step.
                        </p>
                    </div>
                    <div className="promise">
                        <div className="circle"></div>
                        <p>Promise 2</p>
                        <p className="promiseDescription">
                            Integrity is at the core of our work. We strive to build trust and transparency with everyone we serve.
                        </p>
                    </div>
                    <div className="promise">
                        <div className="circle"></div>
                        <p>Promise 3</p>
                        <p className="promiseDescription">
                            Building a strong community is our mission, connecting and empowering people through shared goals.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
