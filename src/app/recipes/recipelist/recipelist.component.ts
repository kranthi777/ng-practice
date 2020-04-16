import { Recipe } from './../recipe.modal';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  @Output() recipeItem = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('first recipe','my first recipe', 'https://videohive.img.customer.envatousercontent.com/files/816a78f8-6ec6-42b1-bd09-8333926324ea/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=0d977fad79e453d53de60353f14355ea'),
    new Recipe('second recipe','my second recipe', 'https://videohive.img.customer.envatousercontent.com/files/816a78f8-6ec6-42b1-bd09-8333926324ea/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=0d977fad79e453d53de60353f14355ea')
  ];
  
  constructor() {
    //console.log(this.recipes);
  }

  ngOnInit(): void {
  }
  onItemSelected(recipe: Recipe): void {
    this.recipeItem.emit(recipe);
  }

}
