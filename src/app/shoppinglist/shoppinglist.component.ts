import { ShoppingListService } from './shoppinglist.service';
import { Ingredients } from './../shared/ingredients.model';
import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import * as ShoppingListActions from './store/shoppinglist-actions';
@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit, OnDestroy {
  //ingredients:Ingredients[];
  ingredients:Observable<{ingredients:Ingredients[]}>;
  private ingredientsChangedSubscription: Subscription;
  constructor(private shoppinglistservice: ShoppingListService,
    private store:Store<fromApp.AppState>) {
    
  }
  
  
  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');//it returns observable
    // this.ingredients = this.shoppinglistservice.getIngredients();
    // //subscribe returns subscription
    // this.ingredientsChangedSubscription = this.shoppinglistservice.ingredientsChanged.subscribe((ingredients:Ingredients[])=>{
    //   this.ingredients = ingredients;
    // })
  }

  ngOnDestroy(): void {
    //this.ingredientsChangedSubscription.unsubscribe();
  }

  onEditItem(index: number) {
    //this.shoppinglistservice.startedEditing.next(index);
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

}
