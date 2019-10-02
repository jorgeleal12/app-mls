import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../Services/login-service.service';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { NewAcountPage } from '../new-acount/new-acount.page';
@Component({
  selector: 'app-list-acount',
  templateUrl: './list-acount.page.html',
  styleUrls: ['./list-acount.page.scss'],
})
export class ListAcountPage implements OnInit {


  idclient
  acounts: any[] = [];
  isSearchbarOpened = false;
  textSearch = '';
  constructor(private loginServiceService: LoginServiceService,
    public toastController: ToastController,
    public modalController: ModalController,
    private navParams: NavParams) {
    this.idclient = navParams.get('idclient');
  }

  ngOnInit() {
    this.ListAcount();
  }
  back() {
    this.modalController.dismiss({
      'dismissed': false,
    });
  }

  ListAcount() {
    const params = {
      idclient: this.idclient
    }
    this.loginServiceService.ListAcount(params).subscribe(result => {
      this.acounts = result.response;
    }, error => {

    })
  }

  onSearch(event) {

    this.textSearch = event.target.value;
  }

  async  ModalNewAcount(acount) {
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: NewAcountPage,
        componentProps: {
          'data': acount,
          // 'idservice': this.NewCertificate.idservice_certifications,
        }
      });

    modal.onDidDismiss().then((detail) => {

    });

    await modal.present();
  }
}
