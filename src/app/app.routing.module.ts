import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { RecipestartComponent } from './recipes/recipestart/recipestart.component';
import { RecipedetailComponent } from './recipes/recipedetail/recipedetail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeResolverService } from './recipes/recipe.resolver.service';

const appRoutes: Routes = [
  {path:'', redirectTo: '/recipes', pathMatch:'full'},
  {path:'recipes', component: RecipesComponent,
    children:[{path:'', component: RecipestartComponent},
              {path:'new', component: RecipeEditComponent},
              {path:':id', component: RecipedetailComponent, resolve: [RecipeResolverService]},
              {path:':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverService]}]
  },
  {path:'shopping-list', component: ShoppinglistComponent}
] 
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}