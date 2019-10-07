import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from "../Services/login-service.service";
import { NewBuilderPage } from '../new-builder/new-builder.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-list-builder',
  templateUrl: './list-builder.page.html',
  styleUrls: ['./list-builder.page.scss'],
})
export class ListBuilderPage implements OnInit {
  builders: any[] = [];
  page = 1;
  maximumPage;
  isSearchbarOpened = false;
  textSearch = '';

  constructor(private LoginServiceService: LoginServiceService,
    private router: Router,
    public modalController: ModalController, ) { }

  ngOnInit() {
    this.ListBuilder();
  }

  ListBuilder(event?) {
    const params = { idcompany: 1 }
    this.LoginServiceService.ListBuilder(this.page).subscribe(result => {
      this.builders = this.builders.concat(result.response.data)
      this.maximumPage = result.response.last_page;


      if (event) {
        event.target.complete();
      }
    }, error => {

    })
  }
  back() {
    this.router.navigateByUrl('menu/menu/home');
  }

  async  ModalNewCliente(Material) {
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: NewBuilderPage,
        componentProps: {
          'data': Material,
          // 'idservice': this.NewCertificate.idservice_certifications,
        }
      });

    modal.onDidDismiss().then((detail) => {
      this.builders = [];
      this.ListBuilder();
    });

    await modal.present();
  }

  async  ModalNewClient() {
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: NewBuilderPage,
        componentProps: {
          'data': null,
          // 'idservice': this.NewCertificate.idservice_certifications,
        }
      });

    modal.onDidDismiss().then((detail) => {
      this.builders = [];
      this.ListBuilder();
    });

    await modal.present();
  }


  loadMore(event) {
    this.page++;
    this.ListBuilder(event)
    if (this.page === this.maximumPage) {
      event.target.disabled = true;
    }
  }
  onSearch(event) {
    if (event.target.value == '') {
      this.page = 1
      this.ListBuilder(event);
    } else {
      this.textSearch = event.target.value;
      this.LoginServiceService.AutoListBuilder(this.textSearch).subscribe(result => {
        this.builders = result.response
      }, error => {

      })
    }

  }

}
