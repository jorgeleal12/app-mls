import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { LoginServiceService } from '../Services/login-service.service';
import { ZoomImagePage } from '../zoom-image/zoom-image.page';


@Component({
  selector: 'app-view-image-s',
  templateUrl: './view-image-s.page.html',
  styleUrls: ['./view-image-s.page.scss'],
})
export class ViewImageSPage implements OnInit {

  data
  photos
  url = 'http://190.145.99.254:81/laravel-mls/public/public/';
  image
  idservice
  constructor(public modalController: ModalController, private navParams: NavParams, private loginServiceService: LoginServiceService) {
    this.data = navParams.get('data');
    this.idservice = navParams.get('idservice');

  }


  ngOnInit() {
    this.search();
  }

  back() {
    this.modalController.dismiss({
      'dismissed': false,
    });
  }
  search() {
    const params = {
      id_odi: this.data.idodi
    }
    this.loginServiceService.SearchImageOdi(params).subscribe(result => {
      this.photos = result.response;

      console.log(this.url)
    }, error => { })
  }

  async  ModalImage(image) {

    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: ZoomImagePage,
        componentProps: {
          'image': image,
        }

      });

    modal.onDidDismiss().then((detail) => {


    });

    await modal.present();
  }

}
