import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  testcolor:string ="rgb(0, 128, 0)";

  constructor() { }

  ngOnInit() {}

  @HostListener('mousemove') mouseenter(){
    this.testcolor= 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    ;
  
  }
 
}
