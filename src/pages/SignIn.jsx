import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Input from "../components/Input";

import "./SignIn.scss";
const SignIn = () => {
  const navigate = useNavigate();

  const signInHandler = () => {
    navigate("/home");
  };
  return (
    <div className="signInPage">
      <Banner>
        <div className="signIn-form">
          <h1>Sign In</h1>
          <Input id="email" label="Email address" type="email" />
          <Input id="password" label="Password" type="password" />
          <button onClick={signInHandler}>Sign In</button>
          <div className="checkboxContainer">
            <div>
              <input defaultChecked type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <p>Need help?</p>
          </div>
          <div className="signIn-footer">
            <p>
              New to Netflix? <span>Sign up now.</span>
            </p>
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <span style={{ color: "#1e5fea" }}>Learn more.</span>
            </p>
          </div>
        </div>
        <Footer />
      </Banner>
    </div>
  );
};

export default SignIn;
