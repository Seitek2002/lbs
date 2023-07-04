import React, { useState } from "react";
import "./Navigation.scss";

const Navigation = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const Typography = {
    color: "#222324",
    fontSize: "18px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "28px",
    letterSpacing: "-0.4px",
  };

  return (
    <div className="navigation">
      <button
        style={Typography}
        className={`navigation-button ${activeButton === 1 ? "active" : ""}`}
        onClick={() => handleButtonClick(1)}
      >
        Новые
      </button>
      <button
        style={Typography}
        className={`navigation-button ${activeButton === 2 ? "active" : ""}`}
        onClick={() => handleButtonClick(2)}
      >
        Доставленные
      </button>
    </div>
  );
};

export default Navigation;
