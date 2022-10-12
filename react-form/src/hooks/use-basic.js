import { useState } from "react";

const UseBasic = (validateFunc) => {
  const [input, setInput] = useState("");
  const [inputOnFocus, setInputOnFocus] = useState(false);

  const inputChange = (e) => {
    setInput(e.target.value);
  };

  const inputBlur = () => {
    setInputOnFocus(true);
  };

  const inputIsvalid = validateFunc(input);
  const InputError = !inputIsvalid && inputOnFocus;

  const reset = () => {
    setInput("");
    setInputOnFocus(false);
  };

  return {
    input,
    inputIsvalid,
    inputChange,
    inputBlur,
    reset,
    InputError,
  };
};

export default UseBasic;
