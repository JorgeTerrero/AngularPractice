import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/Test.service';

@Component({
  selector: 'app-UserGame',
  templateUrl: './UserGame.component.html',
  styleUrls: ['./UserGame.component.css']
})
export class UserGameComponent implements OnInit {

  constructor(private service: TestService) { }

  ngOnInit() {
    this.service.assigneUser();
  }

}
