import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LearnComponent } from './learn/learn.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipelistComponent } from './recipes/recipelist/recipelist.component';
import { RecipedetailComponent } from './recipes/recipedetail/recipedetail.component';
import { RecipeitemComponent } from './recipes/recipelist/recipeitem/recipeitem.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppingeditComponent } from './shoppinglist/shoppingedit/shoppingedit.component';
import { BasicHighLightDirective } from './customDirectives/basic-highlight-directive';
import { BetterHighLightDirective } from './customDirectives/better-highlight-directive';
import { DropDownDirective } from './customDirectives/dropdown-directive';
import { ShoppingListService } from './shoppinglist/shoppinglist.service';
import { AppRoutingModule } from './app.routing.module';
import { RecipestartComponent } from './recipes/recipestart/recipestart.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipes/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    LearnComponent,
    HeaderComponent,
    RecipesComponent,
    RecipelistComponent,
    RecipedetailComponent,
    RecipeitemComponent,
    ShoppinglistComponent,
    ShoppingeditComponent,
    BasicHighLightDirective,
    BetterHighLightDirective,
    DropDownDirective,
    RecipestartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService,RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
