import { Component, OnInit } from '@angular/core';
import { EventopageService } from '../services/eventopage.service';


@Component({
  selector: 'app-cabelos',
  templateUrl: './cabelos.page.html',
  styleUrls: ['./cabelos.page.scss'],
})
export class CabelosPage implements OnInit {

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
