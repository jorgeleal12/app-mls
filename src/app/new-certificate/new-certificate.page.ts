import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../Services/login-service.service';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
@Component({
  selector: 'app-new-certificate',
  templateUrl: './new-certificate.page.html',
  styleUrls: ['./new-certificate.page.scss'],
})
export class NewCertificatePage implements OnInit {

  constructor(private loginServiceService: LoginServiceService,
    public modalController: ModalController, private navParams: NavParams) { }

  ngOnInit() {
  }
  back() {
    this.modalController.dismiss({
      'dismissed': false,
    });
  }
}
