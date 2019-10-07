import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from "../Services/login-service.service";
import { NewMaterialPage } from '../new-material/new-material.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-list-material',
  templateUrl: './list-material.page.html',
  styleUrls: ['./list-material.page.scss'],
})
export class ListMaterialPage implements OnInit {


  Materials: any[] = [];
  page = 1;
  maximumPage;
  isSearchbarOpened = false;
  textSearch = '';

  constructor(
    private LoginServiceService: LoginServiceService,
    private router: Router,
    public modalController: ModalController, ) { }


  ngOnInit() {
    this.ListMaterial();
  }

  ListMaterial(event?) {
    const params = { idcompany: 1 }
    this.LoginServiceService.ListMaterial(this.page).subscribe(result => {
      this.Materials = this.Materials.concat(result.response.data)
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
        component: NewMaterialPage,
        componentProps: {
          'data': Material,
          // 'idservice': this.NewCertificate.idservice_certifications,
        }
      });

    modal.onDidDismiss().then((detail) => {
      this.Materials = [];
      this.ListMaterial();
    });

    await modal.present();
  }

  async  ModalNewMterial() {
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: NewMaterialPage,
        componentProps: {
          'data': null,
          // 'idservice': this.NewCertificate.idservice_certifications,
        }
      });

    modal.onDidDismiss().then((detail) => {
      this.Materials = [];
      this.ListMaterial();
    });

    await modal.present();
  }


  loadMore(event) {
    this.page++;
    this.ListMaterial(event)
    if (this.page === this.maximumPage) {
      event.target.disabled = true;
    }
  }
  onSearch(event) {
    if (event.target.value == '') {
      this.page = 1
      this.ListMaterial(event);
    } else {
      this.textSearch = event.target.value;
      this.LoginServiceService.AutoListMaterial(this.textSearch).subscribe(result => {

        this.Materials = result.response
      }, error => {

      })
    }

  }

}
