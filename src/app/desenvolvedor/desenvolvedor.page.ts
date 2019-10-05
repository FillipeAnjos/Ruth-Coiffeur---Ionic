import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-desenvolvedor',
  templateUrl: './desenvolvedor.page.html',
  styleUrls: ['./desenvolvedor.page.scss'],
})
export class DesenvolvedorPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  //https://www.facebook.com/fillipe.anjos.3

  linkRedesSociais(redes){
    if(redes == 1){
      alert('Face');
    }else if(redes == 2){
      alert('Git');
    }else if(redes == 3){
      alert('LinkDin');
    }
  }
}
