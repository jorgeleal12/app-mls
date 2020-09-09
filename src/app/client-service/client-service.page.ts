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
  selector: 'app-client-service',
  templateUrl: './client-service.page.html',
  styleUrls: ['./client-service.page.scss'],
})
export class ClientServicePage implements OnInit {

  Clients: any[] = [];
  page = 1;
  maximumPage;
  isSearchbarOpened = false;
  textSearch = '';
  loaderToShow
  constructor(
    private LoginServiceService: LoginServiceService,
    private router: Router,
    public modalController: ModalController,
    public loadingController: LoadingController, private networkService: NetworkService, private tasksService: TasksService, ) { }

  ngOnInit() {

  }
  ionViewWillEnter() {
    this.ListClient();
  }

  ListClient(event?) {
    this.showLoader();

    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
      this.tasksService.SelectClient().then(tasks => {
        this.Clients = tasks;
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
  ModalExit(Client) {
    console.log(Client)
    this.modalController.dismiss({
      'dismissed': false,
      data: Client
    });
  }

  back() {
    this.modalController.dismiss({
      'dismissed': false,
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
