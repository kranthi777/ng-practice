import { Ingredients } from './../shared/ingredients.model';
import { Subject } from 'rxjs';

export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredients[]>();

  private ingredients:Ingredients[] = [
    new Ingredients('ing 1', 30),
    new Ingredients('ing 2', 20)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingrdient:Ingredients) {
    this.ingredients.push(ingrdient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredients[]) {
    
    this.ingredients.push(...ingredients);
    console.log(this.ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}