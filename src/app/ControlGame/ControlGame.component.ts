import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-ControlGame',
  templateUrl: './ControlGame.component.html',
  styleUrls: ['./ControlGame.component.css']
})
export class ControlGameComponent implements OnInit {

  @Output() countEventFired = new EventEmitter();
  myIntervar: any;
  normalCount = 1;

  constructor() { }

  ngOnInit() {
  }

  setIntervarGame(){
    this.myIntervar = setInterval( () => {
     
      this.countEventFired.emit(this.normalCount++);

      console.log('event?' , this.normalCount);
 
    } , 3000);
  }

  clearIntervarGame(){

    clearInterval(this.myIntervar);
  }

}
