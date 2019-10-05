import { Component } from '@angular/core';
import { BuscarDadosUserService } from '../services/buscar-dados-user.service';
import { Events } from '@ionic/angular';
import { EventopageService } from '../services/eventopage.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  user: any = {};

  pagina: String;

  constructor(
    private buscarUser: BuscarDadosUserService,
    private events: Events,
    private eventoPage: EventopageService
  ){
     
    this.user = this.buscarUser.buscarDadosUser();//Apresentar o usuaário logado ou deslogado!
    
    /*
    this.events.subscribe('usuarioLogadoGoogle', (userLogado) => {
      this.user = userLogado;//Aqui é o usuario logado vendo da pagina loginpage
    })
    */

  }


  home(){
    this.pagina = 'tabs/home';
    this.eventoPage.eventoPaginaLeft(this.pagina);
  }

  categoria(){
    this.pagina = 'tabs/categoria';
    this.eventoPage.eventoPaginaLeft(this.pagina);
  }

  perfil(){
    this.pagina = 'tabs/perfil';
    this.eventoPage.eventoPaginaLeft(this.pagina);
  }

  loginpage(){
    this.pagina = 'tabs/loginpage';
    this.eventoPage.eventoPaginaLeft(this.pagina);
  }

  desenvolvedor(){
    this.pagina = 'tabs/desenvolvedor';
    this.eventoPage.eventoPaginaLeft(this.pagina);
  }

  ajuda(){
    this.pagina = 'tabs/ajuda';
    this.eventoPage.eventoPaginaLeft(this.pagina);
  }

 







}
