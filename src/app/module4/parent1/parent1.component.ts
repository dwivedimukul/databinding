import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Child1Component } from './child1/child1.component';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements AfterViewInit {

  @ViewChild(Child1Component) child;

  constructor() { }

  message:string;

  ngAfterViewInit() {
    this.message = this.child.message;
  }

}
