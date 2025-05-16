// CustomeCakeDescription.jsx
import React from "react";
import "./customeCakeDescription.css";
import { customeCakeDescriptionLogo } from "../../info";

function CustomeCakeDescription() {
  return (
    <div className="cake-description-container">
      <img
        src={customeCakeDescriptionLogo}
        alt="Custom Cake Header"
        className="header-image"
      />

      <div className="content">
        <h2>关于定制蛋糕:</h2>
        <ul>
          <li>定制蛋糕不接受急单，需要至少提前3天预定，越复杂的款式越需要提前预定。</li>
          <li>尽量不要预定急单，时间越短可预定的款式越少，由衷的希望客人们都可以选到自己心仪的蛋糕款式开心度过一年一次的生日。</li>
          <li>欢迎来图定制，还原度80%~90%，追求百分百还原度的顾客请谨慎购买。</li>
          <li>也可以提供需求想法，让客服推荐蛋糕款式。</li>
          <li>根据所选蛋糕款式收费，复杂程度不同，价格也会不同，欢迎带图询价。</li>
          <li className="warning">
            因生日蛋糕专属于私人订制具有唯一性，全款支付后即预定成功，未付款视未订，感谢理解~
          </li>
          <li>无法临时更改款式，如需更改需提前告知。</li>
          <li>谢绝还价，希望尊重每一位烘焙人的劳动成果。</li>
          <li>不可临时取消。</li>
        </ul>

        <p className="warning">
          **未付款订到一半不回的顾客，视不订。不会发消息提醒以免打扰到大家，请大家理解～**
        </p>

        <h2>关于蛋糕为什么要提前预定:</h2>
        <ol>
          <li>为了确保蛋糕新鲜，蛋糕没有现货，下单后才开始制作。</li>
          <li>蛋糕胚烤制冷却、打发奶油、定型等要花好几个小时，充足时间才能保证品质。</li>
          <li>翻糖装饰款需提前一天以上风干；鲜花款需提前1–2天采购；插件款也需准备配件。</li>
        </ol>

        <p>越早预定款式越多，紧急订单可选款式会受限。</p>
        <p>为保证品质，每日订制蛋糕数量有限，满单即止，务必提前预定。</p>
        <p>感谢您的理解与支持！</p>
      </div>
    </div>
  );
}

export default CustomeCakeDescription;

