import { HIRE_PLANET } from "./planetTypes";

const initialState = {
  numPlanets: 0,
};

const planetReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIRE_PLANET:
      return {
        ...state,
        numPlanets: state.numPlanets + 1,
      };
    default:
      return state;
  }
};

export default planetReducer;
