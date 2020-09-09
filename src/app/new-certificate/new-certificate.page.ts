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
import { ViewImagePage } from '../view-image/view-image.page';
import { NetworkService, ConnectionStatus } from '../Services/network.service';
import { finalize } from 'rxjs/operators';


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
  type
  type2
  type3
  marc = false;
  NewCertificate = new NewCertificate();
  odioffline
  sert_offline = null;
  contract_idcontract;
  supervisor = [];;
  idsupervisor_load;
  constructor(
    private loginServiceService: LoginServiceService,
    public modalController: ModalController,
    private navParams: NavParams,
    private tasksService: TasksService,
    public alertController: AlertController,
    public toastController: ToastController,
    private networkService: NetworkService
  ) {
    this.load_supervisor();
    this.number_service = navParams.get('number_service');
    this.type_network = navParams.get('type_network');
    this.data = navParams.get('data');
    this.idusers = localStorage.getItem("id");
    this.odioffline = navParams.get('odioffline');
    this.NewCertificate = navParams.get('certificate');
    // this.idsupervisor_load = this.NewCertificate.idsupervisor;


    if (this.NewCertificate == undefined) {
      this.NewCertificate = new NewCertificate();
      this.NewCertificate.odi_idodi = this.data.idodi;
      this.NewCertificate.id_user = this.idusers

      this.NumberCertificate();
    } else {
      this.NewCertificate = navParams.get('certificate');
      this.idsupervisor_load = this.NewCertificate.idsupervisor;

    }
    if (this.NewCertificate.id) {
      this.NewCertificate.idservice_certifications = this.NewCertificate.id
      this.sert_offline = 1;
    } else {

      this.sert_offline = null;

    }
  }

  ngOnInit() {
    // this.sqli();
    console.log('typo de red', this.type_network)

  }

  LocalStore() {
    this.contract_idcontract = JSON.parse(localStorage.getItem('idcontract'));
    this.NewCertificate.contract_idcontract = this.contract_idcontract
  }

  ionViewWillEnter() {

    this.type = localStorage.getItem("type")
    if (this.type == 2) {
      this.type2 = false;
      this.type3 = true;
    }
    if (this.type == 3) {
      this.type3 = false;
      this.type2 = true;
    }

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
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {

      this.tasksService.SelectNumber().then(tasks => {
        // console.log(tasks)
        if (tasks[0].number_ <= tasks[0].number_end) {
          this.NewCertificate.number = tasks[0].number_;
          this.NewCertificate.id_user = tasks[0].idemployees;
          this.NewCertificate.Number_cetificate_idNumber_cetificate = tasks[0].Number_cetificate_idNumber_cetificate;
        }

      })
        .catch(error => {
          console.error(error);
        });


    } else {

      this.loginServiceService.number(params).subscribe(result => {
        this.NewCertificate.number = result.response.number_;
        this.NewCertificate.id_user = result.response.idemployees;
        this.NewCertificate.Number_cetificate_idNumber_cetificate = result.response.Number_cetificate_idNumber_cetificate;

      }, error => { })

    }

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

    console.log(this.type_network)

    if (this.NewCertificate.idservice_certifications == undefined) {
      this.presentToast('Primero guarde el Certificado')
      return;
    } else {

      const modal: HTMLIonModalElement =
        await this.modalController.create({
          component: ImagesPage,
          componentProps: {
            'number_service': this.number_service,
            'type_network': this.type_network,
            'data': this.data,
            'marcar': this.marc,
            'idservice': this.NewCertificate.idservice_certifications,
            'sert_offline': this.sert_offline,
          }

        });

      modal.onDidDismiss().then((detail) => {
      });

      await modal.present();

    }




  }

  save() {

    if (this.NewCertificate.state == 3) {
      this.presentToast('El certificado se encuentra Aprobado')
      return;
    }

    if (!this.NewCertificate.number) {
      this.presentToast('Numero de certificado no valido')
      return;
    }

    if (this.NewCertificate.idsupervisor == '') {
      this.presentToast('Seleccione un Supervisor')
      return;
    }

    if (this.NewCertificate.date == '') {
      this.presentToast('Seleccione una Fecha')
      return;
    }

    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {

      if (this.NewCertificate.idservice_certifications) {


      } else {

        this.tasksService.InsertCertificate(this.NewCertificate, 2, 2, this.odioffline).then(tasks => {
          this.NewCertificate.idservice_certifications = tasks.insertId
          let number = Number(this.NewCertificate.number + 1)
          this.presentToast('Se guardo el Certificado')
          this.sert_offline = 1;
          this.tasksService.UpdateNumber(number, this.NewCertificate.number).then(tasks => {

          }).catch(error => {
            console.error(error)
          })
        }).catch(error => {
          console.error(error)
        })
      }

      console.log(this.NewCertificate)
    } else {

      this.loginServiceService.save_certificate(this.NewCertificate).subscribe(result => {
        if (result.response == true) {
          this.NewCertificate.idservice_certifications = result.result

          this.presentToast('Se guardo el Certificado')
        } if (result.response == false) {
          this.presentToast('Se Actualizo el Certificado')
        }
      }, error => {

      })

    }
  }

  async ModalViewImage() {
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: ViewImagePage,
        componentProps: {
          'data': this.data,
          'idservice': this.NewCertificate.idservice_certifications,
        }
      });

    modal.onDidDismiss().then((detail) => {

    });

    await modal.present();
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

  async cancelar() {

    const alert = await this.alertController.create({
      header: 'Confirmación!',
      message: 'Desea Cancelar El Certificado',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {

          }
        }, {
          text: 'Si',
          handler: () => {
            let number = 6
            this.change(number);
          }
        }
      ]
    });

    await alert.present();
  }

  async suspend() {

    const alert = await this.alertController.create({
      header: 'Confirmación!',
      message: 'Desea Suspender El Certificado',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {

          }
        }, {
          text: 'Si',
          handler: () => {
            let number = 7
            this.change(number);
          }
        }
      ]
    });

    await alert.present();
  }


  async aprobado() {

    const alert = await this.alertController.create({
      header: 'Confirmación!',
      message: 'Desea Aprobar El Certificado',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {

          }
        }, {
          text: 'Si',
          handler: () => {
            let number = 3
            this.change(number);
          }
        }
      ]
    });

    await alert.present();
  }


  async decline() {

    const alert = await this.alertController.create({
      header: 'Confirmación!',
      message: 'Desea Rechazar El Certificado',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {

          }
        }, {
          text: 'Si',
          handler: () => {
            let number = 5
            this.change(number);
          }
        }
      ]
    });

    await alert.present();
  }

  async atendido() {

    const alert = await this.alertController.create({
      header: 'Confirmación!',
      message: 'Desea Atender El Certificado',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {

          }
        }, {
          text: 'Si',
          handler: () => {
            let number = 2
            this.tasksService.SelectImage(this.data.idodi, this.NewCertificate.idservice_certifications)
              .then(tasks => {
                // console.log(tasks)
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

                // console.log(actual, totales)

                if (actual < totales) {

                  this.ModalAlertImage(images)
                  return;
                }

                if (actual == 0) {
                  this.ModalImage();
                  return;
                }

                this.change_active(number);

                this.tasksService.delete(this.data.idodi, this.NewCertificate.idservice_certifications)
                  .then(tasks1 => {
                  })
                  .catch(error => {
                    console.error(error);
                  });

              })
              .catch(error => {
                console.error(error);
              });



          }
        }
      ]
    });

    await alert.present();
  }

  change_active(number) {

    const params = {
      idstate: number,
      idservice: this.NewCertificate.idservice_certifications,
      number: this.NewCertificate.number,
      Number_cetificate_idNumber_cetificate: this.NewCertificate.Number_cetificate_idNumber_cetificate,
    }

    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {

      this.presentToast('No hay Conexión a Internet')

    } else {


      this.loginServiceService.change_active(params).subscribe(result => {
        if (result.response == true) {
          this.presentToast('Se Cambio el estado del Certificado')
        }
      }, error => {

      })
    }

  }

  change(number) {
    const params = {
      idstate: number,
      idservice: this.NewCertificate.idservice_certifications,
    }
    this.loginServiceService.change_state(params).subscribe(result => {
      if (result.response == true) {
        this.presentToast('Se Cambio el estado del Certificado')
      }
    }, error => {

    })
  }


  async copy_image() {

    const alert = await this.alertController.create({
      header: 'Confirmación!',
      message: 'Copiar Fotografias',
      inputs: [
        {
          name: 'acta',
          type: 'text',
          placeholder: 'Numero de Certificado'
        },
      ],
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {

          }
        }, {
          text: 'Si',
          handler: data => {

            console.log(data)
            this.copy_image_send(data)
          }
        }
      ]
    });

    await alert.present();
  }

  copy_image_send(data) {
    let params = {
      user: this.idusers,
      idservice_certifications: this.NewCertificate.idservice_certifications,
      certificate: data.acta,
      type: this.type
    }

    this.loginServiceService.copy_image(params).subscribe(
      result => {
        if (result.response == true) {
          this.presentToast('Se copiaron las fotografías')
        } else {
          this.presentToast('No se pueden Copiar las fotografías')
        }
      }, error => {

      }
    )
  }

  load_supervisor() {
    let params;
    // this.loginServiceService.inspectores(params).subscribe(
    //   result => {
    //     this.supervisor = result.response;
    //     this.NewCertificate.idsupervisor = this.idsupervisor_load;
    //     console.log(this.NewCertificate.idsupervisor);
    //   }, error => {

    //   })

    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
      this.tasksService.Selectinspetor().then(tasks => {
        // console.log(tasks)
        this.supervisor = tasks;
      })
        .catch(error => {
          console.error(error);
        });

    } else {

      this.loginServiceService.inspectores(params).pipe(
        finalize(() => {
          this.NewCertificate.idsupervisor = this.idsupervisor_load;
          console.log(this.NewCertificate.idsupervisor);
        })).subscribe(result => {
          this.supervisor = result.response;
          console.log(this.supervisor);
        }, error => {

        })

    }
  }

}
