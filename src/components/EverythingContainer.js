import React from 'react';
import { connect } from 'react-redux';
import PizzaContainer from './PizzaContainer';

function renderButton() {
   return (
      <PizzaContainer />
   )
}

function EverythingContainer(props) {
   return (
      <div>
         {renderButton()}
      </div>
   )
}

const mapStateToProps = state => {
   return {
      numPizzas: state.numPizzas
   }
}

export default connect(mapStateToProps)(EverythingContainer)