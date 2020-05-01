// I used hooks instead of the connect() method to access the store and dispatch methods.

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { hireWizard, buyPizza } from "../redux/index";
import { WIZARD_CAP, WIZARD_COST } from "../thresholds";
import Wizard from "../pictures/wizard.jpeg";

function WizardContainer() {
  const numWizards = useSelector((state) => state.wizard.numWizards);
  const dispatch = useDispatch();

  // Working code
  const handleClick = () => {
    if (numWizards < WIZARD_CAP) {
      dispatch(buyPizza(WIZARD_COST));
      dispatch(hireWizard());
    }
  };

  return (
    <div>
      <p>
        Hire Cheez Wizards to spontaneously create more cheez for your pizzas!
        (cap: {WIZARD_CAP})
      </p>
      <button className="button" onClick={() => handleClick()}>
        <img className="img" alt="Cheese Wizard" src={Wizard} />
      </button>
      <p>{numWizards} wizard(s) are casting cheezy spells.</p>
    </div>
  );
}

export default WizardContainer;
