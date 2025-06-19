import React from "react";
import "./customeCakeDescription.css";
import instagramIcon from "../../assets/Instagram_icon.png";
import wechatIcon from "../../assets/Wechat_icon.png";
import emailIcon from "../../assets/Email_icon.png";
import { customeCakeDescriptionContent } from "../../info";

function CustomeCakeDescription() {
  return (
    <div className="cake-description-container">
      <div className="content">
        <h2>We do personalized cake</h2>
        <p>
          { customeCakeDescriptionContent }
        </p>

        <div className="contact-info">
          <p>If you're interested, please contact us:</p>
          <ul>
            <li>
              <img src={instagramIcon} alt="Instagram" className="icon" />
              @bukebaking
            </li>
            <li>
              <img src={wechatIcon} alt="WeChat" className="icon" />
              bukebaking
            </li>
            <li>
              <img src={emailIcon} alt="Email" className="icon" />
              bukebaking@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CustomeCakeDescription;
