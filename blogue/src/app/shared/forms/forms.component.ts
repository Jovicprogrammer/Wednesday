import { Component, OnInit } from '@angular/core';

import { Alumni } from '../../Alumni';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  name: string = '';

  alumnis: Alumni[] = [];

  alumniDetails = ''; 

  constructor(private listService: ListService) {
    this.getAlumnis()
  }

  ngOnInit(): void {}

  showSpecie(alumni:Alumni) {

    this.alumniDetails = `${alumni.name} é da espécie ${alumni.type}!`;

  }

  removeAlumni(alumni:Alumni) {

    console.log('Removendo aluno...');
    this.alumnis = this.listService.remove(this.alumnis, alumni);
  }

  getAlumnis(): void {
    this.listService.getAll().subscribe((alumnis) => (this.alumnis = alumnis));
  }






}
