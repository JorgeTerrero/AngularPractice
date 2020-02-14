import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService  {
  
  activeUser = ['Mike' , 'Luisa' , 'Miguel' , 'Yolanda'];
  unActive = [];

constructor() {
   
}

getActiveUser() {
  return this.activeUser;
}

getUnActiveUser(){
  return this.unActive;
}

 setActiveUser(index: number){
      if(this.activeUser.length > 0){
        
        for(let i=0 ; i < this.activeUser.length ; i++ ){

          if(i == index) {
              this.unActive.push(this.activeUser[index]);
              this.activeUser.splice(index , 1);
          }

          if( i < 0) {
             console.log('No Hay?')
          }

        }

      }
 }

 setUnActiveUser(index:number){
  if(this.unActive.length > 0){
    
    for(let i=0 ; i < this.unActive.length ; i++ ){

      if(i == index) {
          this.activeUser.push(this.unActive[index]);
          this.unActive.splice(index , 1);
      }

      if( i < 0) {
         console.log('No Hay?')
      }

    }

  }


}



}
