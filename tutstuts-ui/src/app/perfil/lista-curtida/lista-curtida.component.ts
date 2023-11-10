import { Component } from '@angular/core';
import { CloudinaryService } from 'src/app/cloudinary.service';
import { Curtida, EventoCard } from 'src/app/core/model';
import { AuthService } from 'src/app/security/auth.service';
import { PerfilService } from '../perfil.service';

@Component({
  selector: 'app-lista-curtida',
  templateUrl: './lista-curtida.component.html',
  styleUrls: ['./lista-curtida.component.css'],
})
export class ListaCurtidaComponent {
  selectedImage: File | null = null;
  teste: number | null = null;
  currentPage = 1;
  itemsPerPage = 3;
  allCardDataList: EventoCard[] = [];
  eventosCurtidos: EventoCard[] = [];
  paginatedCardDataList: EventoCard[] = [];
  loading: boolean = false;
  showLoading: boolean = false;
  cardDataList: EventoCard[] = [];

  constructor(
    private cloudinaryService: CloudinaryService,
    private auth: AuthService,
    private perfilService: PerfilService
  ) {}

  ngOnInit() {
    this.perfilService
      .obterEventos()
      .then((data: EventoCard[]) => {
        this.perfilService
          .obterEventosCurtidoPeloUsuario()
          .then((dataCurtida: Curtida[]) => {
            this.cardDataList = data;
            this.allCardDataList = [...this.cardDataList];

            this.allCardDataList.forEach((x) => {
              // console.log(x.curtiu);
              // if (x.curtiu && x != undefined) {
              //   console.log('opa');
              //   this.eventosCurtidos.push(x);
              // }
              dataCurtida.forEach((y) => {
                if (x.id == y.evento_id) {
                  x.curtiu = y.is_curtiu;
                  this.eventosCurtidos.push(x);
                }
              });
            });
            this.loadNextPage();
            window.onscroll = () => {
              if (
                window.innerHeight + window.scrollY >=
                document.body.scrollHeight
              ) {
                this.handleScroll();
              }
            };
          })
          .catch((e) => {
            this.cardDataList = data;
            this.allCardDataList = [...this.cardDataList];
            this.loadNextPage();
            window.onscroll = () => {
              if (
                window.innerHeight + window.scrollY >=
                document.body.scrollHeight
              ) {
                this.handleScroll();
              }
            };
          });
      })
      .catch((error) => {
        console.error('Ocorreu um erro ao obter os eventos: ', error);
      });
  }

  loadNextPage() {
    const endIndex = this.currentPage * this.itemsPerPage;
    this.paginatedCardDataList = this.eventosCurtidos.slice(0, endIndex);
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
      const result = await this.cloudinaryService.uploadImage(
        this.selectedImage
      );
      if (result && result.secure_url) {
        console.log(result.secure_url);
      }
    } catch (error) {
      console.error('Erro ao enviar imagem:', error);
    }
  }
}