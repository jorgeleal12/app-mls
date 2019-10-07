import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { constant } from '../utilitis/constant';
@Component({
  selector: 'app-view-document',
  templateUrl: './view-document.page.html',
  styleUrls: ['./view-document.page.scss'],
})
export class ViewDocumentPage implements OnInit {
  constant = new constant();
  data
  url
  name_document

  @ViewChild('slider', { static: false, read: ElementRef }) slider: ElementRef;

  img: any;

  sliderOpts = {
    zoom: {
      maxRatio: 5
    }
  };

  constructor(public modalController: ModalController, private navParams: NavParams) {
    this.url = navParams.get('url');
    this.name_document = navParams.get('name');
    this.img = this.constant.routeImage + this.url + this.name_document;
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
