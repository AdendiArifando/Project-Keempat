import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipeAdendi.model';
import { RecipeAdendiService } from '../recipeAdendi.service';

@Component({
  selector: 'app-recipe-listAdendi',
  templateUrl: './recipe-listAdendi.component.html',
  styleUrls: ['./recipe-listAdendi.component.css']
})
export class RecipeListAdendiComponent implements OnInit {

  //@Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes:Recipe[];
  //property:class recipe
 
  constructor(private recipeAdendiService:RecipeAdendiService) { }

  ngOnInit() {
    this.recipes=this.recipeAdendiService.getRecipes();
  }

  //onRecipeSelected(recipe:Recipe){
    //this.recipeWasSelected.emit(recipe);
  //}
  
}
