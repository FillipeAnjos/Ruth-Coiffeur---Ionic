import { Component, OnInit } from '@angular/core';
import { EventopageService } from '../services/eventopage.service';

@Component({
  selector: 'app-unhas',
  templateUrl: './unhas.page.html',
  styleUrls: ['./unhas.page.scss'],
})
export class UnhasPage implements OnInit {

  pagina: String;

  constructor(
    private eventoPage: EventopageService
  ) { }

  ngOnInit() {
  }

  voltar(){
    this.pagina = '/';
    this.eventoPage.eventoPaginaRight(this.pagina);
  }

}
