import { combineReducers } from "redux";
import pizzaReducer from "./pizza/pizzaReducer";
import louieReducer from "./louie/louieReducer";
import planetReducer from "./planet/planetReducer";

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  louie: louieReducer,
  planet: planetReducer,
});

export default rootReducer;
