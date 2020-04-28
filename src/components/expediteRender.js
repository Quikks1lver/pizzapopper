import React from "react";
import PizzaContainer from "./PizzaContainer";
import PapaLouieContainer from "./PapaLouieContainer";
import PlanetContainer from "./PlanetContainer";
import { TARGET_SCORE } from "../thresholds";

export function yeetPizzas() {
  return <PizzaContainer />;
}

export function louie() {
  return <PapaLouieContainer />;
}

export function planet() {
  return <PlanetContainer />;
}

export function winner() {
  return (
    <h1 style={{ color: "blue", fontFamily: "monospace" }}>
      🍕🍕🍕 YOU WON! {TARGET_SCORE} PIZZAS! 🍕🍕🍕
    </h1>
  );
}

export function loser() {
  return (
    <h1 style={{ color: "pink", fontFamily: "monospace" }}>
      🤡🤡🤡🤡🤡 YOU LOST! 🤡🤡🤡🤡🤡
    </h1>
  );
}

export function tbd() {
  return <h3>~~~ TO BE UNLOCKED ~~~</h3>;
}
