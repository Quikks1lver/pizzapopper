import React from "react";
import { connect } from "react-redux";
import PizzaContainer from "./PizzaContainer";
import PapaLouieContainer from "./PapaLouieContainer";
import "../App.css";

function yeetPizzas() {
  return <PizzaContainer />;
}

function louie() {
  return <PapaLouieContainer />;
}

function winner() {
  return (
    <h1 style={{ color: "blue", fontFamily: "monospace" }}>
      🍕🍕🍕🍕🍕 YOU WON! 🍕🍕🍕🍕🍕{" "}
    </h1>
  );
}

function loser() {
  return (
    <h1 style={{ color: "pink", fontFamily: "monospace" }}>
      🤡🤡🤡🤡🤡 YOU LOST! 🤡🤡🤡🤡🤡
    </h1>
  );
}

function tbd() {
  return <h3>~~~ TO BE UNLOCKED ~~~</h3>;
}

function revealHelper(numPizzas, helper = 0, threshold, callback) {
  return numPizzas > threshold
    ? callback
    : numPizzas >= 0
    ? helper > 0
      ? helper
      : tbd()
    : loser();
}

function EverythingContainer(props) {
  return (
    <div className="grid-container">
      <div className="grid-item">
        {props.numPizzas < 30
          ? props.numPizzas < 0
            ? loser()
            : yeetPizzas()
          : winner()}
      </div>
      <div className="grid-item">
        {revealHelper(props.numPizzas, 0, 10, louie())}
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
