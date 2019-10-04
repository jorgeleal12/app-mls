import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../Services/login-service.service';
import { ModalController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-materials',
  templateUrl: './materials.page.html',
  styleUrls: ['./materials.page.scss'],
})
export class MaterialsPage implements OnInit {
  loaderToShow
  materials: any[] = [];
  isSearchbarOpened = false;
  textSearch = '';
  constructor(private LoginServiceService: LoginServiceService, public modalController: ModalController,
    public loadingController: LoadingController) { }

  ngOnInit() {

  }

  ionViewWillEnter() {

    this.search();

  }
  search() {
    this.showLoader()
    this.LoginServiceService.search_materials().pipe(
      finalize(() => {
        this.loadingController.dismiss();
      })).subscribe(result => {
        this.materials = result.response;
      }, error => {

      })
  }

  select(material) {
    // console.log(material)

    this.modalController.dismiss({
      'dismissed': true,
      data: material
    });
  }

  back() {
    this.modalController.dismiss({
      'dismissed': false,
    });
  }

  onSearch(event) {

    this.textSearch = event.target.value;
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
