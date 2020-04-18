import { Ingredients } from './../shared/ingredients.model';
import { Subject } from 'rxjs';

export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredients[]>();
  startedEditing = new Subject<number>();
  startedDeleting = new Subject<number>();
  private ingredients:Ingredients[] = [
    new Ingredients('ing 1', 30),
    new Ingredients('ing 2', 20)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredientByIndex(index:number) {
    return this.ingredients[index];
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

  updateIngredient(index:number, newIngredient: Ingredients) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index:number) {
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}