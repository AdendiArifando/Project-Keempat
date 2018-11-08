import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipeAdendi.model';
import { RecipeAdendiService } from '../../recipeAdendi.service';

@Component({
  selector: 'app-recipe-itemAdendi',
  templateUrl: './recipe-itemAdendi.component.html',
  styleUrls: ['./recipe-itemAdendi.component.css']
})
export class RecipeItemAdendiComponent implements OnInit {

  @Input() recipe:Recipe;
  //@Output() recipeSelected=new EventEmitter<void>();

  constructor(private recipeAdendiService:RecipeAdendiService) { }

  ngOnInit() {
  }

  onSelected(){
    //this.recipeSelected.emit();
    this.recipeAdendiService.recipeAdendiSelected.emit(this.recipe);
  }
}
