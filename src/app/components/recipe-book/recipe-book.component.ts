import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';


@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test Recipe' , 'This is a Simple Test' , 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png')
  ];


  constructor() { }

  ngOnInit() {
  }

}
