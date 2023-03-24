import FaqQuestion from "./FaqQuestion";
import Input from "./Input";
import "./Faq.scss";
import { useNavigate } from "react-router-dom";

const Faq = ({ questions }) => {
  const navigate = useNavigate();
  return (
    <div className="faqContainer">
      <h1>Frequently Asked Questions</h1>
      <ul>
        {questions.map((item) => {
          return <FaqQuestion question={item.question} answers={item.answer} />;
        })}
      </ul>
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="form">
        <Input id="email" label="Email address" type="email" />

        <button
          onClick={() => {
            navigate("/signin");
          }}
          className="getStarted"
        >
          Get Started
          <i class="uil uil-angle-right-b"></i>
        </button>
      </div>
    </div>
  );
};

export default Faq;
