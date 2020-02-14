import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/Test.service';

@Component({
  selector: 'app-UserGame',
  templateUrl: './UserGame.component.html',
  styleUrls: ['./UserGame.component.css']
})
export class UserGameComponent implements OnInit {
 
  unActiveData: any[];
  activeData: any[];

  constructor(private service: TestService) { }

  ngOnInit() {
    this.activeData = this.service.getActiveUser();
    this.unActiveData = this.service.getUnActiveUser();
  }

  onUnActiveUser(index: number){
    this.service.setActiveUser(index);
  }

  onActiveUser(index: number){
    
      this.service.setUnActiveUser(index);
  }
 

}
