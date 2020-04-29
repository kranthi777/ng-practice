
import { ShoppingListService } from './../shoppinglist.service';
import { Ingredients } from './../../shared/ingredients.model';
import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shoppinglist-actions';
import * as fromApp from '../../store/app.reducer';

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
  editedItem: Ingredients;
  constructor(private shoppinglistservice: ShoppingListService,private store:Store<fromApp.AppState>) { }
  

  ngOnInit(): void {
    this.subscription = this.store.select('shoppingList').subscribe((stateData)=>{
      if (stateData.editedIngredientIndex>-1){
        this.editMode = true;
        this.editedItem = stateData.editedIngredient;
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      } else {
        this.editMode = false;
      }
    })
    // this.subscription = this.shoppinglistservice.startedEditing.subscribe((index: number)=>{
    //   this.editedItemIndex = index;
    //   this.editMode = true;
    //   this.editedItem = this.shoppinglistservice.getIngredientByIndex(index);
    //   this.slForm.setValue({
    //     name: this.editedItem.name,
    //     amount: this.editedItem.amount
    //   })
    // })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }
  onSubmit(form:NgForm):void {
    let data = form.value;
    let newIngredientAdded = new Ingredients(data.name,data.amount);
    if (this.editMode) {
      //this.shoppinglistservice.updateIngredient(this.editedItemIndex,newIngredientAdded);
      this.store.dispatch(new ShoppingListActions.UpdateIngredient(newIngredientAdded));
    } else {
      //this.shoppinglistservice.addIngredient(newIngredientAdded);
      this.store.dispatch(new ShoppingListActions.AddNewIngredient(newIngredientAdded));
    }
    form.reset();
    this.editMode = false;
  }
  onClearForm():void {
    this.slForm.reset();
    this.editMode = false;
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }
  onDeleteItem():void{
    //this.shoppinglistservice.deleteIngredient(this.editedItemIndex);
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    this.onClearForm();
  }
}
