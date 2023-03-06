import { useState } from "react";
import "./Input.scss";

const Input = ({ id, label, type }) => {
  const [value, setValue] = useState("");
  const [inputError, setInputError] = useState("");

  const inputChangeHandler = (event) => {
    setValue(event.target.value);
    inputBlurHandler();
  };

  const inputBlurHandler = () => {
    if (!value.includes("@")) {
      setInputError("Email is required!");
    } else if (value.includes("@") && !/^\S+@\S+\.\S+$/.test(value)) {
      setInputError("Please enter a valid email address");
    } else {
      setInputError("");
    }
  };
  return (
    <div className="inputContainer">
      <input
        className={inputError ? "error" : ""}
        onChange={inputChangeHandler}
        onBlur={inputBlurHandler}
        type={type}
        id={id}
        placeholder=" "
      />
      <label htmlFor={id}>{label}</label>
      <p className="inputError">{inputError}</p>
    </div>
  );
};

export default Input;
