import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoginServiceService } from "../Services/login-service.service";
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
let HomePage = class HomePage {
    constructor(LoginServiceService, router, loadingController) {
        this.LoginServiceService = LoginServiceService;
        this.router = router;
        this.loadingController = loadingController;
        this.asignada = 0;
        this.rechazadas = 0;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.total_asignadas();
    }
    total_asignadas() {
        this.showLoader();
        this.LoginServiceService.totalasignadas({ user: localStorage.getItem("id") }).pipe(finalize(() => {
            this.loadingController.dismiss();
        })).subscribe(result => {
            if (result.search_rech != null) {
                this.rechazadas = result.search_rech.total;
            }
            if (result.data != null) {
                this.asignada = result.data.total - this.rechazadas;
            }
        }, error => {
        });
    }
    asignadas() {
        this.router.navigateByUrl('menu/menu/asignadas');
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
HomePage = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: 'home.page.html',
        styleUrls: ['home.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [LoginServiceService, Router, LoadingController])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map