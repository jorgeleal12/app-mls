import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../Services/login-service.service';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { NewCertificatePage } from '../new-certificate/new-certificate.page';
import { NetworkService, ConnectionStatus } from '../Services/network.service';
import { TasksService } from '../Services/tasks-service';


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
  odioffline
  constructor(
    private loginServiceService: LoginServiceService,
    public modalController: ModalController, private navParams: NavParams, private networkService: NetworkService, private tasksService: TasksService) {

    this.number_service = navParams.get('number_service');
    this.type_network = navParams.get('type_network');
    this.odioffline = navParams.get('odioffline');
    this.data = navParams.get('data');

    console.log(this.number_service)
    console.log(this.type_network)
    console.log(this.data)
    console.log(this.odioffline)
  }

  ngOnInit() {

  }
  ionViewWillEnter() {
    this.search();
  }
  search() {

    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
      this.tasksService.SelectCertificate(this.data.idodi).then(tasks => {

        this.certificates = tasks;
      })
        .catch(error => {
          console.error(error);
        });

    } else {

      const params = {
        idodi: this.data.idodi
      }
      this.loginServiceService.search_certificate(params).subscribe(result => {
        this.certificates = result.response
      }, error => { })
    }

  }


  back() {
    this.modalController.dismiss({
      'dismissed': false,
    });
  }

  async ModalNewCertificate() {
    if (this.data.state != 2) {
      return
    }
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: NewCertificatePage,
        componentProps: {
          'number_service': this.number_service,
          'type_network': this.type_network,
          'data': this.data,
          'odioffline': this.odioffline,

        }

      });

    modal.onDidDismiss().then((detail) => {
      this.search();
    });

    await modal.present();
  }

  async ModalCertificate(certificate) {

    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: NewCertificatePage,
        componentProps: {
          'number_service': this.number_service,
          'type_network': this.type_network,
          'data': this.data,
          'certificate': certificate,


        }

      });

    modal.onDidDismiss().then((detail) => {
      this.search();
    });

    await modal.present();


  }
}
