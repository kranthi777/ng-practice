import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.modal';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {
  recipe: Recipe;
  id:number;
  constructor(private recipeService:RecipeService, private route: ActivatedRoute, private router:Router) {
  }

  ngOnInit(): void {
    //one way: this will only works for first time when we load the component
    //const id =  this.route.snapshot.params['id'];
    //second way: using observable
    this.route.params.subscribe((params: Params)=>{
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipeById(this.id);
    })
  }

  addToShoppingList():void {
    this.recipeService.addIngredients(this.recipe.ingredients);
  }

  editRecipe() {
    //one way
    this.router.navigate(['edit'], {relativeTo: this.route})
    //other way go one level up and update id
    //this.router.navigate(['../', this.id, 'edit'], {relativeTo:this.route});
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes'])
  }

}
