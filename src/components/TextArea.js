import React, { useEffect } from "react";

export default function TextArea({ text, handleInput }) {
  // useEffect(() => {
  //   console.log(text);
  // }, [text]);

  return (
    <textarea
      type="text"
      value={text}
      onChange={handleInput}
      className="textField"
    ></textarea>
  );
}
