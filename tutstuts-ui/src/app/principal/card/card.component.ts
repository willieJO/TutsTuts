import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title: string = '';
  @Input() imageSrc: string = '';
  @Input() content: string = '';
  @Input() likes: number = 0;

  isFavorito: boolean = false;

  toggleFavorito() {
    this.isFavorito = !this.isFavorito;
  }
}
