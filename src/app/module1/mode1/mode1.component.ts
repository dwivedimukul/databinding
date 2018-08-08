import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mode1',
  templateUrl: './mode1.component.html',
  styleUrls: ['./mode1.component.css']
})
export class Mode1Component implements OnInit {
  clickMessage:string;
  onClickMe(dataIn:string){
    this.clickMessage= dataIn;
  }
  constructor() { }

  ngOnInit() {
  }


}
