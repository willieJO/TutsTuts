import { PrincipalService } from './../principal.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComentarioComponent } from 'src/app/modal/comentario/comentario.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { Curtida } from 'src/app/core/model';
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
export class CardComponent  implements OnInit{
  constructor(public dialog: MatDialog, private principalService:PrincipalService) {}
  ngOnInit(): void {
    this.isFavorito = this.curtiuEvento;
  }

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
  @Input() curtiuEvento: boolean;

  isFavorito: boolean = false;

  toggleFavorito(id:number) {
    this.isFavorito = !this.isFavorito;
    var curtida = new Curtida();
    curtida.is_curtiu = this.isFavorito;
    this.curtiuEvento = this.isFavorito;
    curtida.evento_id = id;
    this.principalService.curtirEvento(curtida);
    this.likes = this.isFavorito ? this.likes + 1 : this.likes - 1;
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
