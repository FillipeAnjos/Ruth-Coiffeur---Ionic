import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BuscarDadosUserService {

  constructor(
    private sqlite: SQLite,
    private http: HttpClient
  ){ }

  usuario: any = {};

  teste(){
    return this.http.get('http://jsonplaceholder.typicode.com/users');
    //https://medium.freecodecamp.org/how-to-build-your-first-ionic-4-app-with-api-calls-f6ea747dc17a
  }

    buscarDadosUser(){
      this.sqlite.create({
        name: 'userLog.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        let status = "1";
        db.executeSql('SELECT * FROM user WHERE status = ?', [status])
        .then((data) => {

          if(data.rows.length == 1){
            console.log('Caiu no IFFFFF');
            for (let i = 0; i < data.rows.length; i++) { 
              //Aqui se encontra todos os dados do usuário logado              
              this.usuario.id = data.rows.item(i).id;
              this.usuario.nome = data.rows.item(i).nome;
              this.usuario.email = data.rows.item(i).email;
              this.usuario.foto = data.rows.item(i).foto;
              this.usuario.idgoogle = data.rows.item(i).idgoogle;
              this.usuario.status = data.rows.item(i).status;//Aqui eu atribuo 1 para o usuário Logado!
            }

          }else{
            console.log('Usuário deslogado!');
              //Aqui se encontra todos os dados vazio do usuário deslogado!
              this.usuario.id = "";
              this.usuario.nome = "";
              this.usuario.email = "";
              this.usuario.foto = "";
              this.usuario.idgoogle = "";
              this.usuario.status = "";//Aqui eu atribuo 0 para o usuário Deslogado!
          }
        })
        .catch(e => console.log('Erro ao executar a query!'));
      })
      .catch(e => console.log('Erro ao conectar com o banco!'));

      return this.usuario;

    }













}
