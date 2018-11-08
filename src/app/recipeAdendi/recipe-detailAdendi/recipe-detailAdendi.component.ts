import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipeAdendi.model';

@Component({
  selector: 'app-recipe-detailAdendi',
  templateUrl: './recipe-detailAdendi.component.html',
  styleUrls: ['./recipe-detailAdendi.component.css']
})
export class RecipeDetailAdendiComponent implements OnInit {
  @Input() recipe:Recipe;

  constructor() { }

  ngOnInit() {
  }


  onAddShoppingList(){
    this.recipeService.addIngredientsShoppingList(this.recipe.ingredient);
  }

}
