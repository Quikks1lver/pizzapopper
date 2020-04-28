import React from "react";
import { makePizza } from "../redux/index";
import { connect } from "react-redux";
import Pizza from "../pictures/pizza.png";
import "../App.css";

const TIME_TARGET = 1000;

function louieMakesPizzas({ numLouies, makePizza }) {
  clearInterval(louieMakesPizzas);
  if (numLouies > 0) {
    const time = TIME_TARGET - 1 * numLouies;
    setTimeout(() => makePizza(), time);
  }
}

function rocketMakesTrips({ numPlanets, makePizza }) {
  clearInterval(rocketMakesTrips);
  if (numPlanets > 0) {
    const time = TIME_TARGET - 5 * numPlanets;
    setTimeout(() => makePizza(), time);
  }
}

function PizzaContainer(props) {
  return (
    <div>
      <p>
        <strong>pizzas popped: 🍕{props.numPizzas}🍕</strong>
      </p>
      <p hidden>{setTimeout(louieMakesPizzas(props), TIME_TARGET)}</p>
      <button onClick={props.makePizza}>
        <img className="img" src={Pizza} />
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numPizzas: state.pizza.numPizzas,
    numLouies: state.louie.numLouies,
  };
};

const mapDispatchToProps = {
  makePizza: () => makePizza(),
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaContainer);
