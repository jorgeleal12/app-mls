import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.page.html',
  styleUrls: ['./servicio.page.scss'],
})

export class ServicioPage implements OnInit {
  data: any;
  photos = [];

  constructor(private route: ActivatedRoute, private router: Router, private imagePicker: ImagePicker) {

    this.route.queryParams.subscribe(params => {
      this.data = this.router.getCurrentNavigation().extras

      for (let index = 0; index < this.data.quantity; index++) {
        this.photos.push({
          imagenes: '',
          id: index,
          state: true
        });
      }
    });





  }

  ngOnInit() {
  }


  choosePicture(photo) {
    console.log(photo)
    // this.respuesta = true;
    // this.falso = true;
    // this.imagenbotton = false;
    //this.rowDataHomeForm = [];

    let options = {
      title: "selecionar imagen",
      message: "select 1",
      maximumImagesCount: 12,
      outType: 0,
      width: 1920,
      height: 1080,
      quality: 100
    };

    this.imagePicker.getPictures(options).then(
      _imagePath => {
        // this.image = _imagePath;

        // for (var i = 0; i < this.image.length; i++) {

        // }
      },
      err => { }
    );
  }
}
