import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { ModalController, NavParams } from '@ionic/angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';

import { LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ToastController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

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
    console.log(this.data)
  }

  ngOnInit() {

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


}
