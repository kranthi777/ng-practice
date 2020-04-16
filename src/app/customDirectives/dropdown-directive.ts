import { Directive, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropDownDirective implements OnInit{

  @HostBinding('class.open') isOpen = false;
  constructor(){
  }
  ngOnInit(): void {
  }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}