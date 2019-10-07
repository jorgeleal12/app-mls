import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from "../Services/login-service.service";
import { NewClientPage } from '../new-client/new-client.page';
import { ModalController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
let ClientPage = class ClientPage {
    constructor(LoginServiceService, router, modalController, loadingController) {
        this.LoginServiceService = LoginServiceService;
        this.router = router;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.Clients = [];
        this.page = 1;
        this.isSearchbarOpened = false;
        this.textSearch = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.ListClient();
    }
    back() {
        this.router.navigateByUrl('menu/menu/home');
    }
    ModalNewCliente(Client) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: NewClientPage,
                componentProps: {
                    'data': Client,
                }
            });
            modal.onDidDismiss().then((detail) => {
            });
            yield modal.present();
        });
    }
    ListClient(event) {
        this.showLoader();
        const params = { idcompany: 1 };
        this.LoginServiceService.ListClient(this.page).pipe(finalize(() => {
            this.loadingController.dismiss();
        })).subscribe(result => {
            this.Clients = this.Clients.concat(result.response.data);
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
            this.LoginServiceService.AutoListClient(this.textSearch).subscribe(result => {
                this.Clients = result.response;
            }, error => {
            });
        }
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
ClientPage = tslib_1.__decorate([
    Component({
        selector: 'app-client',
        templateUrl: './client.page.html',
        styleUrls: ['./client.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [LoginServiceService,
        Router,
        ModalController,
        LoadingController])
], ClientPage);
export { ClientPage };
//# sourceMappingURL=client.page.js.map