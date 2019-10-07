import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoginServiceService } from '../Services/login-service.service';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { NewAcountPage } from '../new-acount/new-acount.page';
let ListAcountPage = class ListAcountPage {
    constructor(loginServiceService, toastController, modalController, navParams) {
        this.loginServiceService = loginServiceService;
        this.toastController = toastController;
        this.modalController = modalController;
        this.navParams = navParams;
        this.acounts = [];
        this.isSearchbarOpened = false;
        this.textSearch = '';
        this.idclient = navParams.get('idclient');
    }
    ngOnInit() {
        this.ListAcount();
    }
    back() {
        this.modalController.dismiss({
            'dismissed': false,
        });
    }
    ListAcount() {
        const params = {
            idclient: this.idclient
        };
        this.loginServiceService.ListAcount(params).subscribe(result => {
            this.acounts = result.response;
        }, error => {
        });
    }
    onSearch(event) {
        this.textSearch = event.target.value;
    }
    ModalAcount(acount) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: NewAcountPage,
                componentProps: {
                    'data': acount,
                    'idclient': this.idclient,
                }
            });
            modal.onDidDismiss().then((detail) => {
            });
            yield modal.present();
        });
    }
    ModalNewAcount(Client) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: NewAcountPage,
                componentProps: {
                    'idclient': this.idclient,
                }
            });
            modal.onDidDismiss().then((detail) => {
            });
            yield modal.present();
        });
    }
};
ListAcountPage = tslib_1.__decorate([
    Component({
        selector: 'app-list-acount',
        templateUrl: './list-acount.page.html',
        styleUrls: ['./list-acount.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [LoginServiceService,
        ToastController,
        ModalController,
        NavParams])
], ListAcountPage);
export { ListAcountPage };
//# sourceMappingURL=list-acount.page.js.map