import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdownAdendi]'
})
export class DropdownAdendiDirective {

  @HostBinding('class.open') isOpen=false;

  @HostListener('click') toggleOpen()
  {
    this.isOpen=!this.isOpen;
  }

  //constructor() { }

}
