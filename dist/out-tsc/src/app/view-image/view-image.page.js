import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { LoginServiceService } from '../Services/login-service.service';
let ViewImagePage = class ViewImagePage {
    constructor(modalController, navParams, loginServiceService) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.loginServiceService = loginServiceService;
        this.url = 'http://192.168.1.57/laravel-mls/public/public/';
        this.data = navParams.get('data');
        this.idservice = navParams.get('idservice');
    }
    ngOnInit() {
        this.search();
    }
    back() {
        this.modalController.dismiss({
            'dismissed': false,
        });
    }
    search() {
        const params = {
            idservice: this.idservice,
            id_odi: this.data.idodi
        };
        this.loginServiceService.ViewImage(params).subscribe(result => {
            this.photos = result.response;
        }, error => { });
    }
};
ViewImagePage = tslib_1.__decorate([
    Component({
        selector: 'app-view-image',
        templateUrl: './view-image.page.html',
        styleUrls: ['./view-image.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ModalController, NavParams, LoginServiceService])
], ViewImagePage);
export { ViewImagePage };
//# sourceMappingURL=view-image.page.js.map