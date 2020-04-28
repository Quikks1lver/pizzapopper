// I used hooks instead of the connect() method to access the store and dispatch methods.

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makePizza, buyPizza, hireLouie } from "../redux/index";
import Louie from "../pictures/louie.jpeg";

const PAPA_LOUIE_COST = 3;
const PAPA_LOUIE_RATE = 1;

function PapaLouieContainer() {
  const numPizzas = useSelector((state) => state.pizza.numPizzas);
  const numLouies = useSelector((state) => state.louie.numLouies);
  const dispatch = useDispatch();

  // Working code
  const handleClick = () => {
    if (numLouies < 101) {
      dispatch(buyPizza(PAPA_LOUIE_COST));
      dispatch(hireLouie());
    }
  };

  return (
    <div>
      <p>Hire Papa Louie to help you out! (cap: 200)</p>
      <p>{numLouies} Louie(s) are baking pizza.</p>
      <button className="button" onClick={() => handleClick()}>
        <img className="img" src={Louie} />
      </button>
    </div>
  );
}

export default PapaLouieContainer;
