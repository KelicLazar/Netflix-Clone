import LogoSvg from "./LogoSvg";
import "./Banner.scss";
import Footer from "./Footer";

const Banner = ({ actions, children }) => {
  return (
    <div className="banner">
      <div className="imgDiv">
        <img
          className="background"
          srcset="https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/13c128a8-69b5-4d6b-85a7-a8e0f80874ac/RS-en-20230227-popsignuptwoweeks-perspective_alpha_website_large.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/13c128a8-69b5-4d6b-85a7-a8e0f80874ac/RS-en-20230227-popsignuptwoweeks-perspective_alpha_website_large.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/13c128a8-69b5-4d6b-85a7-a8e0f80874ac/RS-en-20230227-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
          alt=""
        ></img>
      </div>
      <div className="gradient"></div>
      <div className="nav">
        <LogoSvg />
        {actions}
      </div>
      {children}
    </div>
  );
};

export default Banner;
