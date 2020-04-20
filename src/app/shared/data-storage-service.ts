import { RecipeService } from './../recipes/recipe.service';
import { Recipe } from './../recipes/recipe.modal';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,tap } from 'rxjs/operators';

@Injectable({

  //if we define here no need to add this service in app module
  providedIn:'root'
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService){}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://ng-practice-93626.firebaseio.com/recipes.json', recipes)
    .subscribe(response=>console.log(response));
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>('https://ng-practice-93626.firebaseio.com/recipes.json')
    //if we are submitting data without ingredients in db the ingredients is not getting stored
    // to overcome this after getting response manually adding
    .pipe(
      map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : []
          };
        });
      }),
      tap(recipes => {
        this.recipeService.setRecipes(recipes);
      })
    )
    
  }
}