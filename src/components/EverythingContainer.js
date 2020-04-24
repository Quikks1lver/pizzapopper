import React from "react";
import { connect } from "react-redux";
import PizzaContainer from "./PizzaContainer";
import PapaLouieContainer from "./PapaLouieContainer";
import "../App.css";

function yeetPizzas() {
  return <PizzaContainer />;
}

function winner() {
  return (
    <h1 style={{ color: "blue", fontFamily: "monospace" }}>
      🍕🍕🍕🍕🍕 YOU WON! 🍕🍕🍕🍕🍕{" "}
    </h1>
  );
}

function EverythingContainer(props) {
  return (
    <div className="grid-container">
      <div className="grid-item">
        {props.numPizzas < 10 ? yeetPizzas() : winner()}
      </div>
      <div className="grid-item">
        <PapaLouieContainer />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numPizzas: state.numPizzas,
  };
};

export default connect(mapStateToProps)(EverythingContainer);
