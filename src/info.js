//Navbar
const navBarBukeLogo = import.meta.env.BASE_URL + "BUKELogo.png";; 

//HomepageVideo
import homepageVideoBakeryVideo from "./assets/BakeryVideoToBeReplace.mp4";
import homepageVideoBUKETianZuoLogo from "./assets/BUKETianZuoLogo.png";
const homepageVideoSlogan = "布渴甜作 不止今甜"

//ScrollingAnimation
const scrollingAnimationText = "BUKE·BAKING·STUDIO";

//MenuBackground
import menuBackgroundImage from "./assets/menuBackground.png";
const menuBackgroundSlogan = "「甜品不止是一种食物 , 它也是一种生活方式」";

//CustomeCakeDescription
const customeCakeDescriptionContent = "我们为每一个特别的时刻提供个性化的蛋糕定制服务。无论是生日、婚礼还是周年纪念，我们都能为您打造独一无二的甜品体验。我们的蛋糕使用新鲜的食材，结合传统的烘焙技艺和现代的创意，力求为您带来独特的味觉享受。";

//CustomeCakeGallery
import cake1 from "/menuDataPic/BakeToBeReplace.jpg";
import cake2 from "/menuDataPic/BakeToBeReplace.jpg";
import cake3 from "/menuDataPic/BakeToBeReplace.jpg";
import cake4 from "/menuDataPic/BakeToBeReplace.jpg";
import cake5 from "/menuDataPic/BakeToBeReplace.jpg";
import cake6 from "/menuDataPic/BakeToBeReplace.jpg";
import cake7 from "/menuDataPic/BakeToBeReplace.jpg";
import cake8 from "/menuDataPic/BakeToBeReplace.jpg";

const customeCakeGalleryImages = [
  cake1, cake2, cake3, cake4,
  cake5, cake6, cake7, cake8,
  cake8, cake8, cake8, cake8
];

//AboutPage
const aboutPageBukeStoryContent1 = "BUKE是一个充满热情和创造力的烘焙工作室，致力于为每一位顾客提供独特而美味的甜品体验。我们的故事始于对烘焙的热爱，经过多年的探索和实践，我们终于实现了这个梦想。我们相信，甜品不仅仅是一种食物，更是一种生活方式，一种表达爱的方式。";
const aboutPageBukeStoryContent2 = "在BUKE，我们的每一款甜品都是用心制作的。我们使用新鲜的食材，结合传统的烘焙技艺和现代的创意，力求为每一位顾客带来独特的味觉享受。无论是经典的法式甜点，还是创新的现代甜品，我们都希望能让您在每一口中感受到我们的用心和热情。";
const aboutPageBukeStoryContent3 = "我们相信，甜品不仅仅是一种食物，更是一种生活方式，一种表达爱的方式。无论是庆祝特殊的时刻，还是日常的小确幸，我们都希望能为您带来甜蜜的享受。我们期待着与您分享我们的故事和甜品，让每一个瞬间都充满甜蜜的回忆。";
import aboutPageBukeLogo from "./assets/BUKETianZuoLogoBlack.png";
import aboutPagePromise1Logo from "./assets/Promise1.png";
const aboutPagePromise1Title = "精选动物奶油"
const aboutPagePromise1Content = "我们承诺使用最优质的, 新鲜的原料，确保每一口都能让你感受到我们的用心.";
import aboutPagePromise2Logo from "./assets/Promise1.png";
const aboutPagePromise2Title = "精选动物奶油"
const aboutPagePromise2Content = "我们承诺使用最优质的, 新鲜的原料，确保每一口都能让你感受到我们的用心.";
import aboutPagePromise3Logo from "./assets/Promise1.png";
const aboutPagePromise3Title = "精选动物奶油"
const aboutPagePromise3Content = "我们承诺使用最优质的, 新鲜的原料，确保每一口都能让你感受到我们的用心.";

//Contact
const contactSlogan = "| We love to hear from you |";
const contactEmail = "bukebakingstudio@gmail.com"
const contactTel = "123-456-7890"
const contactHour = "Mon–Sun 11am – 9:30pm"
const contactAddress = "123 Random Street, Buffalo, NY 12345"

//Order
const orderDescription = "Choose your favorite platform below to get our freshly baked treats delivered right to your door.";
const orderPlatforms = [
  {
    name: "Chowbus",
    url: "https://pos.chowbus.com/online-ordering/store/JOOY-TEA-SHOPPE-5306-8th-ave/15176",
    brandColor: "#df0051",
    textColor: "#fff",
  },
  {
    name: "Grubhub",
    url: "https://www.grubhub.com/restaurant/molly-tea-mo-li-nai-bai-605-east-el-camino-real-sunnyvale/9909936",
    brandColor: "#ff8000",
    textColor: "#fff",
  },
  {
    name: "DoorDash",
    url: "https://www.doordash.com",
    brandColor: "#ff3008",
    textColor: "#fff",
  },
  {
    name: "Hungry Panda",
    url: "https://www.hungrypanda.co",
    brandColor: "#ffdb00",
    textColor: "#000",
  }
];

//Footer 
const footerLogo = import.meta.env.BASE_URL + "FancyBUKELogo.png";

export{
    navBarBukeLogo,

    homepageVideoBakeryVideo,
    homepageVideoBUKETianZuoLogo,
    homepageVideoSlogan,

    scrollingAnimationText,
    
    menuBackgroundImage,
    menuBackgroundSlogan,

    customeCakeDescriptionContent,

    customeCakeGalleryImages,

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

    contactSlogan,
    contactEmail,
    contactTel,
    contactHour,
    contactAddress,

    orderDescription,
    orderPlatforms,

    footerLogo
};

