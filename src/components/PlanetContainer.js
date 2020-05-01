// I used hooks instead of the connect() method to access the store and dispatch methods.

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { hirePlanet, buyPizza } from "../redux/index";
import { PLANET_CAP, PLANET_COST } from "../thresholds";
import Planet from "../pictures/planet.jpg";

function PlanetContainer() {
  const numPlanets = useSelector((state) => state.planet.numPlanets);
  const dispatch = useDispatch();

  // Working code
  const handleClick = () => {
    if (numPlanets < PLANET_CAP) {
      dispatch(buyPizza(PLANET_COST));
      dispatch(hirePlanet());
    }
  };

  return (
    <div>
      <p>
        Hire rockets to make trips to Pizza Planet to astronomically increase
        pizza production! (cap: {PLANET_CAP})
      </p>
      <button className="button" onClick={() => handleClick()}>
        <img className="img" alt="Pizza Planet" src={Planet} />
      </button>
      <p>{numPlanets} planet(s) are making pizza trips.</p>
    </div>
  );
}

export default PlanetContainer;
