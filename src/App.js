import logo from "./logo.svg";
import "./App.css";
import TextArea from "./components/TextArea";
import React, { useState } from "react";

function App() {
  const [text, setText] = useState("text");

  const handleInput = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <TextArea handleInput={handleInput} text={text} />
      <div className="clearButtonDiv">
        <button onClick={() => setText("")} className="clearButton">
          Clear Text
        </button>
      </div>
    </div>
  );
}

export default App;
