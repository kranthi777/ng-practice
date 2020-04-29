import { Ingredients } from './../../shared/ingredients.model';
import { Action } from '@ngrx/store';
import * as ShoppingListActions from './shoppinglist-actions';



export interface State {
  ingredients : Ingredients[],
  editedIngredient:Ingredients,
  editedIngredientIndex:number
}

const initialState:State = {
  ingredients : [
    new Ingredients('ing 1', 30),
    new Ingredients('ing 2', 20)
  ],
  editedIngredient:null,
  editedIngredientIndex:-1
}


export function ShoppingListReducer(state:State=initialState,action:ShoppingListActions.ShoppingListActions) {
  switch(action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients:[...state.ingredients, action.payload]
      }
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients:[...state.ingredients, ...action.payload]
      }
    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingr = state.ingredients[state.editedIngredientIndex];
      const updatedIngredient = {
        ...ingr,...action.payload
      }
      const updatedIngredients = [...state.ingredients];
      updatedIngredients[state.editedIngredientIndex] = updatedIngredient;
      return {
        ...state,
        ingredients:updatedIngredients,
        editedIngredient:null,
        editedIngredientIndex:-1
      }
    case ShoppingListActions.DELETE_INGREDIENT:
      return {
        ...state,
        ingredients:state.ingredients.filter((item,index) =>{
          return index !== state.editedIngredientIndex
        })
      }
    case ShoppingListActions.START_EDIT:
      return {
        ...state,
        editedIngredientIndex:action.payload,
        editedIngredient: {...state.ingredients[action.payload]}
      }
    case ShoppingListActions.STOP_EDIT:
      return {
        ...state,
        editedIngredient:null,
        editedIngredientIndex:-1
      }
    default:
      return state;

  }
}