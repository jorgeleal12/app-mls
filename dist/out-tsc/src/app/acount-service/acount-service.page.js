import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoginServiceService } from '../Services/login-service.service';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
let AcountServicePage = class AcountServicePage {
    constructor(loginServiceService, toastController, modalController, navParams, loadingController) {
        this.loginServiceService = loginServiceService;
        this.toastController = toastController;
        this.modalController = modalController;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.acounts = [];
        this.isSearchbarOpened = false;
        this.textSearch = '';
        this.idclient = navParams.get('idclient');
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.ListAcount();
    }
    back() {
        this.modalController.dismiss({
            'dismissed': false,
        });
    }
    ListAcount() {
        this.showLoader();
        const params = {
            idclient: this.idclient
        };
        this.loginServiceService.ListAcount(params).pipe(finalize(() => {
            this.loadingController.dismiss();
        })).subscribe(result => {
            this.acounts = result.response;
        }, error => {
        });
    }
    onSearch(event) {
        this.textSearch = event.target.value;
    }
    ModalExit(acount) {
        this.modalController.dismiss({
            'dismissed': false,
            data: acount
        });
    }
    showLoader() {
        this.loaderToShow = this.loadingController.create({
            message: 'Cargando',
            duration: 1000
        }).then((res) => {
            res.present();
        });
    }
};
AcountServicePage = tslib_1.__decorate([
    Component({
        selector: 'app-acount-service',
        templateUrl: './acount-service.page.html',
        styleUrls: ['./acount-service.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [LoginServiceService,
        ToastController,
        ModalController,
        NavParams,
        LoadingController])
], AcountServicePage);
export { AcountServicePage };
//# sourceMappingURL=acount-service.page.js.map