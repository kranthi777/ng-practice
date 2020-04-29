//global state/reducer config
//combining reducers here
import * as fromShoppingList from '../shoppinglist/store/shoppinglist-reducer';
import * as fromAuth from '../auth/store/auth.reducer';
import { ActionReducerMap } from '@ngrx/store';


export interface AppState {
  shoppingList: fromShoppingList.State;
  auth: fromAuth.State;
}

export const AppReducer:ActionReducerMap<AppState> = {
  shoppingList:fromShoppingList.ShoppingListReducer,
  auth:fromAuth.AuthReducer
}