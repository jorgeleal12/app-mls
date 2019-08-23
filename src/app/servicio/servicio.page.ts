import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.page.html',
  styleUrls: ['./servicio.page.scss'],
})

export class ServicioPage implements OnInit {
  data: any;
  photos = [];
  private win: any = window;
  image



  @ViewChild('layout', { static: true }) canvasRef;
  constructor(private route: ActivatedRoute, private router: Router, private imagePicker: ImagePicker,
    public transfer: FileTransfer,
    public file: File,

    private fileChooser: FileChooser,
  ) {

    this.route.queryParams.subscribe(params => {
      this.data = this.router.getCurrentNavigation().extras
      console.log(this.data)
      for (let index = 0; index < this.data.quantity; index++) {
        this.photos.push({
          imagenes: '',
          id: index,
          hidden: false,
          name_photo: this.data.name_photo

        });
      }
    });





  }

  ngOnInit() {
  }


  choosePicture(photo) {

    // this.respuesta = true;
    // this.falso = true;
    // this.imagenbotton = false;
    //this.rowDataHomeForm = [];

    let options = {
      title: "selecionar imagen",
      message: "select 1",
      maximumImagesCount: 1,
      outType: 0,
      width: 1920,
      height: 1080,
      quality: 100
    };

    this.imagePicker.getPictures(options).then(
      _imagePath => {
        // this.image = _imagePath;


        let path = this.win.Ionic.WebView.convertFileSrc(_imagePath[0]);
        photo.imagenes = path;
        console.log(_imagePath[0])
        console.log(photo)
        photo.hidden = true
        // for (var i = 0; i < this.image.length; i++) {

        // }
      },
      err => { }
    );
  }


  onLoadimage(img, id, name_photo) {
    let canvas = this.canvasRef.nativeElement;
    let context = canvas.getContext("2d");

    let source = new Image();
    source.crossOrigin = "Anonymous";
    source.onload = () => {
      canvas.height = source.height;
      canvas.width = source.width;
      canvas.style.width = "320px";
      canvas.style.height = "300px";
      context.drawImage(source, 0, 0);

      context.font = "50px impact";
      context.textAlign = "right";
      context.fillStyle = "white";
      context.fillText(name_photo, 600, 100);
      let quality = [1.0];
      let imagen = canvas.toDataURL("image/jpeg");

      const fileTransfer: FileTransferObject = this.transfer.create();
      // console.log(img, this.imagen);
      let divisiones = img.split("cache/");

      let options: FileUploadOptions = {
        fileKey: "file",
        fileName: divisiones[1],
        headers: {},
        params: { params: this.data }
      };

      fileTransfer
        .upload(
          imagen,
          "http://192.168.1.57/laravel-mls/public/api/odi/send_image_movil",
          options
        )
        .then(
          data => {
            // var json = JSON.parse(data.response);

            // if (json.response == true) {
            // this.respuesta = false;
            // this.rowDataHomeForm[id].state = true;
            // } else {
            // this.rowDataHomeForm[id].state = false;
            // this.writeFile(imagen, "My Picture", divisiones[1]);

            // this.database
            //   .CreateConse(
            //     this.data.consecutive,
            //     this.file.externalRootDirectory + "SIP/" + divisiones[1],
            //     this.pedido,
            //     divisiones[1]
            //   )
            //   .then(
            //     dataset => {
            //       console.log(dataset);
            //     },
            //     error => { }
            //   );

            // this.falso = false;
            // }
          },
          err => {
            console.log(err.body);
            // this.falso = false;
            // this.writeFile(imagen, "My Picture", divisiones[1]);
            // this.database
            //   .CreateConse(
            //     this.data.consecutive,
            //     this.file.externalRootDirectory + "SIP/" + divisiones[1],
            //     this.pedido,
            //     divisiones[1]
            //   )
            //   .then(
            //     dataset => {
            //       console.log(dataset);
            //     },
            //     error => { }
            //   );
            // this.rowDataHomeForm[id].state = false;
          }
        );
    };

    source.src = img;
  }


  send_image() {
    // let loader = this.loadingCtrl.create({
    //   content: "Please wait..."
    // });
    // loader.present();
    console.log(1)
    for (let data of this.photos) {
      this.onLoadimage(data.imagenes, data.id, data.name_photo);
    }

    // loader.dismiss();
    // this.database.GetAllUsers(this.consecutivo).then(
    //   Response => {
    //     console.log(Response);
    //   },
    //   error => {}
    // );
    // this.image = [];

    //let reader = new FileReader();
  }
}
