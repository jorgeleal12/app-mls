import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../Services/login-service.service';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { ImagesPage } from '../images/images.page';
import { NewCertificate } from '../model/NewCertificate.model';
import { TasksService } from '../Services/tasks-service';
import { AlertController } from '@ionic/angular';
import { AlertImagePage } from '../alert-image/alert-image.page';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-new-certificate',
  templateUrl: './new-certificate.page.html',
  styleUrls: ['./new-certificate.page.scss'],
})
export class NewCertificatePage implements OnInit {

  step = { sectionName: null };
  number_service
  type_network
  data
  idusers

  number
  idemployees
  idNumber_cetificate
  iamges = [];
  messages
  NewCertificate = new NewCertificate();

  constructor(
    private loginServiceService: LoginServiceService,
    public modalController: ModalController,
    private navParams: NavParams,
    private tasksService: TasksService,
    public alertController: AlertController,
    public toastController: ToastController
  ) {
    this.number_service = navParams.get('number_service');
    this.type_network = navParams.get('type_network');
    this.data = navParams.get('data');
    this.idusers = localStorage.getItem("id")

    this.NewCertificate = navParams.get('certificate');

    if (this.NewCertificate == undefined) {
      this.NewCertificate = new NewCertificate();
      this.NewCertificate.odi_idodi = this.data.idodi;
      this.NewCertificate.id_user = this.idusers
      this.NumberCertificate();
    }
  }

  ngOnInit() {


  }



  back() {
    this.modalController.dismiss({
      'dismissed': true,
    });
  }

  NumberCertificate() {

    const params = {
      idusers: this.idusers
    }
    this.loginServiceService.number(params).subscribe(result => {
      this.NewCertificate.number = result.response.number_ + 1;
      this.NewCertificate.id_user = result.response.idemployees;
      this.NewCertificate.Number_cetificate_idNumber_cetificate = result.response.Number_cetificate_idNumber_cetificate;


    }, error => { })
  }

  getNameValid(sectionName) {
    return this.step.sectionName === sectionName;
  }

  setStep(sectionName) {
    this.step.sectionName = sectionName !== this.step.sectionName ? sectionName : null;
  }

  getIconName(sectionName) {
    return this.getNameValid(sectionName) ? 'arrow-down' : 'arrow-forward';
  }

  async ModalImage() {

    console.log(this.NewCertificate.idservice_certifications)
    if (this.NewCertificate.idservice_certifications == undefined) {
      this.presentToast('Primero guarde el Certificado')
      return;
    }

    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: ImagesPage,
        componentProps: {
          'number_service': this.number_service,
          'type_network': this.type_network,
          'data': this.data,
          'idservice': this.NewCertificate.idservice_certifications,
        }

      });

    modal.onDidDismiss().then((detail) => {
    });

    await modal.present();


  }

  save() {
    console.log(this.NewCertificate)
    if (this.NewCertificate.idservice_certifications == undefined) {

      this.loginServiceService.save_certificate(this.NewCertificate).subscribe(result => {

        // this.tasksService.delete(this.data.idodi,)
        if (result.response == true) {
          this.NewCertificate.idservice_certifications = result.result
          this.presentToast('Se guardo el Certificado')
        }

      }, error => {

      })

      return;

    } else {

      if (this.NewCertificate.state == 1 || this.NewCertificate.state == 3) {

        this.tasksService.SelectImage(this.data.idodi, this.NewCertificate.idservice_certifications)
          .then(tasks => {
            let actual = 0;
            let totales = 0;
            let images = [];
            for (const prop in tasks) {

              actual += tasks[prop].actual;
              totales += tasks[prop].min;

              if (tasks[prop].actual < tasks[prop].min) {
                images.push(tasks[prop]);
              }
            }
            this.messages = images;
            if (actual < totales) {
              this.ModalAlertImage(images)
              return;
            }
            if (actual == 0 && this.NewCertificate.state == 1 || actual == 0 && this.NewCertificate.state == 3) {
              this.ModalImage();
              console.log('1')
              return;
            }

            this.loginServiceService.save_certificate(this.NewCertificate).subscribe(result => {

              this.tasksService.delete(this.data.idodi, this.NewCertificate.idservice_certifications)
                .then(tasks => {
                })
                .catch(error => {
                  console.error(error);
                });

              if (result.response == false) {

                this.presentToast('Se guardo el Certificado')
              }

            }, error => {

            })

          })
          .catch(error => {
            console.error(error);
          });

      } else {

        this.loginServiceService.save_certificate(this.NewCertificate).subscribe(result => {

          this.tasksService.delete(this.data.idodi, this.NewCertificate.idservice_certifications)
            .then(tasks => {
            })
            .catch(error => {
              console.error(error);
            });

          if (result.response == false) {

            this.presentToast('Se guardo el Certificado1')
          }

        }, error => {

        })
      }


    }
  }

  delete() {

  }

  async ModalAlertImage(images) {



    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: AlertImagePage,
        componentProps: {
          'number_service': this.number_service,
          'type_network': this.type_network,
          'data': this.data,
          'images': images,
          'idservice': this.NewCertificate.idservice_certifications,
        }

      });

    modal.onDidDismiss().then((detail) => {
    });

    await modal.present();


  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}
