import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-practice';
  showShoppingListComponent:boolean = false;
  onNavigate(feature):void{
    if (feature === 'shoppingList') {
      this.showShoppingListComponent = true;
    } else {
      this.showShoppingListComponent = false;
    }
  }
}
