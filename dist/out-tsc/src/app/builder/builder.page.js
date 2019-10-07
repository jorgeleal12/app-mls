import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoginServiceService } from '../Services/login-service.service';
import { ModalController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
let BuilderPage = class BuilderPage {
    constructor(LoginServiceService, modalController, loadingController) {
        this.LoginServiceService = LoginServiceService;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.builders = [];
        this.isSearchbarOpened = false;
        this.textSearch = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.search();
    }
    search() {
        this.showLoader();
        this.LoginServiceService.search_builder().pipe(finalize(() => {
            this.loadingController.dismiss();
        })).subscribe(result => {
            this.builders = result.response;
        }, error => {
        });
    }
    select(builders) {
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
    showLoader() {
        this.loaderToShow = this.loadingController.create({
            message: 'Cargando',
            duration: 1000
        }).then((res) => {
            res.present();
        });
    }
};
BuilderPage = tslib_1.__decorate([
    Component({
        selector: 'app-builder',
        templateUrl: './builder.page.html',
        styleUrls: ['./builder.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [LoginServiceService, ModalController, LoadingController])
], BuilderPage);
export { BuilderPage };
//# sourceMappingURL=builder.page.js.map