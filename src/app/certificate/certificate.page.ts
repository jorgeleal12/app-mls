import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../Services/login-service.service';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { NewCertificatePage } from '../new-certificate/new-certificate.page';


@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.page.html',
  styleUrls: ['./certificate.page.scss'],
})
export class CertificatePage implements OnInit {

  number_service
  type_network
  data
  certificates

  constructor(
    private loginServiceService: LoginServiceService,
    public modalController: ModalController, private navParams: NavParams) {

    this.number_service = navParams.get('number_service');
    this.type_network = navParams.get('type_network');
    this.data = navParams.get('data');
    console.log(this.data)
  }

  ngOnInit() {

    this.search();
  }

  search() {

    const params = {
      idodi: this.data.idodi

    }
    this.loginServiceService.search_certificate(params).subscribe(result => {
      this.certificates = result.response
    }, error => { })
  }


  back() {
    this.modalController.dismiss({
      'dismissed': false,
    });
  }

  async ModalCertificate(photos_service) {

    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: NewCertificatePage,
        componentProps: {
          'number_service': this.number_service,
          'type_network': this.type_network,
          'data': this.data,

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
