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
  @Input() index: number;
  constructor() { }

  ngOnInit(): void {
  }
}
