import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { AlertService } from '../services/alert.service';
import { BuscarDadosUserService } from '../services/buscar-dados-user.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario: any = {};

  constructor(
    private navCrtl: NavController,
    private sqlite: SQLite,
    private loadingController: LoadingController,
    public alertController: AlertController,
    private alertService: AlertService,
    private buscarDadosUser: BuscarDadosUserService
  ) { }

  ngOnInit() {
  }

  meusDados(){
    alert("Meus Dados");
  }

  agendar(){
    alert("Estou no AGENDAR!");
  }





  async logout() {
    const alert = await this.alertController.create({
      header: 'logout',
      message: 'Tem certeza que deseja sair?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('rs');
          }
        }, {
          text: 'Sim',
          handler: () => {

            /* ********************************************************************** */
            /*                        Conteudo do metodo deslogar                     */
            /* ********************************************************************** */
            this.sqlite.create({
              name : 'userLog.db',
              location : 'default'
            })
            .then((db: SQLiteObject) => {
              db.executeSql("UPDATE user SET status = ? WHERE status = ?", ["0", "1"])
              .then(() => {
                
                this.loading();

              })
              .catch(e => "");
            })
            .catch(e => "");
            /* ********************************************************************** */
            /* ********************************************************************** */
            /* ********************************************************************** */
            
          }
        }
      ]
    });

    await alert.present();
  }




  loading(){
    let msg = "Aguarde ...";
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

        //Metodo de buscar o usuário já deslogado!!!
        this.usuario = this.buscarDadosUser.buscarDadosUser();

        //Conteudo apresentado apois o tempo
        let header = "logout";
        let msg = "Usuário deslogado com sucesso!";  
        this.alertService.alertService(header, msg);

        this.navCrtl.navigateForward('/tabs/home');

        resolve(true);
      }, 3000);
    });
  }




}
