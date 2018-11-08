import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

import { Ingredient } from 'D:/Kuliah/SEMESTER 3/PemrogamanWeb/project-keempat/src/app/sharedAdendi/ingredientAdendi.model';
import { ShoppingListAdendiService } from '../shopping-listAdendi.service';

@Component({
  selector: 'app-shopping-editAdendi',
  templateUrl: './shopping-editAdendi.component.html',
  styleUrls: ['./shopping-editAdendi.component.css']
})
export class ShoppingEditAdendiComponent implements OnInit {



  @ViewChild('nameInput') nameRef:ElementRef;
  @ViewChild('amountInput') amountRef:ElementRef;
  //@Output() ingredientAdded= new EventEmitter<Ingredient>();

  constructor(private slsService:ShoppingListAdendiService) { }

  ngOnInit() {
  }

  onAddItem(){
    const ingName=this.nameRef.nativeElement.value;
    const ingAmount=this.amountRef.nativeElement.value;
    const newIngredient= new Ingredient(ingName,ingAmount);
    this.slsService.addIngredient(newIngredient);
    //this.ingredientAdded.emit(newIngredient);
  }
}
