import { Component, OnInit } from '@angular/core';
import { Server } from '../models/server';

@Component({
  selector: 'app-testServer',
  templateUrl: './testServer.component.html',
  styleUrls: ['./testServer.component.css']
})
export class TestServerComponent implements OnInit {


  serverContiner: Server[] = [];
  serverValues  = new Server('' , '' , '');

  constructor() { }

  ngOnInit() {
  }

  redServer(){
    this.serverValues.type = 'red';
    this.serverContiner.push(this.serverValues);
    console.log('serverType?' , this.serverValues.type = 'red')
  }

  bluePrint(){
    this.serverValues.type = 'blue';
    this.serverContiner.push(this.serverValues);
    console.log('serverType?' ,     this.serverValues.type = 'blue')
  }

}
