import { Component, OnInit } from '@angular/core';
import { EventopageService } from '../services/eventopage.service';

@Component({
  selector: 'app-maquiagem',
  templateUrl: './maquiagem.page.html',
  styleUrls: ['./maquiagem.page.scss'],
})
export class MaquiagemPage implements OnInit {

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
