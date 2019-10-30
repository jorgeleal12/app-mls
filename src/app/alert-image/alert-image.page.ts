import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginServiceService } from '../Services/login-service.service';
import { ActivatedRoute, Router, NavigationExtras, } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { SendimagesPage } from '../sendimages/sendimages.page';
import { TasksService } from '../Services/tasks-service';

@Component({
  selector: 'app-alert-image',
  templateUrl: './alert-image.page.html',
  styleUrls: ['./alert-image.page.scss'],
})
export class AlertImagePage implements OnInit {

  type_network
  number_service
  photos_services
  data
  PhotoServices;
  images
  idservice
  constructor(private route: ActivatedRoute,
    private router: Router,
    private LoginServiceService: LoginServiceService, public modalController: ModalController, private navParams: NavParams, private tasksService: TasksService, ) {

    this.number_service = navParams.get('number_service');
    this.type_network = navParams.get('type_network');
    this.data = navParams.get('data');
    this.photos_services = navParams.get('images');
    this.idservice = navParams.get('idservice');
    // console.log(this.images)
    // console.log(this.data)
  }

  ngOnInit() {
  }


  photos_add(photos_service) {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        photos_service: photos_service,
        data: this.data
      }
    };

    this.router.navigate(['menu/menu/fotografias'], navigationExtras);

    this.modalController.dismiss({
      'dismissed': false,
    });

  }

  search() {

    let actual = 0;
    let totales = 0;
    this.tasksService.SelectImage(this.data.idodi, this.idservice)
      .then(tasks => {

        let images = [];
        for (const prop in tasks) {

          actual += tasks[prop].actual;
          totales += tasks[prop].min;
          if (tasks[prop].actual < tasks[prop].min) {
            images.push(tasks[prop]);
          }

        }

        this.photos_services = images;
      })
      .catch(error => {
        console.error(error);
      });
  }

  back() {
    this.modalController.dismiss({
      'dismissed': false,
    });
  }


  async ModalImage(photos_service) {

    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: SendimagesPage,
        componentProps: {
          'number_service': this.number_service,
          'type_network': this.type_network,
          'data': this.data,
          'photos_service': photos_service,
          'idservice': this.idservice
        }

      });

    modal.onDidDismiss().then((detail) => {

      this.search();
    });

    await modal.present();


  }
}
