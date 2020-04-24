import React from "react";
import { connect } from "react-redux";
import PizzaContainer from "./PizzaContainer";
import "../App.css";

function yeetPizzas() {
  return <PizzaContainer />;
}

function winner() {
  return <h1 style={{ color: "blue" }}>YOU WON!</h1>;
}

function EverythingContainer(props) {
  return (
    <div className="grid-container">
      <div className="grid-item">
        {props.numPizzas < 10 ? yeetPizzas() : winner()}
      </div>
      <div className="grid-item"> hello </div>
      <div className="grid-item"> hello2 </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numPizzas: state.numPizzas,
  };
};

export default connect(mapStateToProps)(EverythingContainer);
