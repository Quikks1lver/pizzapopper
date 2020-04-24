import { combineReducers } from 'redux';
import pizzaReducer from './pizza/pizzaReducer';

const rootReducer = combineReducers({
   pizza: pizzaReducer
})

export default pizzaReducer;