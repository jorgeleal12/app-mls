import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from "../Services/login-service.service";
import { NewClientPage } from '../new-client/new-client.page';
import { ModalController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
import { NetworkService, ConnectionStatus } from '../Services/network.service';
import { TasksService } from '../Services/tasks-service';
@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {

  loaderToShow
  Clients: any[] = [];
  page = 1;
  maximumPage;
  isSearchbarOpened = false;
  textSearch = '';

  constructor(
    private LoginServiceService: LoginServiceService,
    private router: Router,
    public modalController: ModalController,
    public loadingController: LoadingController, private networkService: NetworkService, private tasksService: TasksService) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.ListClient();
  }
  back() {
    this.router.navigateByUrl('menu/menu/home');
  }

  async ModalNewCliente(Client) {
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: NewClientPage,
        componentProps: {
          'data': Client,
          // 'idservice': this.NewCertificate.idservice_certifications,
        }
      });

    modal.onDidDismiss().then((detail) => {

    });

    await modal.present();
  }

  async ModalNewClient() {
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: NewClientPage,
        componentProps: {
          'data': null,
          // 'idservice': this.NewCertificate.idservice_certifications,
        }
      });

    modal.onDidDismiss().then((detail) => {
      this.ListClient();
    });

    await modal.present();
  }

  ListClient(event?) {
    this.showLoader();


    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
      this.tasksService.SelectClient().then(tasks => {
        this.Clients = tasks;
        // console.log(tasks);
      })
        .catch(error => {
          console.error(error);
        });
    } else {
      const params = { idcompany: 1 }
      this.LoginServiceService.ListClient(this.page).pipe(
        finalize(() => {
          this.loadingController.dismiss();
        })).subscribe(result => {
          this.Clients = this.Clients.concat(result.response.data)
          this.maximumPage = result.response.last_page;


          if (event) {
            event.target.complete();
          }
        }, error => {

        })
    }
  }

  loadMore(event) {
    this.page++;
    this.ListClient(event)
    if (this.page === this.maximumPage) {
      event.target.disabled = true;
    }
  }
  onSearch(event) {


    if (event.target.value == '') {
      this.page = 1
      this.ListClient(event);
    } else {
      this.textSearch = event.target.value;
      this.LoginServiceService.AutoListClient(this.textSearch).subscribe(result => {

        this.Clients = result.response
      }, error => {

      })
    }

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
