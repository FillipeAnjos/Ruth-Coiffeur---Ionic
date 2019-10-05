import { Injectable } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { NavController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class EventopageService {

  constructor(
    private eventPage: NativePageTransitions,
    private navCrtl: NavController
  ) { }

    eventoPaginaRight(pagina){
      let options: NativeTransitionOptions = {
        direction: 'right',
        duration: 400,
        slowdownfactor: -1,
        iosdelay: 50
      }
      this.eventPage.slide(options);
      this.navCrtl.navigateForward(pagina);
    }

    eventoPaginaLeft(pagina){
      let options: NativeTransitionOptions = {
        direction: 'left',
        duration: 400,
        slowdownfactor: -1,
        iosdelay: 50
      }
      this.eventPage.slide(options);
      this.navCrtl.navigateForward(pagina);
    }

    eventoPaginaFlip(pagina){
      let options: NativeTransitionOptions = {
        direction: 'up',
        duration: 600
      }
      this.eventPage.flip(options);
      this.navCrtl.navigateForward(pagina);
    }

    eventoPaginaFade(pagina){
      this.eventPage.fade(null);
      this.navCrtl.navigateForward(pagina);
    }

    eventoPaginaCurl(pagina){
      let options: NativeTransitionOptions = {
        direction: 'up',
        duration: 600
      }
      this.eventPage.curl(options);
      this.navCrtl.navigateForward(pagina);
    }

}
/* 

  Video aula ensinando
  https://www.youtube.com/watch?v=4axQp0wfMtU

  Ducumentation
  https://ionicframework.com/docs/native/native-page-transitions
  
*/
