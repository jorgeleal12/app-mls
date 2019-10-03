import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormControlName } from "@angular/forms";
import { LoginServiceService } from '../Services/login-service.service';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
})
export class CityPage implements OnInit {

  citys: any[] = [];
  page = 1;
  maximumPage;
  isSearchbarOpened = false;
  textSearch = '';

  constructor(private loginServiceService: LoginServiceService,
    public modalController: ModalController,
    private navParams: NavParams) { }

  ngOnInit() {
    this.ListClient()
  }

  back() {
    this.modalController.dismiss({
      'dismissed': false,
    });
  }


  select(city) {

    this.modalController.dismiss({
      'dismissed': false,
      data: city
    });
  }


  ListClient(event?) {
    const params = { idcompany: 1 }
    this.loginServiceService.ListCity(this.page).subscribe(result => {
      this.citys = this.citys.concat(result.response.data)
      this.maximumPage = result.response.last_page;


      if (event) {
        event.target.complete();
      }
    }, error => {

    })
  }

  loadMore(event) {
    this.page++;
    this.ListClient(event)
    if (this.page === this.maximumPage) {
      event.target.disabled = true;
    }
  }

  onSearch(event) {
    if (event.target.value == '') {
      this.page = 1
      this.ListClient(event);
    } else {
      this.textSearch = event.target.value;
      this.loginServiceService.AutoCity(this.textSearch).subscribe(result => {

        this.citys = result.response
      }, error => {

      })
    }

  }
}
