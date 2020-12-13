import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Livre} from '../model/livre';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  url = 'http://localhost:3000/livre/';
  id: number;
  constructor(private http: HttpClient, private router: Router) {
  }
  getLivres() {
    return this.http.get<Livre[]>(this.url);
  }

  deleteLivre(id) {
    return this.http.delete(this.url + id);
  }

  addLivre(l: Livre) {
    l.like = 0;
    return this.http.post(this.url, l);
  }

  searchLivre(id: number) {
    this.id = id;
    return this.http.get<Livre[]>(this.url + this.id);
  }
  idd() {
    return this.id;
  }

  putLivre(l: Livre) {
    return this.http.put(this.url, l);
  }
  submit(form){
    this.addLivre(form).subscribe(() => {
      this.router.navigate(['/GestionProduit']);
      console.log('book added succesfully');

    });
  }
  getLivreById(id: number): Observable<Livre[]>{
    return this.http.get<Livre[]>(this.url + id);
  }
}
