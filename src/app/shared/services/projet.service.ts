import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Projet} from '../../models/projet/projet.model';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  
  constructor(private http : HttpClient) { }

  addProjet(Projet: Projet) {
    return this.http.post<Projet>('http://localhost:3000/api/projet'+"/projet" , Projet);
  }

}
