import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../Services/login-service.service';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
import { NetworkService, ConnectionStatus } from '../Services/network.service';
import { TasksService } from '../Services/tasks-service';

@Component({
  selector: 'app-acount-service',
  templateUrl: './acount-service.page.html',
  styleUrls: ['./acount-service.page.scss'],
})
export class AcountServicePage implements OnInit {

  idclient
  acounts: any[] = [];
  isSearchbarOpened = false;
  textSearch = '';
  loaderToShow;
  constructor(private loginServiceService: LoginServiceService,
    public toastController: ToastController,
    public modalController: ModalController,
    private navParams: NavParams,
    public loadingController: LoadingController, private networkService: NetworkService, private tasksService: TasksService) {
    this.idclient = navParams.get('idclient');
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
    this.showLoader();
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
      this.loginServiceService.ListAcount(params).pipe(
        finalize(() => {
          this.loadingController.dismiss();
        })).subscribe(result => {
          this.acounts = result.response;
        }, error => {

        })

    }

  }
  onSearch(event) {

    this.textSearch = event.target.value;
  }

  ModalExit(acount) {
    let acountofline;
    if (!acount.idclient_account) {
      acount.idclient_account = acount.id
      acountofline = 1
    }
    this.modalController.dismiss({
      'dismissed': false,
      data: acount,
      acountofline: acountofline
    });
  }

  showLoader() {
    this.loaderToShow = this.loadingController.create({
      message: 'Cargando',
      duration: 1000
    }).then((res) => {
      res.present();
    });

  }
}
