import React, { useEffect } from "react";

export default function TextArea({ text, handleInput, fontSize, bold }) {
  // useEffect(() => {
  //   console.log(text);
  // }, [text]);

  return (
    <textarea
      type="text"
      value={text}
      onChange={handleInput}
      className={`textField ${bold ? "bold" : ""}`}
      style={{ fontSize: fontSize }}
      placeholder="....input text here"
    ></textarea>
  );
}
