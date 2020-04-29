import React from "react";
import PizzaContainer from "./PizzaContainer";
import PapaLouieContainer from "./PapaLouieContainer";
import PlanetContainer from "./PlanetContainer";
import WizardContainer from "./WizardContainer";
import { TARGET_SCORE } from "../thresholds";

export function yeetPizzas() {
  return <PizzaContainer />;
}

export function louie() {
  return <PapaLouieContainer />;
}

export function wizard() {
  return <WizardContainer />;
}

export function planet() {
  return <PlanetContainer />;
}

export function winner() {
  return (
    <h2 style={{ color: "blue", fontFamily: "monospace" }}>
      🍕🍕🍕 YOU WON! {TARGET_SCORE} PIZZAS! 🍕🍕🍕
    </h2>
  );
}

export function loser() {
  return (
    <h2 style={{ color: "pink", fontFamily: "monospace" }}>
      🤡🤡🤡🤡🤡 YOU LOST! 🤡🤡🤡🤡🤡
    </h2>
  );
}

export function tbd() {
  return <h3>~~~ TO BE UNLOCKED ~~~</h3>;
}
