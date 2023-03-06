import { useState } from "react";

const FaqQuestion = ({ question, answers }) => {
  const [expand, setExpand] = useState(false);

  const expandHandler = () => {
    setExpand((prev) => !prev);
  };
  return (
    <li className="faqItem">
      <button className="faqQuestion" onClick={expandHandler}>
        <span>{question}</span>
        <svg
          className={expand ? "svg-open" : "svg-closed"}
          id="thin-x"
          viewBox="0 0 26 26"
          focusable="true"
          fill="white"
        >
          <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
        </svg>
      </button>
      <div className={expand ? "answer open" : "answer closed"}>
        <span>
          {answers[0]}
          {answers.length > 1 ? (
            <>
              <br />
              <br /> {answers[1]}
            </>
          ) : (
            ""
          )}
        </span>
      </div>
    </li>
  );
};

export default FaqQuestion;
