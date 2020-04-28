import React from "react";
import "./App.css";

// In-line styling with JSX requires a JS object with camelcase attributes.
const headerStyle = {
  color: "yellow",
  flex: "auto",
  textAlign: "center",
  fontFamily: "monospace",
  fontSize: "60px",
  padding: "60px",
  borderColor: "blue",
  borderStyle: "dotted",
};

function Header() {
  return (
    <div>
      <h1 style={headerStyle}>
        <strong> 🍕 P I Z Z A · P O P P E R 🍕 </strong>
      </h1>
    </div>
  );
}

export default Header;
