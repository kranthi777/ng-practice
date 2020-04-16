import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  buttonState = false;
  name="kranthi"
  flag = false
  lastName="kumar"
  onClickBtn():void {
    console.log('click');
    this.buttonState = !this.buttonState;
  }
  getColor(): string {
    return "blue";
  }

}
