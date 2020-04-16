import { ShoppingListService } from './shoppinglist.service';
import { Ingredients } from './../shared/ingredients.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  ingredients:Ingredients[];
  constructor(private shoppinglistservice: ShoppingListService) {
    
  }
  
  ngOnInit(): void {
    this.ingredients = this.shoppinglistservice.getIngredients();
    this.shoppinglistservice.ingredientsChanged.subscribe((ingredients:Ingredients[])=>{
      this.ingredients = ingredients;
    })
  }

}
