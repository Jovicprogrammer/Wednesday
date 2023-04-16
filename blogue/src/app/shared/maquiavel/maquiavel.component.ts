import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-maquiavel',
  templateUrl: './maquiavel.component.html',
  styleUrls: ['./maquiavel.component.css']
})
export class MaquiavelComponent implements OnInit {


  hiddenDance: boolean = true; 

  constructor () {}

  ngOnInit() {}

  showBloody(): void {

    if (this.hiddenDance == true) {
    this.hiddenDance = false } else 
    { this.hiddenDance = true }

  }
 

  
}
