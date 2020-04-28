// I used hooks instead of the connect() method to access the store and dispatch methods.

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makePizza, buyPizza, hireLouie } from "../redux/index";
import Louie from "../pictures/louie.jpeg";
import { LOUIE_CAP, LOUIE_COST } from "../thresholds";

function PapaLouieContainer() {
  const numLouies = useSelector((state) => state.louie.numLouies);
  const dispatch = useDispatch();

  // Working code
  const handleClick = () => {
    if (numLouies < LOUIE_CAP) {
      dispatch(buyPizza(LOUIE_COST));
      dispatch(hireLouie());
    }
  };

  return (
    <div>
      <p>Hire Papa Louie to help you out! (cap: {LOUIE_CAP})</p>
      <button className="button" onClick={() => handleClick()}>
        <img className="img" src={Louie} />
      </button>
      <p>{numLouies} Louie(s) are baking pizza.</p>
    </div>
  );
}

export default PapaLouieContainer;
