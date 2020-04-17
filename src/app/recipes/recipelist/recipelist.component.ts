import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.modal';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[];
  
  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {
    //console.log(this.recipes);
    this.recipes = recipeService.getRecipes();
  }

  ngOnInit(): void {
  }

  onNewRecipe(): void {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
