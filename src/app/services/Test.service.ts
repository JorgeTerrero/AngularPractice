import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService implements OnInit {
  
  arrUser = ['Mike' , 'Carla' , 'Max' , 'Penelope' , 'Luis' , 'Marla'];
  activeUser: any[] = [];
  unActiveUser: any[] = []

constructor() { }

ngOnInit(): void {
   this.activeUser = this.arrUser;
   console.log('is Fill?' , this.activeUser);
}

setActiveUser() {
     
}

}
