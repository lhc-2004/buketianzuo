// AboutPage.jsx
import React from "react";
import "./aboutPage.css";
import {
  aboutPageBukeStoryContent1,
  aboutPageBukeStoryContent2,
  aboutPageBukeStoryContent3,
  aboutPageBukeLogo,
  aboutPagePromise1Logo,
  aboutPagePromise1Title,
  aboutPagePromise1Content,
  aboutPagePromise2Logo,
  aboutPagePromise2Title,
  aboutPagePromise2Content,
  aboutPagePromise3Logo,
  aboutPagePromise3Title,
  aboutPagePromise3Content,
} from "../../info";

const promises = [
  {
    logo: aboutPagePromise1Logo,
    title: aboutPagePromise1Title,
    content: aboutPagePromise1Content,
  },
  {
    logo: aboutPagePromise2Logo,
    title: aboutPagePromise2Title,
    content: aboutPagePromise2Content,
  },
  {
    logo: aboutPagePromise3Logo,
    title: aboutPagePromise3Title,
    content: aboutPagePromise3Content,
  },
];

export default function AboutPage() {
  return (
    <div className="aboutUsContainer">
      <h1 className="AboutTitle">BUKE's STORY</h1>

      <div className="storyContent">
        <p>{aboutPageBukeStoryContent1}</p>
        <p>{aboutPageBukeStoryContent2}</p>
        <p>{aboutPageBukeStoryContent3}</p>
        <img src={aboutPageBukeLogo} alt="BUKE Logo" className="storyIcon" />
      </div>

      <section className="promisesSection">
        <h2 className="promisesTitle">
          <span className="line" />
          Our Promises
          <span className="line" />
        </h2>

        <div className="promisesContainer">
          {promises.map(({ logo, title, content }, i) => (
            <div className="promise" key={i}>
              <img src={logo} alt={`Promise ${i + 1}`} className="promiseIcon" />
              <p className="promiseTitle">{title}</p>
              <p className="promiseDescription">{content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
