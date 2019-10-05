import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { EventopageService } from '../services/eventopage.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  pagina: String;

  constructor(
    private navCtrl: NavController,
    private eventoPage: EventopageService
  ) { }

  ngOnInit() {
  }

  imgCategorias(param){
    if(param == 1){
      this.pagina = '/unhas';
      this.eventoPage.eventoPaginaLeft(this.pagina);
      /*
      <ion-buttons slot="start">
        <ion-back-button defaultHref="/"></ion-back-button>
      </ion-buttons>
      */
    }else if(param == 2){
      this.pagina = '/cabelos';
      this.eventoPage.eventoPaginaLeft(this.pagina);
    }else if(param == 3){
      this.pagina = '/maquiagem';
      this.eventoPage.eventoPaginaLeft(this.pagina);
    }
  }

}
