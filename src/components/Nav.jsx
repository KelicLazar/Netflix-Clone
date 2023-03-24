import { useLocation } from "react-router-dom";
import LogoSvg from "./LogoSvg";
import "./Nav.scss";

const Nav = ({ rightSide, leftSide, width, logo }) => {
  const location = useLocation();
  const navClasses = {
    "/welcome": "nav welcome",
    "/home": "nav home",
    "/browse": "nav browse",
    "/signin": "nav signin",
  };

  console.log(location);
  return (
    <div className={navClasses[location.pathname]}>
      {logo && <LogoSvg />}
      {/* <ul className="navHelper">
        <li>/welcome</li>
        <li>/signin</li>
        <li>home</li>
        <li>browse</li>
      </ul> */}
      {leftSide && <div className="leftSide">{leftSide}</div>}
      {rightSide && <div className="rightSide">{rightSide}</div>}
    </div>
  );
};

export default Nav;
