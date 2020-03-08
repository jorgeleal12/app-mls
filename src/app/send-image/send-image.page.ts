import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { ModalController, NavParams } from '@ionic/angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';

import { LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ToastController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { constant } from '../utilitis/constant';

@Component({
  selector: 'app-send-image',
  templateUrl: './send-image.page.html',
  styleUrls: ['./send-image.page.scss'],
})
export class SendImagePage implements OnInit {

  data: any;
  photos = [];
  public response = true;
  public falso = true;
  loaderToShow: any;
  private win: any = window;
  user
  @ViewChild('layout', { static: true }) canvasRef;
  constant = new constant();


  constructor(private route: ActivatedRoute, private router: Router, private imagePicker: ImagePicker,
    public transfer: FileTransfer,
    public file: File,
    public loadingController: LoadingController,
    public modalController: ModalController,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    public toastController: ToastController,
    private navParams: NavParams,

  ) {
    this.data = navParams.get('data');
    this.photos.push({
      imagenes: '',//'http://192.168.1.126/laravel-mls/public/public/odi/images/MLS/MEDELLIN/79/VsSuRyL4USikUZE.jpg',
      id: 0,
      hidden: false,
      hidden_image: true,
      idodi: this.data.idodi,
      state: true,
      state_send: false,
      send: true,
      error: true
      ,
    });
  }

  ngOnInit() {
    this.user = localStorage.getItem("nombres")

  }

  hoy() {
    let hoy: any = new Date();
    let dd: any = hoy.getDate();
    let mm: any = hoy.getMonth() + 1; //hoy es 0!
    let yyyy = hoy.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }

    hoy = yyyy + "-" + mm + "-" + dd;

    var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    var f = new Date();

    return f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear() + ' ' + f.getHours() + ':' + f.getMinutes();
  }


  async selectImage(photo) {
    const actionSheet = await this.actionSheetController.create({
      header: "Sellecione la Imagen",
      buttons: [{
        text: 'Galería',
        icon: 'image',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY, photo);
        }
      },
      {
        text: 'Camara',
        icon: 'camera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA, photo);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        icon: 'close-circle',
      }
      ]
    });
    await actionSheet.present();
  }


  pickImage(sourceType, photo) {
    const options: CameraOptions = {
      quality: 100,
      targetWidth: 1920,
      targetHeight: 1080,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }
    this.camera.getPicture(options).then((imageData) => {
      let path = this.win.Ionic.WebView.convertFileSrc(imageData);
      photo.imagenes = path;
      photo.hidden = true
      photo.hidden_image = false

    }, (err) => {

    });

    const total = Object.keys(this.photos).length;
    this.photos.push({
      imagenes: '',//'http://192.168.1.126/laravel-mls/public/public/odi/images/MLS/MEDELLIN/79/VsSuRyL4USikUZE.jpg',
      id: total - 1 + 1,
      hidden: false,
      hidden_image: true,
      idodi: this.data.idodi,
      state: true,
      state_send: false,
      send: true,
      error: true
      ,
    });
  }

  choosePicture(photo) {
    let options = {
      title: "selecionar imagen",
      message: "select 1",
      maximumImagesCount: 12,
      outType: 0,
      width: 1080,
      height: 720,
      quality: 100,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    };

    this.imagePicker.getPictures(options).then(
      _imagePath => {
        for (var i = 0; i < _imagePath.length; i++) {
          let path = this.win.Ionic.WebView.convertFileSrc(_imagePath[i]);
          const total = Object.keys(this.photos).length;
          this.photos.push({
            imagenes: path,
            id: total,
            hidden: true,
            hidden_image: true,
            idodi: this.data.idodi,
            state: true,
            state_send: false,
            send: true,
            error: true
            ,
          });
        }

      },
      err => { }
    );

  }

  addImageProcess(img, hoy) {
    return new Promise((resolve, reject) => {
      let canvas = this.canvasRef.nativeElement;
      let context = canvas.getContext("2d");
      let source = new Image()
      source.onload = () => {
        canvas.height = source.height;
        canvas.width = source.width;
        canvas.style.width = "320px";
        canvas.style.height = "300px";
        context.drawImage(source, 0, 0);

        const x = canvas.width / 2;
        const y = canvas.height - 80;


        context.font = "30px impact";
        context.textAlign = "right";
        context.fillStyle = "white";
        context.fillText('MLS Group Colombia', x, y - 25);
        context.font = "30px impact";
        context.textAlign = "right";
        context.fillStyle = "white";
        context.fillText(hoy, x, y);
        context.font = "30px impact";
        context.textAlign = "right";
        context.fillStyle = "white";
        context.fillText(this.user, x, y + 25);
        context.font = "30px impact";
        context.textAlign = "right";
        context.fillStyle = "white";

        let imagen = canvas.toDataURL("image/jpeg");
        resolve(imagen)
      }
      source.onerror = reject
      source.src = img
    })
  }


  async SendImage() {
    this.showLoader()
    for (let data of this.photos) {
      let img = data.imagenes;
      let id = data.id;
      let idodi = data.idodi;
      let contract_idcontract = data.contract_idcontract
      let params = {
        idodi: idodi,
        contract_idcontract: contract_idcontract,
      }

      let hoy = this.hoy()
      if (data.imagenes == '') {

      } else {
        const imagen: any = await this.addImageProcess(img, hoy)
        const SendIm = await this.LoadImage(imagen, params, img, id)
      }

    }
  }

  LoadImage(imagen, params, img, id) {
    const fileTransfer: FileTransferObject = this.transfer.create();

    const divisiones = img.split("cache/");
    let divisiones1 = divisiones[1].split("?");
    let divisiones2 = divisiones[0].split("_app_file_");

    let options: FileUploadOptions = {
      fileKey: "file",
      fileName: divisiones1[0],
      headers: {},
      params: { params: params }
    };

    fileTransfer.upload(imagen,
      this.constant.routeGlobal + "odi/SendImageMovil",
      options)
      .then((data) => {
        this.photos[id].state = true;
        this.photos[id].state_send = true;
        this.photos[id].send = false;
      }, (err) => {
        this.photos[id].state = false;
        this.photos[id].state_send = false;
        this.photos[id].send = false;
      })

    return true;
  }
  back() {
    this.modalController.dismiss({
      'dismissed': false,
    });
  }

  showLoader() {
    this.loaderToShow = this.loadingController.create({
      message: 'Enviando'
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {
        console.log('Loading');
      });
    });
    this.hideLoader();
  }

  hideLoader() {
    setTimeout(() => {
      this.loadingController.dismiss();
    }, 4000);
  }

}
