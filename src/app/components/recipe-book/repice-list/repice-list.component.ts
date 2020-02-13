import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';

@Component({
  selector: 'app-repice-list',
  templateUrl: './repice-list.component.html',
  styleUrls: ['./repice-list.component.css']
})
export class RepiceListComponent implements OnInit {
  
  recipes: Recipe[] = [
    new Recipe('A test Recipe' , 'This is a Simple Test' , 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
