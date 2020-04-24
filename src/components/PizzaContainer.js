import React from 'react';
import { makePizza } from '../redux/index';
import { connect } from 'react-redux';
import Pizza from './pizza.png'

const blockStyle = {
   width: "45%",
   height: "50%",
   border: "none",
   margin: "0",
   backgroundColor: "transparent",
   padding: "0px 0px 0px 0px",
   fontSize: "16px",
   textAlign: "center",
   borderColor: "blue",
   borderStyle: "dotted"
}

const imageStyle = {
   opacity: "0.5",
   width: "20%",
   height: "20%"
}

function PizzaContainer(props) {
   return (
      <div>
         <p style={{fontFamily: "monospace", color: "yellow"}}><strong>pizzas popped: 🍕{props.numPizzas}🍕</strong></p>
         <button style={blockStyle} onClick={props.makePizza}>
            <img style={imageStyle} src={Pizza}/>
         </button>
      </div>
   )
}

const mapStateToProps = state => {
   return {
      numPizzas: state.numPizzas
   }
}

const mapDispatchToProps = dispatch => {
   return {
      makePizza: () => dispatch(makePizza())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaContainer)