import { ShoppingListService } from './../shoppinglist.service';
import { Ingredients } from './../../shared/ingredients.model';
import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoppingedit',
  templateUrl: './shoppingedit.component.html',
  styleUrls: ['./shoppingedit.component.css']
})
export class ShoppingeditComponent implements OnInit,OnDestroy {

  //to get access to form : Template Driven Form
  @ViewChild('shoppingListForm') slForm: NgForm;
  subscription: Subscription;
  editMode: boolean;
  editedItemIndex: number;
  editedItem: Ingredients;
  constructor(private shoppinglistservice: ShoppingListService) { }
  

  ngOnInit(): void {
    this.subscription = this.shoppinglistservice.startedEditing.subscribe((index: number)=>{
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.shoppinglistservice.getIngredientByIndex(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onSubmit(form:NgForm):void {
    let data = form.value;
    let newIngredientAdded = new Ingredients(data.name,data.amount);
    if (this.editMode) {
      this.shoppinglistservice.updateIngredient(this.editedItemIndex,newIngredientAdded);
    } else {
      this.shoppinglistservice.addIngredient(newIngredientAdded);
    }
    form.reset();
    this.editMode = false;
  }
  onClearForm():void {
    this.slForm.reset();
    this.editMode = false;
  }
  onDeleteItem():void{
    this.shoppinglistservice.deleteIngredient(this.editedItemIndex);
    this.onClearForm();
  }
}
