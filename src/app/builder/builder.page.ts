import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../Services/login-service.service';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-builder',
  templateUrl: './builder.page.html',
  styleUrls: ['./builder.page.scss'],
})
export class BuilderPage implements OnInit {

  builders: any[] = [];
  isSearchbarOpened = false;
  textSearch = '';
  constructor(private LoginServiceService: LoginServiceService, public modalController: ModalController) { }
  ngOnInit() {
    this.search();
  }
  search() {
    this.LoginServiceService.search_builder().subscribe(result => {
      this.builders = result.response;
    }, error => {

    })
  }
  select(builders) {
    // console.log(material)
    this.modalController.dismiss({
      'dismissed': true,
      data: builders
    });
  }

  back() {
    this.modalController.dismiss({
      'dismissed': false,
    });
  }

  onSearch(event) {

    this.textSearch = event.target.value;
  }

}
