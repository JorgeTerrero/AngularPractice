import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-EventControlGame',
  templateUrl: './EventControlGame.component.html',
  styleUrls: ['./EventControlGame.component.css']
})
export class EventControlGameComponent implements OnInit {

  @Input() eventNumber: number;

  constructor() { }

  ngOnInit() {
  }

}
