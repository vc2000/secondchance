import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]= [
    new Recipe('choco','taste good','https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chocolate-fudge-cake.jpg'),
    new Recipe('chicken','yummy','https://www.thegunnysack.com/wp-content/uploads/2018/03/Honey-Garlic-Chicken-Recipe.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
