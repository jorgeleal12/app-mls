import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from "../Services/login-service.service";
import { NewClientPage } from '../new-client/new-client.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {

  constructor(
    private LoginServiceService: LoginServiceService,
    private router: Router,
    public modalController: ModalController, ) { }

  ngOnInit() {
  }


  back() {
    this.router.navigateByUrl('menu/menu/home');
  }

  async  ModalNewCliente() {
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: NewClientPage,
        componentProps: {
          // 'data': this.data,
          // 'idservice': this.NewCertificate.idservice_certifications,
        }
      });

    modal.onDidDismiss().then((detail) => {

    });

    await modal.present();
  }

}
