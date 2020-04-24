import { MAKE_PIZZA } from './pizzaTypes';

const initialState = {
   numPizzas: 0,
}

const pizzaReducer = (state = initialState, action) => {
   switch (action.type) {
      case MAKE_PIZZA: return {
         ...state,
         numPizzas: state.numPizzas + action.payload
      }
      default: return state
   }
}

export default pizzaReducer;