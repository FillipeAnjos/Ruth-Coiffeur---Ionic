import { Component, OnInit } from '@angular/core';
import { NavController, Events } from '@ionic/angular';

import { LoadingController } from '@ionic/angular';
import { BuscarDadosUserService } from '../services/buscar-dados-user.service';
import { Network } from '@ionic-native/network/ngx';
import { EventopageService } from '../services/eventopage.service';

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.page.html',
  styleUrls: ['./ajuda.page.scss'],
})
export class AjudaPage implements OnInit {

  //usuario: any[] = [];
  usuario: any = {};

  estadoDaRede: any;
  redeInternet: String;
  pagina: String;

  constructor(
    private navCrtl: NavController,
    public loadingController: LoadingController,
    private dadosUser: BuscarDadosUserService,
    private events: Events,
    private network: Network,
    private eventoPagina: EventopageService
  ) { 

    this.checkConnection();

    //this.getDadosUser();

    /*this.events.subscribe('usuarioLogadoGoogle', (userLogado) => {
      this.usuario = userLogado;//Aqui é o usuario logado vendo da pagina loginpage
    })*/

  }

  ngOnInit() {
  }



  checkConnection() {
    this.estadoDaRede = this.network.type;
    /* 
      Connection.UNKNOWN
      Connection.ETHERNET
      Connection.WIFI
      Connection.CELL_2G
      Connection.CELL_3G
      Connection.CELL_4G
      Connection.CELL
      Connection.NONE
    */
    console.log("O estado atual da rede de conexão a internet é: "+ this.estadoDaRede);
    
    if(this.estadoDaRede == 'none'){
      this.redeInternet = '0';
    }else{
      this.redeInternet = '1';
    }  
}



















  loginPageTeste(){
    this.pagina = '/tabs/loginpage';
    this.eventoPagina.eventoPaginaFlip(this.pagina);
  }
  categotiaTeste(){
    this.navCrtl.navigateForward('/tabs/categoria');
  }



  //Metodo de pegar dados do usuario 
  getDadosUser(){
    this.usuario = this.dadosUser.buscarDadosUser();
  }




  

  loading(){
    let msg = "Aguarde ....";
    this.aguardar(msg);    
  }

  async aguardar(mensagem){

    const loading = await this.loadingController.create({
      message: mensagem,
      duration: 3000//3 segundos!
    });
    await loading.present();

    /* ****** Loading acima - setTimeout abaixo **********/
    
    return new Promise((resolve) => {
      setTimeout(() => {

        //Conteudo apresentado apois o tempo
        this.navCrtl.navigateForward('/tabs/categoria');

        resolve(true);
      }, 3000);
    });
  }





}
