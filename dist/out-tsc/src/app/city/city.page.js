import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoginServiceService } from '../Services/login-service.service';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
let CityPage = class CityPage {
    constructor(loginServiceService, modalController, navParams) {
        this.loginServiceService = loginServiceService;
        this.modalController = modalController;
        this.navParams = navParams;
        this.citys = [];
        this.page = 1;
        this.isSearchbarOpened = false;
        this.textSearch = '';
    }
    ngOnInit() {
        this.ListClient();
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
    ListClient(event) {
        const params = { idcompany: 1 };
        this.loginServiceService.ListCity(this.page).subscribe(result => {
            this.citys = this.citys.concat(result.response.data);
            this.maximumPage = result.response.last_page;
            if (event) {
                event.target.complete();
            }
        }, error => {
        });
    }
    loadMore(event) {
        this.page++;
        this.ListClient(event);
        if (this.page === this.maximumPage) {
            event.target.disabled = true;
        }
    }
    onSearch(event) {
        if (event.target.value == '') {
            this.page = 1;
            this.ListClient(event);
        }
        else {
            this.textSearch = event.target.value;
            this.loginServiceService.AutoCity(this.textSearch).subscribe(result => {
                this.citys = result.response;
            }, error => {
            });
        }
    }
};
CityPage = tslib_1.__decorate([
    Component({
        selector: 'app-city',
        templateUrl: './city.page.html',
        styleUrls: ['./city.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [LoginServiceService,
        ModalController,
        NavParams])
], CityPage);
export { CityPage };
//# sourceMappingURL=city.page.js.map