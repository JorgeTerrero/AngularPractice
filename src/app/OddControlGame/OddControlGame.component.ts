import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-OddControlGame',
  templateUrl: './OddControlGame.component.html',
  styleUrls: ['./OddControlGame.component.css']
})
export class OddControlGameComponent implements OnInit {

  @Input() oddNumber: number;

  constructor() { }

  ngOnInit() {
  }

}
