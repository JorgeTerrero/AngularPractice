import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService  {
  
  arrUser = ['Mike' , 'Carla' , 'Max' , 'Penelope' , 'Luis' , 'Marla'];
  activeUser: any[] = [];
  unActiveUser: any[] = []

constructor() { }



setActiveUser(id: number) {
   if(this.unActiveUser.length > 0){
       for (let i = 0; i < this.unActiveUser.length; i++) {
           if( i == id) {
               this.activeUser.push[this.unActiveUser[id]];
               this.unActiveUser.splice(id , 1);
           }  
       }
   }else{
      if(this.unActiveUser.length < 0 ){
        console.log('No hay Usuarios Desactivados ')
      }
   } 
   
   return this.activeUser;
}

setUnActiveUser(id: number) {
        if(this.activeUser.length > 0){
             for (let i = 0; i < this.activeUser.length; i++) {
               
              if( i == id){
                 this.unActiveUser.push(this.activeUser[id]);
                 this.activeUser.splice(id , 1);
              }
               
             }
        }
  return this.unActiveUser;      
}

assigneUser(){
  this.activeUser = this.arrUser;
  console.log('is Fill?' , this.activeUser);
}



}
