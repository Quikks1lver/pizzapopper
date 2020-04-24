import { MAKE_PIZZA } from './pizzaTypes'
// Action creator
export const makePizza = (number = 1) => {
   return {
      type: MAKE_PIZZA,
      payload: number
   }
}