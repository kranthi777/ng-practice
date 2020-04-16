import { ShoppingListService } from './../shoppinglist/shoppinglist.service';
import { Ingredients } from './../shared/ingredients.model';
import { Recipe } from './recipe.modal';
import { EventEmitter, Injectable } from '@angular/core';


@Injectable()
export class RecipeService {
  
  constructor(private slservice: ShoppingListService) {}
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('first recipe',
    'my first recipe', 
    'https://videohive.img.customer.envatousercontent.com/files/816a78f8-6ec6-42b1-bd09-8333926324ea/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=0d977fad79e453d53de60353f14355ea',
    [new Ingredients('meat', 10),new Ingredients('sweet', 70)]),
    new Recipe('second recipe',
    'my second recipe', 
    'https://videohive.img.customer.envatousercontent.com/files/816a78f8-6ec6-42b1-bd09-8333926324ea/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=0d977fad79e453d53de60353f14355ea',
    [new Ingredients('salt', 1),new Ingredients('sugar', 30)])
  ];

  getRecipes() {
    //returns new array with same copy
    return this.recipes.slice();
  }

  addIngredients(ingredients: Ingredients[]) {
    this.slservice.addIngredients(ingredients);
  }
}