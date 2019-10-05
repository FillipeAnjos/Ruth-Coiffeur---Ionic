import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SQLite } from '@ionic-native/sqlite/ngx';

import { ImagemModalPageModule } from './imagem-modal/imagem-modal.module';

import { HttpClientModule } from '@angular/common/http';

/* ******************************************************* */
/*        Configurações necessarias Login do Google        */
/* ******************************************************* */
import { GooglePlus } from "@ionic-native/google-plus/ngx";
import { AngularFireModule } from "angularfire2";
import * as firebase from 'firebase';
export const firebaseConfig={
    apiKey: "AIzaSyD8KKciS3jEElOAyzwjpQ1Y7cmV0OAnr14",
    authDomain: "fillipe-anjos.firebaseapp.com",
    databaseURL: "https://fillipe-anjos.firebaseio.com",
    projectId: "fillipe-anjos",
    storageBucket: "fillipe-anjos.appspot.com",
    messagingSenderId: "461311874726"
}
firebase.initializeApp(firebaseConfig)
/* ******************************************************* */
/* ******************************************************* */
/* ******************************************************* */

import { AjudaPage } from './ajuda/ajuda.page';
import { BuscarDadosUserService } from './services/buscar-dados-user.service';
import { Network } from '@ionic-native/network/ngx';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    ImagemModalPageModule,
    /* Login - Google */
    AngularFireModule.initializeApp(firebaseConfig),
    /* ************** */
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    NativePageTransitions,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    /* Login - Google */
    GooglePlus,
    /* ************** */
    AjudaPage,
    BuscarDadosUserService,
    Network
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
