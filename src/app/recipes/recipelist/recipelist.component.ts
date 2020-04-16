import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.modal';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  //@Output() recipeItem = new EventEmitter<Recipe>();
  recipes: Recipe[];
  
  constructor(private recipeService: RecipeService) {
    //console.log(this.recipes);
    this.recipes = recipeService.getRecipes();

  }

  ngOnInit(): void {
  }

}
