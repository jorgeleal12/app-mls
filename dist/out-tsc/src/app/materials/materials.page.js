import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoginServiceService } from '../Services/login-service.service';
import { ModalController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
let MaterialsPage = class MaterialsPage {
    constructor(LoginServiceService, modalController, loadingController) {
        this.LoginServiceService = LoginServiceService;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.materials = [];
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
        this.LoginServiceService.search_materials().pipe(finalize(() => {
            this.loadingController.dismiss();
        })).subscribe(result => {
            this.materials = result.response;
        }, error => {
        });
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
    showLoader() {
        this.loaderToShow = this.loadingController.create({
            message: 'Cargando',
            duration: 1000
        }).then((res) => {
            res.present();
        });
    }
};
MaterialsPage = tslib_1.__decorate([
    Component({
        selector: 'app-materials',
        templateUrl: './materials.page.html',
        styleUrls: ['./materials.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [LoginServiceService, ModalController,
        LoadingController])
], MaterialsPage);
export { MaterialsPage };
//# sourceMappingURL=materials.page.js.map