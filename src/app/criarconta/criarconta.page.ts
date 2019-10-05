import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-criarconta',
  templateUrl: './criarconta.page.html',
  styleUrls: ['./criarconta.page.scss'],
})
export class CriarcontaPage implements OnInit {

  constructor(
    public navCtrl: NavController, 
    private sqlite: SQLite,
    private alertCtrl: AlertController
    ) { }

  email: String;
  senha: String;

  ngOnInit() {
  }

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



 


  criarConta(){
    if(this.email == undefined || this.senha == undefined){
      let header = "Criar Conta!";
      let mensagem = "Informe o email e a senha!";
      this.chamarAlert(header, mensagem);
    }else{

      this.sqlite.create({
        name: 'ruth.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('SELECT * FROM teste WHERE email = ?', [this.email])
          .then((res: any) => {
            console.log("THEN do select.");
            if(res.rows.length > 0) {
              //IF condição de verificação se ja existe o usuario no banco!
                let cabecalho = "Criar Conta!";
                let msgIf = "Você já possui um cadastro com esse email!";
                this.chamarAlert(cabecalho, msgIf);
                this.navCtrl.navigateForward('/tabs/login');
              //FIM do IF
            }else{
              //ELSE condição de criação do usuario!
              this.sqlite.create({
                name: 'ruth.db',
                location: 'default'
              }).then((db: SQLiteObject) => {
                db.executeSql('INSERT INTO teste (email, senha)VALUES(?,?)',[this.email, this.senha])
                  .then(res => {
                    let cabe = "Criar Conta!";
                    let msgInserir = "Cliente inserido com sucesso!";
                    this.chamarAlert(cabe, msgInserir);
                    this.navCtrl.navigateForward('/tabs/login');
                  })
                  .catch(e => {
                    let cabee = "Criar Conta!";
                    let msgErro = "Erro ao inserir o cliente!";
                    this.chamarAlert(cabee, msgErro);
                  });
              }).catch(e => {
                alert("Erro no SQLiteObject.");
              });
            }
            //FIM do ELSE
          })
          .catch(e => {
            console.log("CATCH do select.");
          });
      }).catch(e => {
        console.log("CATCH do SQLiteObject select.");
      });

    }
  }

}
