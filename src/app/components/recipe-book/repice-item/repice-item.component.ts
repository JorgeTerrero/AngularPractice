import { Component, OnInit , Input } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';

@Component({
  selector: 'app-repice-item',
  templateUrl: './repice-item.component.html',
  styleUrls: ['./repice-item.component.css']
})
export class RepiceItemComponent implements OnInit {

  @Input() recipes: Recipe[];
  constructor() { }

  ngOnInit() {
  }

}
