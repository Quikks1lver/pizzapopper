import { combineReducers } from "redux";
import pizzaReducer from "./pizza/pizzaReducer";
import louieReducer from "./louie/louieReducer";
import planetReducer from "./planet/planetReducer";
import wizardReducer from "./wizard/wizardReducer";

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  louie: louieReducer,
  planet: planetReducer,
  wizard: wizardReducer,
});

export default rootReducer;
