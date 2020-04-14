import React from "react";

const Button = (props) => {
  const B = React.useRef(null);
  const [text, setText] = React.useState("hi");
  const handleChange = (event) => {
    debugger;
    setText(text + "h");
    console.log(B.current);
    B.current = event.target.value;
    props.callback(event.target.value);
  };
  return (
    <>
      {text}
      <input type="text" value={text} onChange={handleChange} ref={B}></input>
      <button>{props.title}</button>
    </>
  );
};

export default Button;
