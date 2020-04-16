import { RecipeService } from './../../recipe.service';
import { Recipe } from './../../recipe.modal';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {
  
  @Input() item :Recipe;
  //@Output() itemSelected = new EventEmitter<void>();
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }
  onItemSelect():void {
    //this.itemSelected.emit();
    this.recipeService.recipeSelected.emit(this.item);
  }
}
