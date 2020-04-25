// I used hooks instead of the connect() method to access the store and dispatch methods.

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makePizza, buyPizza, hireLouie } from "../redux/index";
import Louie from "../pictures/louie.jpeg";

const PAPA_LOUIE_COST = 3;
const PAPA_LOUIE_RATE = 2;

function PapaLouieContainer() {
  const numPizzas = useSelector((state) => state.pizza.numPizzas);
  const numLouies = useSelector((state) => state.louie.numLouies);
  const dispatch = useDispatch();

  // Working code
  const handleClick = () => {
    dispatch(buyPizza(PAPA_LOUIE_COST));
    dispatch(hireLouie());
  };

  const doit = () => {
    if (numLouies > 0) {
      setTimeout(() => dispatch(makePizza(PAPA_LOUIE_RATE)), 2500);
    }
  };

  return (
    <div>
      <p>
        Papa Louie can help you out! He makes a pizza every 10 seconds. Hire
        clones of him to help you out! {doit()}
      </p>
      <button className="button" onClick={() => handleClick()}>
        <img className="img" src={Louie} />
      </button>
    </div>
  );
}

export default PapaLouieContainer;
