import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginServiceService } from '../Services/login-service.service';
import { ActivatedRoute, Router, NavigationExtras, } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { SendimagesPage } from '../sendimages/sendimages.page';
import { TasksService } from '../Services/tasks-service';

@Component({
  selector: 'app-images',
  templateUrl: './images.page.html',
  styleUrls: ['./images.page.scss'],
})
export class ImagesPage implements OnInit {
  type_network
  number_service
  photos_services
  data
  PhotoServices;
  propCount
  idservice
  constructor(private route: ActivatedRoute,
    private router: Router,
    private LoginServiceService: LoginServiceService, public modalController: ModalController, private navParams: NavParams, private tasksService: TasksService) {

    this.number_service = navParams.get('number_service');
    this.type_network = navParams.get('type_network');
    this.data = navParams.get('data');
    this.idservice = navParams.get('idservice');
  }

  ngOnInit() {
    this.photo_service();
  }


  photo_service() {

    let params = {
      type_network: this.type_network
    }

    this.tasksService.SelectImage(this.data.idodi, this.idservice)
      .then(tasks => {
        console.log(tasks)
        this.PhotoServices = tasks
        this.propCount = Object.keys(tasks).length;

        if (this.propCount > 0) {
          this.photos_services = this.PhotoServices;
        } else {

          this.LoginServiceService.photos_service(params).subscribe(result => {


            this.photos_services = result.response

            for (const prop in this.photos_services) {

              this.tasksService.InsertImage(this.data.idodi, this.photos_services[prop])
                .then(tasks => {
                  console.log(tasks)
                })
                .catch(error => {
                  console.error(error);
                });

            }

          }, error => {

          })
        }

      })
      .catch(error => {
        console.error(error);
      });






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

      // if (detail !== null) {
      //     this.idbuilder = detail.data.data.idbuilder
      //     this.name_builder = detail.data.data.name_builder
      //     this.state_builder = detail.data.data.name_state
      // }
    });

    await modal.present();


  }
}
