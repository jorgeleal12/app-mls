import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../Services/login-service.service';
import { ModalController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-builder',
  templateUrl: './builder.page.html',
  styleUrls: ['./builder.page.scss'],
})
export class BuilderPage implements OnInit {

  builders: any[] = [];
  isSearchbarOpened = false;
  textSearch = '';
  loaderToShow
  constructor(private LoginServiceService: LoginServiceService, public modalController: ModalController, public loadingController: LoadingController) { }
  ngOnInit() {

  }
  ionViewWillEnter() {
    this.search();
  }
  search() {
    this.showLoader();
    this.LoginServiceService.search_builder().pipe(
      finalize(() => {
        this.loadingController.dismiss();
      })).subscribe(result => {
        this.builders = result.response;
      }, error => {

      })
  }
  select(builders) {
    this.modalController.dismiss({
      'dismissed': true,
      data: builders
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
