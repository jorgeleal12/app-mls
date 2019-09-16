import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../Services/login-service.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.page.html',
  styleUrls: ['./materials.page.scss'],
})
export class MaterialsPage implements OnInit {

  materials: any[] = [];
  isSearchbarOpened = false;
  textSearch = '';
  constructor(private LoginServiceService: LoginServiceService, public modalController: ModalController) { }

  ngOnInit() {
    this.search();
  }


  search() {
    this.LoginServiceService.search_materials().subscribe(result => {
      this.materials = result.response;
    }, error => {

    })
  }

  select(material) {
    // console.log(material)

    this.modalController.dismiss({
      'dismissed': true,
      data: material
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
