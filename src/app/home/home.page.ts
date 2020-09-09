import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from "../Services/login-service.service";
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
import { TasksService } from '../Services/tasks-service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { NetworkService, ConnectionStatus } from '../Services/network.service';
import { constant } from '../utilitis/constant';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  asignada = 0;
  rechazadas = 0;
  etendidas = 0;
  aprobadas = 0;
  image
  propCount
  loaderToShow: any;
  data
  Builder
  Material: any[];
  Client: any[];
  account: any[];
  certificate: any[];
  constant = new constant();
  Countimage: any

  constructor(private LoginServiceService: LoginServiceService, private router: Router, public loadingController: LoadingController
    , private tasksService: TasksService, public transfer: FileTransfer,
    public file: File, private networkService: NetworkService) {


  }

  ngOnInit() {


  }
  ionViewWillEnter() {
    this.asignada = 0;
    this.rechazadas = 0;
    this.etendidas = 0;
    this.total_asignadas();
    this.select()
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
          this.asignada = result.data.total

        }
        if (result.search_etn != null) {
          this.etendidas = result.search_etn.total

        }
        if (result.aprobadas != null) {
          this.aprobadas = result.aprobadas.total

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

  select() {

    this.tasksService.SelectOdiAll(2)
      .then(tasks => {
        // console.log(tasks)
        this.data = tasks;
        this.propCount = Object.keys(tasks).length;
      })
      .catch(error => {
        console.error(error);
      });

    this.tasksService.SelectBuilderAll(2)
      .then(tasks => {
        // console.log(tasks)
        this.Builder = tasks;
      })
      .catch(error => {
        console.error(error);
      });

    this.tasksService.SelectMaterialAll(2)
      .then(tasks => {
        // console.log(tasks)
        this.Material = tasks;
      })
      .catch(error => {
        console.error(error);
      });

    this.tasksService.SelectClientAll(2)
      .then(tasks => {
        // console.log(tasks)
        this.Client = tasks;
      })
      .catch(error => {
        console.error(error);
      });


    this.tasksService.SelectClient_accountAll(2)
      .then(tasks => {
        // console.log(tasks)
        this.account = tasks;
      })
      .catch(error => {
        console.error(error);
      });

    this.tasksService.SelectCertifiteAll(2)
      .then(tasks => {
        // console.log(tasks)
        this.certificate = tasks;
      })
      .catch(error => {
        console.error(error);
      });
  }

  sendimage() {

    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {

    } else {
      this.showLoader();
      this.builder();
    }

  }

  builder() {
    this.LoginServiceService.builderOffline({ data: this.Builder }).pipe(
      finalize(() => {
        this.tasksService.DeleteBuilde(2);
        this.Builder = [];
        this.client();
      })).subscribe(result => {


      }, error => {

      })

  }

  client() {

    this.LoginServiceService.ClientOffline({ data: this.Client }).pipe(
      finalize(() => {
        this.tasksService.DeleteCliente(2);
        this.Client = [];
        this.LoginServiceService.AcountOffline({ data: this.account }).pipe(
          finalize(() => {
            this.tasksService.DeleteCliente_account(2);
            this.account = []
            this.material();
          })).subscribe(result => {

          }, error => {
            console.log(error.error)
          })



      })).subscribe(result => {


      }, error => {

      })
  }

  material() {
    this.LoginServiceService.MaterialOffline({ data: this.Material }).pipe(
      finalize(() => {
        this.tasksService.DeleteMaterial(2);
        this.Material = [];
        this.odi();
      })).subscribe(result => {


      }, error => {

      })
  }

  odi() {
    let user = localStorage.getItem("idemployees");
    let type = localStorage.getItem("type");
    let params = {
      user: user,
      type: type,
      data: this.data
    }
    this.LoginServiceService.OdiOffline(params).pipe(
      finalize(() => {
        this.Certificate();
        this.tasksService.deleteodi(2);
        this.data = [];
        this.tasksService.SelectOdiAll(2)
          .then(tasks => {
            // console.log(tasks)
            this.data = tasks;
            this.propCount = Object.keys(tasks).length;
          })
          .catch(error => {
            console.error(error.error);
          });

      })).subscribe(result => {


      }, error => {
        console.log(error.error)
      })
  }

  Certificate() {
    let user = localStorage.getItem("idemployees");
    let type = localStorage.getItem("type");
    let params = {
      user: user,
      type: type,
      data: this.certificate
    }
    this.LoginServiceService.CertificateOffline(params).pipe(
      finalize(() => {
        this.tasksService.DeleteCertifite();
        this.certificate = [];
        this.tasksService.SelectImageOdi()
          .then(tasks => {

            let idcontract = JSON.parse(localStorage.getItem('idcontract'))
            // console.log(tasks)
            this.image = tasks;
            this.Countimage = Object.keys(tasks).length;
            let number = 0;
            this.showLoader2();
            for (let data of this.image) {
              //console.log(2)
              if (data.name_image != '') {
                number++;
                this.onLoadimage(data.name_image, data.url, data.idodi, data.idphotos, data.service_certifications_idservice_certifications, data.id, idcontract, data.sert_offline);
              }
              // if (number == this.Countimage) {
              //   this.loadingController.dismiss();
              // }
            }

          })
          .catch(error => {
            console.error(error.error);
          });

      })).subscribe(result => {


      }, error => {
        console.log(error)
      })
  }

  showLoader2() {
    this.loaderToShow = this.loadingController.create({
      message: 'Enviando',
      duration: 5000
    }).then((res) => {
      res.present();
    });
  }


  onLoadimage(name_image, url, idodi, idphotos, service_certifications_idservice_certifications, id, idcontract, sert_offline) {

    let user = localStorage.getItem("idemployees");
    let type = localStorage.getItem("type");

    let params = {
      idodi: idodi,
      tipe: idphotos,
      contract_idcontract: idcontract,
      idservice: service_certifications_idservice_certifications,
      sert_offline: sert_offline,
      user: user,
      type: type
    }

    const fileTransfer: FileTransferObject = this.transfer.create();
    let imagen = `${url}${name_image}`

    let filePath = this.file.externalRootDirectory + "MLS/";

    let options: FileUploadOptions = {
      fileKey: "file",
      fileName: name_image,
      headers: {},
      params: { params: params }
    };

    fileTransfer
      .upload(
        imagen,
        this.constant.routeGlobal + "odi/send_image_movilOffline",
        options
      )
      .then(
        data => {
          var json = JSON.parse(data.response);

          if (json.response == true) {

            this.tasksService.DeleteImageOdi(id)
              .then(tasks => {
                this.file.removeFile(url, name_image);
              })
              .catch(error => {
                console.error(error);
              });

            // this.select();
          } else {


          }
        },
        err => {
          console.log(err)


        }
      );
  };
}
