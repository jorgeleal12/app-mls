import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from "../Services/login-service.service";
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-asignadas',
  templateUrl: './asignadas.page.html',
  styleUrls: ['./asignadas.page.scss'],
})
export class AsignadasPage implements OnInit {
  loaderToShow: any;
  constructor(private LoginServiceService: LoginServiceService, private router: Router, public loadingController: LoadingController) { }


  cars
  ngOnInit() {

  }
  ionViewWillEnter() {

    this.search_asignadas()

  }
  search_asignadas() {
    this.showLoader()
    let params = {
      user: localStorage.getItem("id")
      , type: localStorage.getItem("type")
    }
    this.LoginServiceService.seach_asignadas(params).pipe(
      finalize(() => {
        this.loadingController.dismiss();

      })).subscribe(result => {
        this.cars = result.data
      }, error => {

      })

  }

  servicio(car) {

    this.router.navigate(['menu/menu/servicio'], car);
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  back() {
    this.router.navigateByUrl('menu/menu/home');
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
