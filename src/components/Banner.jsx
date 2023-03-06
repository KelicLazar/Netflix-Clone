import LogoSvg from "./LogoSvg";
import "./Banner.scss";

const Banner = ({ actions, children }) => {
  return (
    <div className="banner">
      <img className="background" alt="background" src="bg.jpg"></img>
      <div className="gradient">
        <div className="nav">
          <LogoSvg />
          {actions}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Banner;
