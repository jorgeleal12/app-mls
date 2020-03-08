import { Component, OnInit, ViewChild, ɵConsole } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { ModalController } from '@ionic/angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { LoadingController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { TasksService } from '../Services/tasks-service';
import { constant } from '../utilitis/constant';



@Component({
  selector: 'app-sendimages',
  templateUrl: './sendimages.page.html',
  styleUrls: ['./sendimages.page.scss'],
})
export class SendimagesPage implements OnInit {

  data: any;
  photos = [];
  private win: any = window;
  image
  public response = true;
  public falso = true;
  loaderToShow: any;
  number_service
  type_network
  photos_service
  number
  suma;
  row_data: any = []
  idservice;
  user;
  images
  images2
  marcar
  constant = new constant();
  @ViewChild('layout', { static: true }) canvasRef;
  constructor(private route: ActivatedRoute, private router: Router, private imagePicker: ImagePicker,
    public transfer: FileTransfer,
    public file: File,
    public loadingController: LoadingController,
    private fileChooser: FileChooser,
    private navParams: NavParams
    , public modalController: ModalController,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    public toastController: ToastController,
    private tasksService: TasksService
  ) {


    this.number_service = navParams.get('number_service');
    this.type_network = navParams.get('type_network');
    this.data = navParams.get('data');
    this.photos_service = navParams.get('photos_service');
    this.idservice = navParams.get('idservice');
    this.marcar = navParams.get('marcar');
    console.log(this.marcar)
    for (let index = 0; index < this.photos_service.quantity; index++) {
      this.photos.push({
        imagenes: '',//'http://192.168.1.126/laravel-mls/public/public/odi/images/MLS/MEDELLIN/79/VsSuRyL4USikUZE.jpg',
        id: index,
        hidden: false,
        name_photo: this.photos_service.name_photo,
        hidden_image: true,
        idodi: this.data.idodi,
        tipe: this.photos_service.idphotos,
        contract_idcontract: this.data.contract_idcontract,
        state: true,
        state_send: false,
        send: true,
        error: true
        ,
      });
    }



    this.file.checkDir(this.file.externalRootDirectory, 'MLS').then(_ =>
      console.log('exist')
    ).catch(err => {
      this.dir();
      console.log('no exist');
    });


  }

  ngOnInit() {
    this.user = localStorage.getItem("nombres")
  }



  async selectImage(photo) {
    const actionSheet = await this.actionSheetController.create({
      header: "Sellecione la Imagen",
      buttons: [{
        text: 'Galería',
        icon: 'photos',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY, photo);
          //this.choosePicture(photo)
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
        icon: 'close',
        role: 'cancel'
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
      // console.log(_imagePath[0])
      // console.log(photo)
      photo.hidden = true
      photo.hidden_image = false

    }, (err) => {
      // Handle error
    });
  }
  choosePicture(photo) {
    let options = {
      title: "selecionar imagen",
      message: "select 1",
      maximumImagesCount: 1,
      outType: 0,
      width: 1080,
      height: 720,
      quality: 100,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    };

    this.imagePicker.getPictures(options).then(
      _imagePath => {
        let path = this.win.Ionic.WebView.convertFileSrc(_imagePath[0]);
        photo.imagenes = path;
        photo.hidden = true
        photo.hidden_image = false
      },
      err => { }
    );
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


  async presentToast(mesajje) {
    const toast = await this.toastController.create({
      message: mesajje,
      duration: 2000
    });
    toast.present();
  }

  addImageProcess(img, name_photo, hoy) {
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
        if (this.marcar == false) {
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
          context.fillText(name_photo, x, y + 50);
          // let quality = [1.0];

        }
        let imagen = canvas.toDataURL("image/jpeg");
        resolve(imagen)
      }
      source.onerror = reject
      source.src = img
    })
  }
  async send_image() {
    this.showLoader()
    for (let data of this.photos) {
      if (data.imagenes == '') {
      } else {
        if (data.state_send == false) {
          let img = data.imagenes;
          let id = data.id;
          let name_photo = data.name_photo;
          let idodi = data.idodi;
          let tipe = data.tipe;
          let contract_idcontract = data.contract_idcontract
          let params = {
            idodi: idodi,
            tipe: tipe,
            contract_idcontract: contract_idcontract,
            idservice: this.idservice
          }


          let hoy = this.hoy()

          const imagen: any = await this.addImageProcess(img, name_photo, hoy)

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

          await fileTransfer
            .upload(
              imagen,
              this.constant.routeGlobal + "odi/send_image_movil",
              options
            )
            .then(
              data => {
                var json = JSON.parse(data.response);
                if (json.response == true) {
                  this.photos[id].state = true;
                  this.photos[id].state_send = true;
                  this.photos[id].send = false;

                  this.tasksService.SelectImageOne(tipe, idodi, this.idservice).then(tasks => {
                    let row_data = tasks[0]
                    let number = row_data.actual + 1;
                    // console.log(number)
                    // console.log(tipe, idodi, this.idservice, number)
                    this.tasksService.update(tipe, idodi, this.idservice, number)
                      .then(response => {

                      })
                      .catch(error => {
                        console.error(error);
                      })

                  })
                    .catch(error => {
                      console.error(error);
                    });

                  this.file.removeFile('file:///' + divisiones2[1] + "cache/", divisiones1[0]);

                } else {
                  this.photos[id].state = false;
                  this.photos[id].state_send = true;
                  this.photos[id].error = false;
                  this.falso = false;
                  this.file.removeFile('file:///' + divisiones2[1] + "cache/", divisiones1[0]);
                }
              },
              err => {
                console.log(err.body)
                this.photos[id].state = false;
                this.photos[id].state_send = true;
                this.photos[id].error = false;

                this.file.removeFile('file:///' + divisiones2[1] + "cache/", divisiones1[0]);
                this.presentToast('Error de Coneción')
              }
            );

        }


      }

    }
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
    this.modalController.dismiss({
      'dismissed': false,
    });
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
