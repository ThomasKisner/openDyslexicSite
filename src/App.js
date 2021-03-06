import logo from "./logo.svg";
import "./App.css";
import TextArea from "./components/TextArea";
import React, { useState, useEffect } from "react";
import { setThemeMode } from "./styles";
import { useDarkmodeContext } from "./darkMode/DarkModeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as fasMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as farMoon } from "@fortawesome/free-regular-svg-icons";

function App() {
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState("1rem");
  const [bold, setBold] = useState(false);
  const { mode } = useDarkmodeContext();
  const themeMode = mode || "light";
  const css = setThemeMode(themeMode);

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

  const heart = `<3`;

  return (
    <div className="app">
      <div className="clearButtonDiv">
        <h2>i'm proud of you {heart}</h2>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button onClick={() => setBold(!bold)} className="clearButton">
            {!bold ? "Make Bold" : "Remove Bold"}
          </button>
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
        {/* <label className="switch">
          <input type="checkbox" />
          <span
            className="slider round"
            onClick={() => {
              // darkModeChange();
            }}
          ></span>
        </label>
        <FontAwesomeIcon icon={themeMode === "dark" ? fasMoon : farMoon} /> */}
      </div>
      <TextArea
        handleInput={handleInput}
        text={text}
        fontSize={fontSize}
        bold={bold}
      />

      <div className="clearButtonDiv">
        <button onClick={() => setText("")} className="clearButton">
          Clear Text
        </button>
      </div>
    </div>
  );
}

export default App;
