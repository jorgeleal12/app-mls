import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from "../Services/login-service.service";
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
import { TasksService } from '../Services/tasks-service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
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
  constant = new constant();
  constructor(
    private LoginServiceService: LoginServiceService,
    private router: Router,
    public loadingController: LoadingController,
    private tasksService: TasksService,
    public transfer: FileTransfer,
    public file: File,

  ) { }


  cars
  ngOnInit() {

  }
  ionViewWillEnter() {
    this.sqli();
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

  sqli() {
    this.tasksService.SelectICertificate()
      .then(tasks => {
        console.log(tasks)
        this.image = tasks;
        this.propCount = Object.keys(tasks).length;
      })
      .catch(error => {
        console.error(error);
      });
  }

  sendimage() {

    for (let data of this.image) {
      console.log(data)

      this.onLoadimage(data.name_photo, data.odi_idodi, data.idphotos, data.certifications);


    }

  }

  onLoadimage(name_photo, odi_idodi, idphotos, certifications) {

    let params = {
      idodi: odi_idodi,
      tipe: idphotos,
      idservice: certifications,
    }
    let filePath = this.file.externalRootDirectory + "MLS/";

    const fileTransfer: FileTransferObject = this.transfer.create();
    let imagen = filePath + name_photo
    console.log(imagen)

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
            console.log(json.response)
          }
        },
        err => {
          console.log(err.body)


        }
      );
  };

}
