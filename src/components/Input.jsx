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
    if (type === "password") {
      if (value.length < 4 || value.length > 60) {
        setInputError(
          "Your password must contain between 4 and 60 characters."
        );
      }
    } else if (type === "email") {
      if (!value.includes("@")) {
        setInputError("Email is required!");
      } else if (value.includes("@") && !/^\S+@\S+\.\S+$/.test(value)) {
        setInputError("Please enter a valid email address");
      } else {
        setInputError("");
      }
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
      <p className="inputError">
        {inputError && <i class="uil uil-times-circle"></i>} {inputError}
      </p>
    </div>
  );
};

export default Input;
