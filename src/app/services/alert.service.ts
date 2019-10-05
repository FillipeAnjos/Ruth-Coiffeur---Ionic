import { Injectable } from '@angular/core';
import { NavController, LoadingController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private navCrtl: NavController,
    private loadingController: LoadingController,
    public alertController: AlertController
  ) { }

  async alertService(cabecalho, msg) {
    const alert = await this.alertController.create({
      header: cabecalho,
      //subHeader: 'Subtitle',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }
}
