import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { ImagemModalPage } from "../imagem-modal/imagem-modal.page";

import { ActivatedRoute } from "@angular/router";//Serve para pegar valor por parametro

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {

  constructor(
    private modalCrtl: ModalController,
    private route: ActivatedRoute
    ) { }

    id: String;
    imagens: any[];

    ngOnInit() {
      this.id = this.route.snapshot.paramMap.get('id');

      switch(this.id) {
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
    

  

  verImagem(index){
    this.modalCrtl.create({
      component : ImagemModalPage,
      componentProps : {
        index : index,
        opcao : this.id
      }
    }).then(modal => modal.present())
  }




}
