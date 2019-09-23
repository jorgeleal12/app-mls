import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../Services/login-service.service';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { ImagesPage } from '../images/images.page';
import { NewCertificate } from '../model/NewCertificate.model';

@Component({
  selector: 'app-new-certificate',
  templateUrl: './new-certificate.page.html',
  styleUrls: ['./new-certificate.page.scss'],
})
export class NewCertificatePage implements OnInit {

  step = { sectionName: null };
  number_service
  type_network
  data
  idusers

  number
  idemployees
  idNumber_cetificate
  NewCertificate = new NewCertificate();

  constructor(private loginServiceService: LoginServiceService,
    public modalController: ModalController, private navParams: NavParams) {
    this.number_service = navParams.get('number_service');
    this.type_network = navParams.get('type_network');
    this.data = navParams.get('data');
    this.idusers = localStorage.getItem("id")

    this.NewCertificate.odi_idodi = this.data.idodi;
    this.NewCertificate.idemployees = this.idusers

  }

  ngOnInit() {
    this.NumberCertificate();

  }



  back() {
    this.modalController.dismiss({
      'dismissed': true,
    });
  }

  NumberCertificate() {

    const params = {
      idusers: this.idusers
    }
    this.loginServiceService.number(params).subscribe(result => {
      this.NewCertificate.number = result.response.number_ + 1;
      this.NewCertificate.idemployees = result.response.idemployees;
      this.NewCertificate.Number_cetificate_idNumber_cetificate = result.response.Number_cetificate_idNumber_cetificate;


    }, error => { })
  }

  getNameValid(sectionName) {
    return this.step.sectionName === sectionName;
  }

  setStep(sectionName) {
    this.step.sectionName = sectionName !== this.step.sectionName ? sectionName : null;
  }

  getIconName(sectionName) {
    return this.getNameValid(sectionName) ? 'arrow-down' : 'arrow-forward';
  }

  async ModalImage(photos_service) {

    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: ImagesPage,
        componentProps: {
          'number_service': this.number_service,
          'type_network': this.type_network,
          'data': this.data,
        }

      });

    modal.onDidDismiss().then((detail) => {
    });

    await modal.present();


  }

  save() {

    const params = {

    }

    this.loginServiceService.save_certificate(this.NewCertificate).subscribe(result => { }, error => { })
  }


}
