import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from "../Services/login-service.service";
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  loaderToShow
  asignada = 0;
  rechazadas = 0;
  etendidas = 0;
  constructor(private LoginServiceService: LoginServiceService, private router: Router, public loadingController: LoadingController) {


  }

  ngOnInit() {


  }
  ionViewWillEnter() {
    this.asignada = 0;
    this.rechazadas = 0;
    this.etendidas = 0;
    this.total_asignadas();
  }
  total_asignadas() {
    this.showLoader()
    this.LoginServiceService.totalasignadas({ user: localStorage.getItem("id"), type: localStorage.getItem("type"), }).pipe(
      finalize(() => {
        this.loadingController.dismiss();
      })).subscribe(result => {
        if (result.search_rech != null) {
          this.rechazadas = result.search_rech.total

        }

        if (result.data != null) {
          this.asignada = result.data.total - this.rechazadas

        }
        if (result.search_etn != null) {
          this.etendidas = result.search_etn.total

        }

      }, error => {

      })
  }

  asignadas(number) {

    this.router.navigate(['menu/menu/asignadas'], number);
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
