import { Ingredients } from './../shared/ingredients.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  ingredients:Ingredients[] = [
    new Ingredients('ing 1', 30),
    new Ingredients('ing 2', 20)
  ];
  constructor() {
    
  }

  ngOnInit(): void {
  }
  onAdded(ingredient: Ingredients) {
    //console.log(ingredient);
    this.ingredients.push(ingredient);
    //console.log(this.ingredients);
  }

}
