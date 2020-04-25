import { combineReducers } from "redux";
import pizzaReducer from "./pizza/pizzaReducer";
import louieReducer from "./louie/louieReducer";

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  louie: louieReducer,
});

export default rootReducer;
