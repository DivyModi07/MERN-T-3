import React, { useState } from "react";

function US7() {
  const [headingText, setHeadingText] = useState("LJ University");
  const [color, setColor] = useState("red");
  const [showReactText, setShowReactText] = useState(true);
  const [hideShowButtonText, setHideShowButtonText] = useState("Hide");

  const handleChangeText = () => {
    setHeadingText((prev) =>
      prev === "LJ University" ? "Welcome students" : "LJ University"
    );
  };


  const handleChangeColor = () => {
    setColor((prev) => (prev === "red" ? "blue" : "red"));
  };


  const handleHideShow = () => {
    if (showReactText) {
      setShowReactText(false);
      setHideShowButtonText("Show");
    } else {
      setShowReactText(true);
      setHideShowButtonText("Hide");
    }
  };

  return (
    <div>
      <h1 style={{ color }}>{headingText}</h1>
      {showReactText && <h2>React Js Hooks</h2>}

      <button onClick={handleChangeText}>Change Text</button>
      <button onDoubleClick={handleChangeColor}>Change Color</button>
      <button onClick={handleHideShow}>{hideShowButtonText}</button>
    </div>
  );
}

export default US7;
