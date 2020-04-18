import { ShoppingListService } from './shoppinglist.service';
import { Ingredients } from './../shared/ingredients.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit, OnDestroy {
  ingredients:Ingredients[];
  private ingredientsChangedSubscription: Subscription;
  constructor(private shoppinglistservice: ShoppingListService) {
    
  }
  
  
  ngOnInit(): void {
    this.ingredients = this.shoppinglistservice.getIngredients();
    //subscribe returns subscription
    this.ingredientsChangedSubscription = this.shoppinglistservice.ingredientsChanged.subscribe((ingredients:Ingredients[])=>{
      this.ingredients = ingredients;
    })
  }

  ngOnDestroy(): void {
    this.ingredientsChangedSubscription.unsubscribe();
  }

  onEditItem(index: number) {
    this.shoppinglistservice.startedEditing.next(index);
  }

}
