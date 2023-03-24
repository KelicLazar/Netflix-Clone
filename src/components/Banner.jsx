import LogoSvg from "./LogoSvg";
import "./Banner.scss";
import Nav from "./Nav";
import LanguageMenu from "./LanguageMenu";
import { useLocation, useNavigate } from "react-router-dom";

const Banner = ({ actions, children, navRightSide, navLogo, navLeftSide }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="banner">
      <div className="imgDiv">
        {/* <img
          className="background"
          srcset="https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/13c128a8-69b5-4d6b-85a7-a8e0f80874ac/RS-en-20230227-popsignuptwoweeks-perspective_alpha_website_large.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/13c128a8-69b5-4d6b-85a7-a8e0f80874ac/RS-en-20230227-popsignuptwoweeks-perspective_alpha_website_large.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/13c128a8-69b5-4d6b-85a7-a8e0f80874ac/RS-en-20230227-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
          alt=""
        ></img> */}
        <img
          className="background"
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/8f12b4f0-a894-4d5b-9c36-5ba391c63fbe/70094d17-263c-4623-9002-f25f2d23c0c0/RS-en-20230320-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/8f12b4f0-a894-4d5b-9c36-5ba391c63fbe/70094d17-263c-4623-9002-f25f2d23c0c0/RS-en-20230320-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/8f12b4f0-a894-4d5b-9c36-5ba391c63fbe/70094d17-263c-4623-9002-f25f2d23c0c0/RS-en-20230320-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
          // srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/8f12b4f0-a894-4d5b-9c36-5ba391c63fbe/70094d17-263c-4623-9002-f25f2d23c0c0/RS-hr-20230320-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/8f12b4f0-a894-4d5b-9c36-5ba391c63fbe/70094d17-263c-4623-9002-f25f2d23c0c0/RS-hr-20230320-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/8f12b4f0-a894-4d5b-9c36-5ba391c63fbe/70094d17-263c-4623-9002-f25f2d23c0c0/RS-hr-20230320-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
          alt=""
        ></img>
      </div>
      <div className="gradient"></div>
      <Nav logo rightSide={navRightSide} />
      {children}
    </div>
  );
};

export default Banner;
