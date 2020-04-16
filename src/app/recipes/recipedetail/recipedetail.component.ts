import { Recipe } from './../recipe.modal';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor() {
   }

  ngOnInit(): void {
    console.log(this.recipe);
  }

}
