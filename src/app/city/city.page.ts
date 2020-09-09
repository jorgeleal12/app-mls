import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormControlName } from "@angular/forms";
import { LoginServiceService } from '../Services/login-service.service';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { NetworkService, ConnectionStatus } from '../Services/network.service';
import { TasksService } from '../Services/tasks-service';
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
    private navParams: NavParams, private networkService: NetworkService, private tasksService: TasksService) { }

  ngOnInit() {
    this.ListCity()
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


  ListCity(event?) {

    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {

      this.tasksService.SelectCityFinall().then(tasks => {
        this.citys = tasks;
        // console.log(tasks)
      })
        .catch(error => {
          console.error(error);
        });

    } else {
      //  const params = { idcompany: 1 }
      this.loginServiceService.ListCity(this.page).subscribe(result => {
        this.citys = this.citys.concat(result.response.data)
        this.maximumPage = result.response.last_page;


        if (event) {
          event.target.complete();
        }
      }, error => {

      })
    }

  }

  loadMore(event) {
    this.page++;
    this.ListCity(event)
    if (this.page === this.maximumPage) {
      event.target.disabled = true;
    }
  }

  onSearch(event) {
    this.textSearch = event.target.value;
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {

      this.tasksService.SelectCity(this.textSearch).then(tasks => {

        this.citys = tasks
      })
        .catch(error => {
          console.error(error);
        });
    } else {

      if (event.target.value == '') {
        this.page = 1
        this.ListCity(event);
      } else {
        this.loginServiceService.AutoCity(this.textSearch).subscribe(result => {

          this.citys = result.response
        }, error => {

        })
      }
    }



  }
}
