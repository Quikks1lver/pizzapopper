import { MAKE_PIZZA } from "./pizzaTypes";
import { BUY_PIZZA } from "./pizzaTypes";
// Action creator
export const makePizza = (number = 1) => {
  return {
    type: MAKE_PIZZA,
    payload: number,
  };
};

export const buyPizza = (number = 1) => {
  return {
    type: BUY_PIZZA,
    payload: number,
  };
};
