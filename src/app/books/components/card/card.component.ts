import { Component, Input, OnInit } from '@angular/core';
import { Books } from '../../interfaces/book.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  public book!: Books

  ngOnInit(): void {
    if(!this.book) throw  Error('Book property is required');
  }

}
