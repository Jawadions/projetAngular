import {Component, Input, OnInit} from '@angular/core';
import {Livre} from '../model/livre';
import {LivreService} from '../shared/livre.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home-livre',
  templateUrl: './home-livre.component.html',
  styleUrls: ['./home-livre.component.css']
})
export class HomeLivreComponent implements OnInit {
  listLivre: any = [];
  private i: number;
  livre: string;
  @Input() livreInput: string;
  p = 1;
  constructor(private serviceLivre: LivreService) { }

  ngOnInit(): void {
    this.listLivre = this.serviceLivre.getLivres().subscribe(data => this.listLivre = data );
    console.log(this.listLivre);
  }
  incrementLike(livre: Livre){
    let i = this.i++;
    this.listLivre[i].like++;
  }

}
