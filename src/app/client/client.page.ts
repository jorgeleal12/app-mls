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


  Clients: any[] = [];
  page = 1;
  maximumPage;
  isSearchbarOpened = false;
  textSearch = '';

  constructor(
    private LoginServiceService: LoginServiceService,
    private router: Router,
    public modalController: ModalController, ) { }

  ngOnInit() {
    this.ListClient();
  }


  back() {
    this.router.navigateByUrl('menu/menu/home');
  }

  async  ModalNewCliente(Client) {
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

  ListClient(event?) {
    const params = { idcompany: 1 }
    this.LoginServiceService.ListClient(this.page).subscribe(result => {
      this.Clients = this.Clients.concat(result.response.data)
      this.maximumPage = result.response.last_page;


      if (event) {
        event.target.complete();
      }
    }, error => {

    })
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
}
