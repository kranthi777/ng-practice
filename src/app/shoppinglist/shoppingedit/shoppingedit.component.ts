import { Ingredients } from './../../shared/ingredients.model';
import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shoppingedit',
  templateUrl: './shoppingedit.component.html',
  styleUrls: ['./shoppingedit.component.css']
})
export class ShoppingeditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() addedIngredient = new EventEmitter<Ingredients>();
  constructor() { }

  ngOnInit(): void {
  }
  onAddItem():void {
    let newIngredientAdded = new Ingredients(this.nameInputRef.nativeElement.value,this.amountInputRef.nativeElement.value);
    //console.log(newIngredientAdded);
    this.addedIngredient.emit(newIngredientAdded);
    
  }

}
