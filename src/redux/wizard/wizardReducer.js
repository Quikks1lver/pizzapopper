import { HIRE_WIZARD } from "./wizardTypes";

const initialState = {
  numWizards: 0,
};

const wizardReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIRE_WIZARD:
      return {
        ...state,
        numWizards: state.numWizards + 1,
      };
    default:
      return state;
  }
};

export default wizardReducer;
