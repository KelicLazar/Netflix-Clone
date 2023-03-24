import { useNavigate } from "react-router-dom";
import Input from "./Input";
import "./WelcomeContent.scss";

const WelcomeContent = () => {
  const navigate = useNavigate();
  return (
    <div className="content">
      <h1>Unlimited movies, TV shows, and more.</h1>
      <h2>This is not real Netflix.</h2>
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="form">
        <Input id="email" label="Email address" type="email" />

        <button
          className="getStarted"
          onClick={() => {
            navigate("/signin");
          }}
        >
          Get Started
          <i class="uil uil-angle-right-b"></i>
        </button>
      </div>
    </div>
  );
};

export default WelcomeContent;
