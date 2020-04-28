import React from "react";
import { makePizza } from "../redux/index";
import { connect, useDispatch } from "react-redux";
import Pizza from "../pictures/pizza.png";
import "../App.css";

const TIME_TARGET = 1000;

function louieMakesPizzas({ numLouies, makePizza }) {
  if (numLouies > 0) {
    const time = TIME_TARGET - 1 * numLouies;
    return setTimeout(() => makePizza(), time);
  }
}

function rocketMakesTrips({ numPlanets, makePizza }) {
  if (numPlanets > 0) {
    const time = TIME_TARGET - 5 * numPlanets;
    return setTimeout(() => makePizza(), time);
  }
}

function PizzaContainer(props) {
  const dispatch = useDispatch();

  return (
    <div>
      <p>
        <strong>pizzas popped: 🍕{props.numPizzas}🍕</strong>
      </p>
      <p>
        {props.numLouies > 0 ? louieMakesPizzas(props) : false}
        {props.numPlanets > 0 ? rocketMakesTrips(props) : false}
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
