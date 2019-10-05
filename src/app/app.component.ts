import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private sqlite: SQLite
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.createTable();
    });
  }

  //Ao entrar no APP é criado a tabela!
  private createTable(){
    this.sqlite.create({
      name: 'ruth.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql('CREATE TABLE teste(id integer primary key AUTOINCREMENT NOT NULL, email VARCHAR(80), senha VARCHAR(80))', [])
          .then(() => console.log(''))
          .catch(e => console.log(''));
      })
      .catch(e => alert('Erro ao criar o banco'));
  }



}
