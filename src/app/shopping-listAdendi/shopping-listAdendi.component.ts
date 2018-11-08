import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../sharedAdendi/ingredientAdendi.model';
import { ShoppingListAdendiService } from '../shopping-listAdendi/shopping-listAdendi.service';

@Component({
  selector: 'app-shopping-listAdendi',
  templateUrl: './shopping-listAdendi.component.html',
  styleUrls: ['./shopping-listAdendi.component.css']
})
export class ShoppingListAdendiComponent implements OnInit {

  ingredients:Ingredient[]
  //=[
    //new Ingredient('Apples',23),
    //new Ingredient('Tomato',10),
  //];

  constructor(private slsService:ShoppingListAdendiService) { }

  ngOnInit() {
    this.ingredients=this.slsService.getIngredient();
    this.slsService.IngredientChange
    .subscribe(
      (Ingredient:Ingredient[])=>{
        this.ingredients=Ingredient;
      }
    )
  }

  //onIngredientAdded(ingredient:Ingredient)
  //{
  //this.ingredients.push(ingredient);
//}
}
