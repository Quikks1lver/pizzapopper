import React from "react";
import { useEffect } from "react";
import { makePizza } from "../redux/index";
import { connect, useDispatch } from "react-redux";
import Pizza from "../pictures/pizza.png";
import "../App.css";

const TIME_TARGET = 1000;
var louieIntervals = [];
var planetIntervals = [];

function louieMakesPizzas({ numLouies, makePizza }) {
  if (numLouies > 0) {
    louieIntervals.forEach(clearTimeout);
    const time = TIME_TARGET - 1 * numLouies;
    const repeat1 = setInterval(() => makePizza(), time);
    louieIntervals.push(repeat1);
  }
}

function rocketMakesTrips({ numPlanets, makePizza }) {
  if (numPlanets > 0) {
    planetIntervals.forEach(clearTimeout);
    const time = TIME_TARGET - 5 * numPlanets;
    const repeat2 = setInterval(() => makePizza(), time);
    planetIntervals.push(repeat2);
  }
}

function PizzaContainer(props) {
  const dispatch = useDispatch();

  useEffect(() => louieMakesPizzas(props), [props.numLouies]);
  useEffect(() => rocketMakesTrips(props), [props.numPlanets]);

  return (
    <div>
      <p>
        <strong>pizzas popped: 🍕{props.numPizzas}🍕</strong>
      </p>
      <button onClick={() => dispatch(makePizza())}>
        <img className="img" src={Pizza} />
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numPizzas: state.pizza.numPizzas,
    numLouies: state.louie.numLouies,
    numPlanets: state.planet.numPlanets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { makePizza: () => dispatch(makePizza()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaContainer);
