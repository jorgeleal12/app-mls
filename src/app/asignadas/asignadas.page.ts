import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from "../Services/login-service.service";
import { Router, ActivatedRoute } from '@angular/router';

import { TasksService } from '../Services/tasks-service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { finalize } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
import { constant } from '../utilitis/constant';




@Component({
  selector: 'app-asignadas',
  templateUrl: './asignadas.page.html',
  styleUrls: ['./asignadas.page.scss'],
})
export class AsignadasPage implements OnInit {
  loaderToShow: any;
  total
  propCount
  image
  data;
  constant = new constant();
  btnadd;

  page = 1;
  maximumPage;
  isSearchbarOpened = false;
  textSearch = '';

  constructor(
    private LoginServiceService: LoginServiceService,
    private route: ActivatedRoute,
    private router: Router,
    public loadingController: LoadingController,
    private tasksService: TasksService,
    public transfer: FileTransfer,
    public file: File,


  ) {

    this.route.queryParams.subscribe(params => {
      this.data = this.router.getCurrentNavigation().extras;

      if (this.data == 1) {
        this.btnadd = false;
      } else {
        this.btnadd = true;
      }
    });

  }


  cars
  ngOnInit() {

  }
  ionViewWillEnter() {
    this.search_asignadas()

  }
  search_asignadas() {
    this.showLoader('Cargando...')
    let params = {
      user: localStorage.getItem("id"),
      type: localStorage.getItem("type"),
      id: this.data
    }
    this.LoginServiceService.seach_asignadas(params).pipe(
      finalize(() => {
        this.hideLoader();

      })).subscribe(result => {
        this.cars = result.data

        result.data.forEach(element => {
          console.log(element)
          this.tasksService.Insert_Odi(element.idodi, element.address1, element.barrio, element.city, element.client, element.company_idcompany, element.contract_idcontract,
            element.contract_name, element.date_programming, element.department_iddepartment, element.identifacation, element.identification_employee, element.idinspetor,
            element.idsupervisor, element.last_name, element.name, element.name_client, element.phone, element.phone2, element.priority, element.service_type_idservice_type,
            element.state, element.type_gas, element.type_network_idtype_network, element.type_service_idtype_service, element.zona);

        });
      }, error => {

      })

  }

  servicio(car) {
    car['id'] = this.data

    this.router.navigate(['menu/menu/servicio'], car);
  }

  servicio1() {
    let car = {}
    car['id'] = this.data
    this.router.navigate(['menu/menu/servicio'], car);
  }

  doRefresh(event) {

    setTimeout(() => {

      event.target.complete();
    }, 2000);
  }

  back() {
    this.router.navigateByUrl('menu/menu/home');
  }



  sqli() {
    this.tasksService.SelectICertificate()
      .then(tasks => {
        this.image = tasks;
        this.propCount = Object.keys(tasks).length;
      })
      .catch(error => {
      });
  }

  sendimage() {
    this.showLoader('Enviando...');
    let number = 0;
    for (let data of this.image) {
      number++;
      this.onLoadimage(data.name_photo, data.odi_idodi, data.idphotos, data.certifications, data.id);
    }

    if (number == this.propCount) {

      this.hideLoader();
    }

  }

  onLoadimage(name_photo, odi_idodi, idphotos, certifications, id) {

    let params = {
      idodi: odi_idodi,
      tipe: idphotos,
      idservice: certifications,
    }
    let filePath = this.file.externalRootDirectory + "MLS/";

    const fileTransfer: FileTransferObject = this.transfer.create();
    let imagen = filePath + name_photo
    let options: FileUploadOptions = {
      fileKey: "file",
      fileName: 'name.jpg',
      headers: {},
      params: { params: params }
    };
    fileTransfer
      .upload(
        imagen,
        this.constant.routeGlobal + "odi/send_image_movil",
        options
      )
      .then(
        data => {
          var json = JSON.parse(data.response);
          if (json.response == true) {

            this.tasksService.DeleteImageCertificado(id)
              .then(tasks => {
                this.file.removeFile(filePath, name_photo);
                this.sqli()
              })
              .catch(error => {
                console.error(error);
              });


          }
        },
        err => {
          console.log(err.body)


        }
      );
  };


  onSearch(event) {
    let user = localStorage.getItem("id")
    let type = localStorage.getItem("type")
    if (event.target.value == '') {
      this.page = 1
      this.search_asignadas();
    } else {
      this.textSearch = event.target.value;
      this.LoginServiceService.AutoLisAddress(this.textSearch, this.data, user, type).subscribe(result => {

        this.cars = result.response;
      }, error => {

      })
    }

  }

  showLoader(mensaje) {
    this.loaderToShow = this.loadingController.create({
      message: mensaje
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {

      });
    });

  }
  hideLoader() {
    setTimeout(() => {
      this.loadingController.dismiss();
    });
  }

}
