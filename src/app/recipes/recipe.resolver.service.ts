import { RecipeService } from './recipe.service';
import { DataStorageService } from './../shared/data-storage-service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Recipe } from './recipe.modal';

@Injectable({

  //if we define here no need to add this service in app module
  providedIn:'root'
})
export class RecipeResolverService implements Resolve<Recipe[]> {
  constructor(private dataStorageService:DataStorageService, private recipeService: RecipeService){}
  resolve(route:ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipeService.getRecipes();
    if (recipes.length === 0) {
      return this.dataStorageService.fetchRecipes();
    } else {
      return recipes;
    }
    
  }
}