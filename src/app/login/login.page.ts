import { Component, OnInit } from '@angular/core';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { NavController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public navCtrl: NavController, 
    private sqlite: SQLite,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
  }

  email: String;
  senha: String;


  //Função de apresentar ALERT
  async chamarAlert(hea, msg) {
    const alert = await this.alertCtrl.create({
      header: hea,
      //subHeader: 'Subtitle',
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }

  login(){
    
    if(this.email == undefined || this.senha == undefined){
      let header = "Login";
      let mensagem = "Informe o email e a senha!";
      this.chamarAlert(header, mensagem);
    }else{

      this.sqlite.create({
        name: 'ruth.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('SELECT * FROM teste WHERE email = ? and senha = ?', [this.email, this.senha])
          .then((res: any) => {
            console.log("THEN do select login.");
            if(res.rows.length > 0) {

              /* 
                Fazer a logica do usuário logadooooooooooooooooooooooooooooo
              */
                let item = res.rows.item(0);
                console.log(item.id);
                console.log(item.email);
                console.log(item.senha);

            }else{
              let header = "Login";
              let mensagem = "Email ou senha errado ou Email não consta em nosso Banco!";
              this.chamarAlert(header, mensagem);
            }
          })
          .catch(e => {
            console.log("CATCH do select.");

          });
      }).catch(e => {
        console.log("CATCH do SQLiteObject select.");
      });
    
    }
  }

  linkCriaUmaConta(){
              // navigateForward
              // navigateBack
              // navigateRoot
    this.navCtrl.navigateForward('/tabs/criarconta');
  }

  



}
