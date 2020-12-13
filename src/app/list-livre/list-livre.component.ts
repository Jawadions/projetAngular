import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Livre} from '../model/livre';

@Component({
  selector: 'app-list-livre',
  templateUrl: './list-livre.component.html',
  styleUrls: ['./list-livre.component.css']
})
export class ListLivreComponent implements OnInit {
  @Input() livre: Livre;
  @Output() notifLike = new EventEmitter<Livre>();
  Livre: string;
  constructor() { }

  ngOnInit(): void {
  }
  getColor(){
    if (this.livre.quantity === 0){
      return 'red';
    }
  }
  sendNotif(){
    this.notifLike.emit(this.livre);
    this.livre.like++;
  }


}
