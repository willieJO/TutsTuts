import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComentarioComponent } from 'src/app/modal/comentario/comentario.component';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CardComponent {
  constructor(public dialog: MatDialog) {}

  @Input() title: string = '';
  @Input() imageSrc: string = '';
  @Input() content: string = '';
  @Input() likes: number = 0;
  @Input() nome: string= '';
  @Input() id: number = 0;
  @Input() localidade: string = "";
  @Input() link: string = "";
  @Input() dataEvento: string = "";
  @Input() headerImageURL: string = "";

  isFavorito: boolean = false;

  toggleFavorito() {
    this.isFavorito = !this.isFavorito;
  }
  openModal(id:number) {

    const dialogRef = this.dialog.open(ComentarioComponent, {
      data: { cardId: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
