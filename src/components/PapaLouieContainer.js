// I used hooks instead of the connect() method to access the store and dispatch methods.

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makePizza, buyPizza } from "../redux/index";
import Louie from "../pictures/louie.jpeg";

function PapaLouieContainer() {
  const pizzas = useSelector((state) => state.numPizzas);
  const dispatch = useDispatch();

  return (
    <div>
      <p>
        Papa Louie can help you out! He makes a pizza every 10 seconds. Hire
        clones of him to help you out!
      </p>
      <button className="button" onClick={() => dispatch(buyPizza(10))}>
        <img className="img" src={Louie} />
      </button>
    </div>
  );
}

export default PapaLouieContainer;
