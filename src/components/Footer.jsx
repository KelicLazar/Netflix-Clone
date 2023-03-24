import "./Footer.scss";
import LanguageMenu from "./LanguageMenu";

const Footer = ({ signIn, browse }) => {
  return (
    <div className={browse ? " footerContainer browse" : "footerContainer"}>
      <p>Questions? Contact us.</p>
      <ul>
        <li>FAQ</li>
        <li>Help Center</li>
        <li>Account</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Ways to Watch</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
        <li>Speed Test</li>
        <li>Legal Notices</li>
        <li>Only on Netflix</li>
      </ul>
      <LanguageMenu />
      <p>Netflix Serbia</p>
    </div>
  );
};

export default Footer;
