import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from "../Services/login-service.service";
import { ModalController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
let ClientServicePage = class ClientServicePage {
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
    ModalExit(Client) {
        this.modalController.dismiss({
            'dismissed': false,
            data: Client
        });
    }
    back() {
        this.modalController.dismiss({
            'dismissed': false,
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
ClientServicePage = tslib_1.__decorate([
    Component({
        selector: 'app-client-service',
        templateUrl: './client-service.page.html',
        styleUrls: ['./client-service.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [LoginServiceService,
        Router,
        ModalController,
        LoadingController])
], ClientServicePage);
export { ClientServicePage };
//# sourceMappingURL=client-service.page.js.map