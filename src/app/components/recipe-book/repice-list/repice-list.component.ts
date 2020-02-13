import { Component, OnInit ,  Input } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';

@Component({
  selector: 'app-repice-list',
  templateUrl: './repice-list.component.html',
  styleUrls: ['./repice-list.component.css']
})
export class RepiceListComponent implements OnInit {
  
  @Input() recipes: Recipe[];
  
  constructor() { }

  ngOnInit() {
  }

}
