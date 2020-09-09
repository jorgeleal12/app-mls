import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../Services/login-service.service';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { NewAcountPage } from '../new-acount/new-acount.page';
import { NetworkService, ConnectionStatus } from '../Services/network.service';
import { TasksService } from '../Services/tasks-service';
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
  offline

  constructor(private loginServiceService: LoginServiceService,
    public toastController: ToastController,
    public modalController: ModalController,
    private navParams: NavParams, private networkService: NetworkService, private tasksService: TasksService) {
    this.idclient = navParams.get('idclient');
    this.offline = navParams.get('offline');

  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.ListAcount();

  }
  back() {
    this.modalController.dismiss({
      'dismissed': false,
    });
  }

  ListAcount() {
    console.log('prueba')
    console.log(this.offline)
    const params = {
      idclient: this.idclient
    }
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {

      this.tasksService.SelectClient_account(this.idclient).then(tasks => {
        this.acounts = tasks;

      })
        .catch(error => {
          console.error(error);
        });
    } else {


      this.loginServiceService.ListAcount(params).subscribe(result => {
        this.acounts = result.response;
      }, error => {

      })
    }
  }

  onSearch(event) {

    this.textSearch = event.target.value;
  }

  async  ModalAcount(acount) {
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: NewAcountPage,
        componentProps: {
          'data': acount,
          'idclient': this.idclient,
          'offline': this.offline
          // 'idservice': this.NewCertificate.idservice_certifications,
        }
      });

    modal.onDidDismiss().then((detail) => {
      this.ListAcount();
    });

    await modal.present();
  }

  async  ModalNewAcount() {
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: NewAcountPage,
        componentProps: {
          'idclient': this.idclient,
          'offline': this.offline
        }
      });

    modal.onDidDismiss().then((detail) => {
      this.ListAcount();
    });

    await modal.present();
  }
}
