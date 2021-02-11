import logo from "./logo.svg";
import "./App.css";
import TextArea from "./components/TextArea";
import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState("1rem");

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const fontSizeChange = (type) => {
    let multiplier;
    type === "increment" ? (multiplier = 1.33) : (multiplier = 0.75);
    let remValue = fontSize.slice(0, -3);
    remValue = JSON.parse(remValue) * multiplier;
    setFontSize(`${remValue}rem`);
  };

  return (
    <div className="App">
      <div className="clearButtonDiv">
        <button
          onClick={() => fontSizeChange("decrement")}
          className="clearButton"
        >
          - Font Size
        </button>
        <button
          onClick={() => fontSizeChange("increment")}
          className="clearButton"
        >
          + Font Size
        </button>
      </div>
      <TextArea handleInput={handleInput} text={text} fontSize={fontSize} />
      <div className="clearButtonDiv">
        <button onClick={() => setText("")} className="clearButton">
          Clear Text
        </button>
      </div>
    </div>
  );
}

export default App;
