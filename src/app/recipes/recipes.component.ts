import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  //this service is accessble in this component and child components
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe)=>{
      this.selectedItem = recipe;
    })
  }
  selectedItem:Recipe;

}
