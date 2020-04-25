import React from "react";
import { makePizza } from "../redux/index";
import { connect } from "react-redux";
import Pizza from "../pictures/pizza.png";
import "../App.css";

function PizzaContainer(props) {
  return (
    <div>
      <p>
        <strong>pizzas popped: 🍕{props.numPizzas}🍕</strong>
      </p>
      <button onClick={props.makePizza}>
        <img className="img" src={Pizza} />
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numPizzas: state.pizza.numPizzas,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    makePizza: () => dispatch(makePizza()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaContainer);
