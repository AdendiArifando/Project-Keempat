import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipeAdendi.model';
import { RecipeAdendiService } from './recipeAdendi.service';

@Component({
  selector: 'app-recipeAdendi',
  templateUrl: './recipeAdendi.component.html',
  styleUrls: ['./recipeAdendi.component.css'],
  providers: [RecipeAdendiService],
})
export class RecipeAdendiComponent implements OnInit {
  selectedRecipe:Recipe;
  
  constructor(private recipeAdendiService:RecipeAdendiService) { }

  ngOnInit() {
    this.recipeAdendiService.recipeAdendiSelected
    .subscribe(
      (recipe:Recipe)=>{
        this.selectedRecipe=recipe;
      }
    )
  }

}
