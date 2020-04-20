import { Subscription } from 'rxjs';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.modal';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;
  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {
    //console.log(this.recipes);
    this.recipes = recipeService.getRecipes();
  }
  

  ngOnInit(): void {
    this.subscription = this.recipeService.recipesChanged.subscribe((updatedRecipes: Recipe[])=>{
      this.recipes = updatedRecipes;
      console.log('[recipeList]',updatedRecipes);
    })
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onNewRecipe(): void {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
