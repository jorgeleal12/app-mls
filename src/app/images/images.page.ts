import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginServiceService } from '../Services/login-service.service';
import { ActivatedRoute, Router, NavigationExtras, } from '@angular/router';
import { NavParams } from '@ionic/angular';
@Component({
  selector: 'app-images',
  templateUrl: './images.page.html',
  styleUrls: ['./images.page.scss'],
})
export class ImagesPage implements OnInit {
  type_network
  number_service
  photos_services
  data
  constructor(private route: ActivatedRoute,
    private router: Router,
    private LoginServiceService: LoginServiceService, public modalController: ModalController, private navParams: NavParams) {

    this.number_service = navParams.get('number_service');
    this.type_network = navParams.get('type_network');
    this.data = navParams.get('data');

  }

  ngOnInit() {
    this.photo_service();
  }


  photo_service() {
    let params = {
      type_network: this.type_network
    }
    this.LoginServiceService.photos_service(params).subscribe(result => {
      this.photos_services = result.response
    }, error => {

    })
  }

  photos_add(photos_service) {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        photos_service: photos_service,
        data: this.data
      }
    };

    this.router.navigate(['menu/menu/fotografias'], navigationExtras);
    this.modalController.dismiss({
      'dismissed': false,
    });
  }

  back() {
    this.modalController.dismiss({
      'dismissed': false,
    });
  }


  async ModalImage() {

    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: ImagesPage,
        componentProps: {
          'number_service': this.number_service,
          'type_network': this.type_network,
          'data': this.data
        }

      });

    modal.onDidDismiss().then((detail) => {

      // if (detail !== null) {
      //     this.idbuilder = detail.data.data.idbuilder
      //     this.name_builder = detail.data.data.name_builder
      //     this.state_builder = detail.data.data.name_state
      // }
    });

    await modal.present();


  }
}