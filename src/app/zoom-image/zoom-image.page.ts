import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
@Component({
  selector: 'app-zoom-image',
  templateUrl: './zoom-image.page.html',
  styleUrls: ['./zoom-image.page.scss'],
})
export class ZoomImagePage implements OnInit {
  data

  @ViewChild('slider', { static: false, read: ElementRef }) slider: ElementRef;

  img: any;

  sliderOpts = {
    zoom: {
      maxRatio: 5
    }
  };

  constructor(public modalController: ModalController, private navParams: NavParams, ) {

    this.img = navParams.get('image');

  }

  ngOnInit() {
  }
  zoom(zoomIn: boolean) {
    let zoom = this.slider.nativeElement.swiper.zoom;
    if (zoomIn) {
      zoom.in();
    } else {
      zoom.out();
    }
  }

  close() {
    this.modalController.dismiss();
  }

  back() {
    this.modalController.dismiss({
      'dismissed': false,
    });
  }
}
