import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ModalController, NavParams, IonSlides } from "@ionic/angular";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: 'app-imagem-modal',
  templateUrl: './imagem-modal.page.html',
  styleUrls: ['./imagem-modal.page.scss'],
})
export class ImagemModalPage implements OnInit {

  indice: number;
  opcao: String;
  imagens: any[];

  options = {
    pager: true,
    zoom : {
      maxRatio : 3
    }
  }

  @ViewChild('slides') slides : IonSlides;

  @ViewChild('slides', {read : ElementRef}) slide: ElementRef; 

  

  constructor(
    private modalCtrl: ModalController,
    private navparams: NavParams,
    private loadingController: LoadingController
    ) { 

      this.loadingController.create({
        message: 'Carregando Imagem'
      }).then(loading => loading.present())

      this.indice = this.navparams.get('index');
      this.opcao = this.navparams.get('opcao');

      switch(this.opcao) {
        case "1":
            this.imagens = [
              'pasta1/img1.jpg',
              'pasta1/img2.jpg',
              'pasta1/img3.jpg',
              'pasta1/img4.jpg',
              'pasta1/img5.jpg',
              'pasta1/img6.jpg',
              'pasta1/img7.jpg',
              'pasta1/img8.jpg',
              'pasta1/img9.jpg',
              'pasta1/img10.jpg',
            ];
          break;
        case "2":
            this.imagens = [
              'pasta2/img1.jpg',
              'pasta2/img2.jpg',
              'pasta2/img3.jpg',
              'pasta2/img4.jpg',
              'pasta2/img5.jpg',
              'pasta2/img6.jpg',
              'pasta2/img7.jpg',
              'pasta2/img8.jpg',
              'pasta2/img9.jpg',
              'pasta2/img10.jpg',
            ];
          break;
          case "3":
            this.imagens = [
              'pasta3/charlie.jpg',
              'pasta3/evanescence.jpg',
              'pasta3/linkPark.jpg',
              'pasta3/nickelback.jpg',
              'pasta3/oRappa.jpeg',
              'pasta3/pearJam.jpg',
              'pasta3/pitty.jpg',
              'pasta3/simplePlan.jpg',
              'pasta3/strike.jpg',
              'pasta3/u2.jpg',
            ];
          break;
        default:
          // code block
      }

    }

    



  ngOnInit() {

    //console.log(this.slide);

    this.slides.slideTo(this.indice, 0).then(res => {
      this.loadingController.dismiss();
    })
  }

  fecharModal(){
    this.modalCtrl.dismiss();
  }

  zoomOut(){
    this.slide.nativeElement.swiper.zoom.out()
  }

  zoomIn(){
    this.slide.nativeElement.swiper.zoom.in()
  }

}
