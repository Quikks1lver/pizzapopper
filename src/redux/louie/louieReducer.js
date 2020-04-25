import { HIRE_LOUIE } from "./louieTypes";

const initialState = {
  numLouies: 0,
};

const louieReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIRE_LOUIE:
      return {
        ...state,
        numLouies: state.numLouies + 1,
      };
    default:
      return state;
  }
};

export default louieReducer;
