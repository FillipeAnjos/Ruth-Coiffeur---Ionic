import { Component, OnInit } from '@angular/core';
import { NavController, Events } from '@ionic/angular';

/* ******************************************************* */
/*           Import's necessarios Login - Google           */
/* ******************************************************* */
import { GooglePlus } from "@ionic-native/google-plus/ngx";
import { AngularFireModule } from "angularfire2";
import * as firebase from 'firebase';
import { HttpClient } from '@angular/common/http';
/* ******************************************************* */
/* ******************************************************* */
/* ******************************************************* */
import { LoadingController } from '@ionic/angular';
import { SQLite, SQLiteObject } from "@ionic-native/sqlite/ngx";
import { BuscarDadosUserService } from '../services/buscar-dados-user.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {

  constructor(
    /* Login - Google */
    public googleplus: GooglePlus,
    /* ************************** */
    private http: HttpClient,
    public loadingController: LoadingController,
    private navCrtl: NavController,
    private sqlite: SQLite,
    private buscarDados: BuscarDadosUserService,
    private events: Events
  ) { }

  usuario: any = {};
  nome: String;
  email: String;
  foto: String;

  ngOnInit() {
  }

  /* Metodo de Login do google */
  login(){
    this.googleplus.login({
      'webClientId': '461311874726-9tfr5n4oepp28lrnpfjhge1jkvr9i6sr.apps.googleusercontent.com',
      'offline': true
    }).then(res => {
      
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
      .then(suc => {

        this.aguardar();

        return new Promise((resolve) => {
          setTimeout(() => {


            //Conteudo apresentado apois o tempo
            var user = firebase.auth().currentUser;
            if (user != null) {

                user.displayName;
                user.email;
                user.photoURL;
                user.uid;

                this.criarTableUsuarioLogado();
                this.verUserBanco(user.displayName, user.email, user.photoURL, user.uid);

                this.navCrtl.navigateForward('/tabs/perfil');
                //this.events.publish('usuarioLogadoGoogle', this.usuario);
            }

            resolve(true);
          }, 3000);
        });

        //https://firebase.google.com/docs/auth/web/manage-users?hl=pt-br
        //https://angularfirebase.com/lessons/ionic-google-login-with-firebase-and-angularfire/

      }).catch(ns => {
        alert("Error ao efetuar o Login!");
      })

    })
  }
  /* ************************* */
  
  criarTableUsuarioLogado(){
    this.sqlite.create({
      name : 'userLog.db',
      location : 'default'
    })
    .then((banco: SQLiteObject) => {
      banco.executeSql('CREATE TABLE user(id integer primary key AUTOINCREMENT NOT NULL, nome VARCHAR(80), email VARCHAR(80), foto VARCHAR(250), idgoogle VARCHAR(250), status VARCHAR(10))', [])
      .then(() => console.log("Banco de dados userLog.db criado com sucesso!!!"))
      .catch(e => console.log("Banco userLog.db já existe!"));
    })
    .catch(e => (alert("Erro eo criar o banco Usuario logado")));
  }

  verUserBanco(nome, email, foto, id){
    this.sqlite.create({
      name: 'userLog.db',
      location: 'default'
    })
    .then((banco: SQLiteObject) => {
      banco.executeSql('SELECT * FROM user WHERE email = ?', [email])
      .then((res: any) => {
        if(res.rows.length > 0){

          let status = "1";
          this.sqlite.create({
            name: 'userLog.db',
            location: 'default'
          })
          .then((banco: SQLiteObject) => {
            banco.executeSql('UPDATE user SET status = ? WHERE email = ?', [status, email])
            .then(() => 
              //Aqui eu chamo o metodo de buscar o usuario logado!!!
              this.usuario = this.buscarDados.buscarDadosUser()
            )
            .catch(e => console.log('Erro no Update do usuário!'));
          })
          .catch(e => console.log('Erro ao atualizar a tabela user!'));

        }else{

          this.sqlite.create({
            name: 'userLog.db',
            location: 'default'
          })
          .then((banco: SQLiteObject) => {
            let status = "1";
            banco.executeSql('INSERT INTO user(nome, email, foto, idgoogle, status)VALUES(?, ?, ?, ?, ?)', [nome, email, foto, id, status])
            .then(() => console.log('Insert Query inserida com sucesso!'))
            .catch(e => console.log('Erro na Query de inserir do then!'));
          })
          .catch(e => console.log('Erro ao inserir o usuario no banco userLog!'));

        }
      })
      .catch(e => console.log('Erro na Query de inserir do catch!'));
    })
    .catch(e => console.log('Erro ao inserir o usuario no banco userLog!'));
  }



  async aguardar(){
    const loading = await this.loadingController.create({
      message: 'Aguarde ...',
      duration: 3000
    });
    await loading.present();
  }

}


