import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  galeriaOpcao(opcao){

    if(opcao == 1){
      this.navCtrl.navigateForward('/tabs/galeria/1');
    }else if(opcao == 2){
      this.navCtrl.navigateForward('/tabs/galeria/2');
    }else if(opcao == 3){
      this.navCtrl.navigateForward('/tabs/galeria/3');
    }else{
      alert("Opção errada na Categoria!");
    }

  }
}
