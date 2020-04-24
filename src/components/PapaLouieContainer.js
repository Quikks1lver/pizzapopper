import React from "react";
import { useSelector } from "react-redux";
import { makePizza, buyPizza } from "../redux/index";
import { connect } from "react-redux";

function PapaLouieContainer(props) {
  const pizzas = useSelector((state) => state.numPizzas);

  return (
    <div>
      <p> {props.numPizzas} </p>
      {/* <button onClick={props.buyPizza()}> hello </button> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numPizzas: state.numPizzas,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    makePizza: () => dispatch(makePizza()),
    buyPizza: () => dispatch(buyPizza()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PapaLouieContainer);
