import React from "react";
import { connect } from "react-redux";
import {
  TARGET_SCORE,
  LOUIE_THRESHOLD,
  PLANET_THRESHOLD,
  WIZARD_THRESHOLD,
} from "../thresholds";
import {
  yeetPizzas,
  louie,
  wizard,
  planet,
  winner,
  loser,
  tbd,
} from "./expediteRender";
import "../App.css";

function displayHelperCount(name, helperCount) {
  return (
    <h3>
      ~~~ You have {helperCount} {name} helper(s). ~~~
    </h3>
  );
}

function revealHelper(numPizzas, helperCount = 0, threshold, name, callback) {
  return numPizzas > threshold
    ? callback
    : numPizzas >= 0
    ? helperCount > 0
      ? displayHelperCount(name, helperCount)
      : tbd()
    : loser();
}

function EverythingContainer(props) {
  return (
    // Button
    <div className="grid-container">
      <div className="grid-item">
        {props.numPizzas < TARGET_SCORE
          ? props.numPizzas < 0
            ? loser()
            : yeetPizzas()
          : winner()}
      </div>

      {/* Louie */}
      <div className="grid-item">
        {props.numPizzas < TARGET_SCORE
          ? revealHelper(
              props.numPizzas,
              props.numLouies,
              LOUIE_THRESHOLD,
              "Papa Louie",
              louie()
            )
          : winner()}
      </div>

      {/* Wizard Container */}
      <div className="grid-item">
        {props.numPizzas < TARGET_SCORE
          ? revealHelper(
              props.numPizzas,
              props.numWizards,
              WIZARD_THRESHOLD,
              "Cheez Wizard",
              wizard()
            )
          : winner()}
      </div>

      {/* Pizza Planet */}
      <div className="grid-item">
        {props.numPizzas < TARGET_SCORE
          ? revealHelper(
              props.numPizzas,
              props.numPlanets,
              PLANET_THRESHOLD,
              "Pizza Planet",
              planet()
            )
          : winner()}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numPizzas: state.pizza.numPizzas,
    numLouies: state.louie.numLouies,
    numPlanets: state.planet.numPlanets,
    numWizards: state.wizard.numWizards,
  };
};

export default connect(mapStateToProps)(EverythingContainer);
