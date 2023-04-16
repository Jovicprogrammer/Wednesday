import { Injectable } from '@angular/core';
import { Alumni } from '../Alumni';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = 'http://localhost:3000/alumnis'

  constructor(private http: HttpClient) { }

  remove(alumnis: Alumni[], alumni: Alumni) {

    console.log("Ativando service");
    return alumnis.filter((a) => alumni.name !== a.name); 
  }

  getAll(): Observable<Alumni[]> {
    return this.http.get<Alumni[]>(this.apiUrl);

  }



}
