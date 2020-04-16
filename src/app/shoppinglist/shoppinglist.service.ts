import { Ingredients } from './../shared/ingredients.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredients[]>();

  private ingredients:Ingredients[] = [
    new Ingredients('ing 1', 30),
    new Ingredients('ing 2', 20)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingrdient:Ingredients) {
    this.ingredients.push(ingrdient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredients[]) {
    
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}