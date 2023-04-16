import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  @Input() titlec = "Conheça os excluídos";

  enid: boolean = true;
  tyler: boolean = true;

  constructor() {}

  ngOnInit() {}

  showWolf(): void {
    
    this.enid = !this.enid 

  }

  showEnid(): void {

    this.enid = !this.enid

  }

  showMonster(): void {

    this.tyler = !this.tyler

  }

  showTyler(): void {

    this.tyler = !this.tyler
  }
}
