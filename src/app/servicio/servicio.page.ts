import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { LoadingController } from '@ionic/angular';
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
  public response = true;
  public falso = true;
  loaderToShow: any;


  @ViewChild('layout', { static: true }) canvasRef;
  constructor(private route: ActivatedRoute, private router: Router, private imagePicker: ImagePicker,
    public transfer: FileTransfer,
    public file: File,
    public loadingController: LoadingController,
    private fileChooser: FileChooser,
  ) {

    this.route.queryParams.subscribe(params => {
      this.data = this.router.getCurrentNavigation().extras
      for (let index = 0; index < this.data.queryParams.photos_service.quantity; index++) {
        this.photos.push({
          imagenes: '',//'http://192.168.1.126/laravel-mls/public/public/odi/images/MLS/MEDELLIN/79/VsSuRyL4USikUZE.jpg',
          id: index,
          hidden: false,
          name_photo: this.data.queryParams.photos_service.name_photo,
          hidden_image: true,
          idodi: this.data.queryParams.data.idodi,
          tipe: this.data.queryParams.photos_service.photos_idphotos,
          contract_idcontract: this.data.queryParams.data.contract_idcontract,
          state: true,
          state_send: false,
          send: true,
          error: true
          ,
        });
      }
    });


    // this.file.checkDir(this.file.externalRootDirectory, 'MLS').then(_ =>
    //   console.log('exist')
    // ).catch(err => {
    //   this.dir();
    //   console.log('no exist');
    // });


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
      width: 1080,
      height: 720,
      quality: 100
    };

    this.imagePicker.getPictures(options).then(
      _imagePath => {
        // this.image = _imagePath;


        let path = this.win.Ionic.WebView.convertFileSrc(_imagePath[0]);
        photo.imagenes = path;
        // console.log(_imagePath[0])
        // console.log(photo)
        photo.hidden = true
        photo.hidden_image = false
        // for (var i = 0; i < this.image.length; i++) {

        // }
      },
      err => { }
    );
  }


  onLoadimage(img, id, name_photo, idodi, tipe, contract_idcontract) {

    let params = {
      idodi: idodi,
      tipe: tipe,
      contract_idcontract: contract_idcontract
    }
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
        params: { params: params }
      };

      fileTransfer
        .upload(
          imagen,
          "http://190.0.33.166:40/laravel-mls/public/api/odi/send_image_movil",
          options
        )
        .then(
          data => {
            var json = JSON.parse(data.response);

            if (json.response == true) {

              this.photos[id].state = true;
              this.photos[id].state_send = true;
              this.photos[id].send = false;

            } else {

              this.photos[id].state = false;
              this.photos[id].state_send = true;
              this.photos[id].error = false;

              this.writeFile(imagen, "My Picture", divisiones[1]);

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

              this.falso = false;
            }
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
    this.showLoader()

    // let loader = this.loadingCtrl.create({
    //   content: "Please wait..."
    // });
    // loader.present();

    for (let data of this.photos) {

      if (data.imagenes == '') {
        // console.log(1)

      } else {
        //console.log(2)
        if (data.state_send == false) {
          this.onLoadimage(data.imagenes, data.id, data.name_photo, data.idodi, data.tipe, data.contract_idcontract);
        }

      }

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


  back() {
    this.router.navigateByUrl('menu/menu/servicio');
  }

  //////////////////////////////////////////////////////base 64 store///////////////////////////////////////////////////////////////////////////////////////////


  //here is the method is used to write a file in storage
  public writeFile(base64Data: any, folderName: string, fileName: any) {
    let content = this.getContentbase64Data(base64Data);
    let contentType = this.getContentType(base64Data);
    let DataBlob = this.base64toBlob(content, contentType);
    // here iam mentioned this line this.file.externalRootDirectory is a native pre-defined file path storage. You can change a file path whatever pre-defined method.
    let filePath = this.file.externalRootDirectory + "MLS/";
    this.file
      .writeFile(filePath, fileName, DataBlob, contentType)
      .then(success => {
        console.log("File Writed Successfully", success);
      })
      .catch(err => {
        console.log("Error Occured While Writing File", err);
      });
  }
  //here is the method is used to get content type of an bas64 data
  public getContentType(base64Data: any) {
    let block = base64Data.split(";");
    let contentType = block[0].split(":")[1];
    return contentType;
  }

  public getContentbase64Data(base64Data: any) {
    let block = base64Data.split(";");
    let contentType = block[1].split(",")[1];
    return contentType;
  }
  //here is the method is used to convert base64 data to blob data
  public base64toBlob(b64Data, contentType) {
    contentType = contentType || "";
    let sliceSize = 512;
    let byteCharacters = atob(b64Data);
    let byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      let slice = byteCharacters.slice(offset, offset + sliceSize);
      let byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      var byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    let blob = new Blob(byteArrays, {
      type: contentType
    });
    return blob;
  }


  dir() {
    this.file.createDir(this.file.externalRootDirectory, 'MLS', false).then(response => {
      console.log('Directory create' + response);
    }).catch(err => {
      console.log('Directory no create' + JSON.stringify(err));
    })
  }
}
