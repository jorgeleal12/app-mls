import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from "../Services/login-service.service";
import { NewBuilderPage } from '../new-builder/new-builder.page';
import { ModalController } from '@ionic/angular';
let ListBuilderPage = class ListBuilderPage {
    constructor(LoginServiceService, router, modalController) {
        this.LoginServiceService = LoginServiceService;
        this.router = router;
        this.modalController = modalController;
        this.builders = [];
        this.page = 1;
        this.isSearchbarOpened = false;
        this.textSearch = '';
    }
    ngOnInit() {
        this.ListBuilder();
    }
    ListBuilder(event) {
        const params = { idcompany: 1 };
        this.LoginServiceService.ListBuilder(this.page).subscribe(result => {
            this.builders = this.builders.concat(result.response.data);
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
                component: NewBuilderPage,
                componentProps: {
                    'data': Material,
                }
            });
            modal.onDidDismiss().then((detail) => {
                this.builders = [];
                this.ListBuilder();
            });
            yield modal.present();
        });
    }
    loadMore(event) {
        this.page++;
        this.ListBuilder(event);
        if (this.page === this.maximumPage) {
            event.target.disabled = true;
        }
    }
    onSearch(event) {
        if (event.target.value == '') {
            this.page = 1;
            this.ListBuilder(event);
        }
        else {
            this.textSearch = event.target.value;
            this.LoginServiceService.AutoListBuilder(this.textSearch).subscribe(result => {
                this.builders = result.response;
            }, error => {
            });
        }
    }
};
ListBuilderPage = tslib_1.__decorate([
    Component({
        selector: 'app-list-builder',
        templateUrl: './list-builder.page.html',
        styleUrls: ['./list-builder.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [LoginServiceService,
        Router,
        ModalController])
], ListBuilderPage);
export { ListBuilderPage };
//# sourceMappingURL=list-builder.page.js.map