import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from "../Services/login-service.service";
import { NewMaterialPage } from '../new-material/new-material.page';
import { ModalController } from '@ionic/angular';
let ListMaterialPage = class ListMaterialPage {
    constructor(LoginServiceService, router, modalController) {
        this.LoginServiceService = LoginServiceService;
        this.router = router;
        this.modalController = modalController;
        this.Materials = [];
        this.page = 1;
        this.isSearchbarOpened = false;
        this.textSearch = '';
    }
    ngOnInit() {
        this.ListMaterial();
    }
    ListMaterial(event) {
        const params = { idcompany: 1 };
        this.LoginServiceService.ListMaterial(this.page).subscribe(result => {
            this.Materials = this.Materials.concat(result.response.data);
            this.maximumPage = result.response.last_page;
            if (event) {
                event.target.complete();
            }
        }, error => {
        });
    }
    back() {
        this.router.navigateByUrl('menu/menu/home');
    }
    ModalNewCliente(Material) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: NewMaterialPage,
                componentProps: {
                    'data': Material,
                }
            });
            modal.onDidDismiss().then((detail) => {
                this.Materials = [];
                this.ListMaterial();
            });
            yield modal.present();
        });
    }
    loadMore(event) {
        this.page++;
        this.ListMaterial(event);
        if (this.page === this.maximumPage) {
            event.target.disabled = true;
        }
    }
    onSearch(event) {
        if (event.target.value == '') {
            this.page = 1;
            this.ListMaterial(event);
        }
        else {
            this.textSearch = event.target.value;
            this.LoginServiceService.AutoListMaterial(this.textSearch).subscribe(result => {
                this.Materials = result.response;
            }, error => {
            });
        }
    }
};
ListMaterialPage = tslib_1.__decorate([
    Component({
        selector: 'app-list-material',
        templateUrl: './list-material.page.html',
        styleUrls: ['./list-material.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [LoginServiceService,
        Router,
        ModalController])
], ListMaterialPage);
export { ListMaterialPage };
//# sourceMappingURL=list-material.page.js.map