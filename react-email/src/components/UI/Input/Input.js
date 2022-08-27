import React from "react";

function Input(props) {
  return (
    <div className={props.className}>
      <label forHtml={props.type}>{props.label}</label>
      <input
        type={props.type}
        id={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      ></input>
    </div>
  );
}

export default Input;
