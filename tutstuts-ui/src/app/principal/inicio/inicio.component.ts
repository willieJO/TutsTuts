import { PrincipalService } from './../principal.service';
import { Component } from '@angular/core';
import { CloudinaryService } from '../.././cloudinary.service';
import { AuthService } from 'src/app/security/auth.service';
import { Evento, Curtida } from 'src/app/core/model';
import { EventoCard } from 'src/app/core/model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  selectedImage: File | null = null;
  teste: number | null = null;
  currentPage = 1;
  itemsPerPage = 3;
  allCardDataList: EventoCard[] = [];
  paginatedCardDataList: EventoCard[] = [];
  loading: boolean = false;
  showLoading: boolean = false;
  cardDataList: EventoCard[] = [];

  constructor(private cloudinaryService: CloudinaryService,
     private auth: AuthService,
     private route:ActivatedRoute,
     private principalService:PrincipalService) {}

  ngOnInit() {
    const id = this.route.snapshot.params[`id`];
    if(id != undefined &&id != 'new'){
      this.principalService.obterEventoPorId(id).then((data: EventoCard[]) => {
        this.principalService.obterEventosCurtidoPeloUsuario().then((dataCurtida: Curtida[]) => {
          this.cardDataList = data;
          this.allCardDataList = [...this.cardDataList];
  
          this.allCardDataList.forEach(x => {
  
            dataCurtida.forEach(y => {
              if (x.id == y.evento_id) {
                x.curtiu = y.is_curtiu;
              }
            });
          });
          this.loadNextPage();
          window.onscroll = () => {
            if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
              this.handleScroll();
            }
          };
        }).catch((e)=> {
          this.cardDataList = data;
          this.allCardDataList = [...this.cardDataList];
          this.loadNextPage();
          window.onscroll = () => {
            if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
              this.handleScroll();
            }
          };
        })
      }).catch((error) => {
        console.error('Ocorreu um erro ao obter os eventos: ', error);
      });
      return;
    }
    this.principalService.obterEventos().then((data: EventoCard[]) => {
      this.principalService.obterEventosCurtidoPeloUsuario().then((dataCurtida: Curtida[]) => {
        this.cardDataList = data;
        this.allCardDataList = [...this.cardDataList];

        this.allCardDataList.forEach(x => {

          dataCurtida.forEach(y => {
            if (x.id == y.evento_id) {
              x.curtiu = y.is_curtiu;
            }
          });
        });
        this.loadNextPage();
        window.onscroll = () => {
          if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 300) {
            this.handleScroll();
          }
        };
      }).catch((e)=> {
        this.cardDataList = data;
        this.allCardDataList = [...this.cardDataList];
        this.loadNextPage();
        window.onscroll = () => {
          if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 300) {
            this.handleScroll();
          }
        };
      })
    }).catch((error) => {
      console.error('Ocorreu um erro ao obter os eventos: ', error);
    });

  }

  loadNextPage() {
    const endIndex = this.currentPage * this.itemsPerPage;
    this.paginatedCardDataList = this.allCardDataList.slice(0, endIndex);
  }

  handleScroll() {
    if (!this.loading) {
      this.showLoading = true; // Ativar o indicador de carregamento
      this.loading = true;
      this.currentPage++;
      this.loadNextPage();
      this.loading = false;
      this.showLoading = false;
    }
  }

  onFileSelected(event: any) {
    this.auth.getUserIdFromToken();
    this.selectedImage = event.target.files[0];
  }

  async uploadImage() {
    if (!this.selectedImage) {
      return;
    }
    try {
      const result = await this.cloudinaryService.uploadImage(this.selectedImage);
      if (result && result.secure_url) {
        console.log(result.secure_url);
      }
    } catch (error) {
      console.error('Erro ao enviar imagem:', error);
    }
  }

}
