import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  countList: number[] = [];


  onCountFired(fireCount: number) {
      this.countList.push(fireCount);
      console.log(this.countList);
  }


}
