import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }
  public arr: any;
  ngOnInit(): void {
    this.arr = [];
    for (let i = 0; i < 10; i++){
      let row: any= {
        buyP : i,
        currP : i + 1,
        inc : 1,
        lastIncTime : 2,
        shouldSell : true
      };
      this.arr.push(row);
    }
  }

}
