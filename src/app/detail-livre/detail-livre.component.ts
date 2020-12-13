import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Livre} from '../model/livre';
import {LivreService} from '../shared/livre.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-detail-livre',
  templateUrl: './detail-livre.component.html',
  styleUrls: ['./detail-livre.component.css']
})
export class DetailLivreComponent implements OnInit {
  listLivre: Livre[];
  livre: any = [];


  constructor(private serviceRoute: ActivatedRoute , private service: LivreService ) { }

  ngOnInit(): void {
     this.service.getLivreById(this.serviceRoute.snapshot.params.id).subscribe(s => this.livre = s);
  }

}
