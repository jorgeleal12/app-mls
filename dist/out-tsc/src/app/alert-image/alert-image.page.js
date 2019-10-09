import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginServiceService } from '../Services/login-service.service';
import { ActivatedRoute, Router, } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { SendimagesPage } from '../sendimages/sendimages.page';
import { TasksService } from '../Services/tasks-service';
let AlertImagePage = class AlertImagePage {
    constructor(route, router, LoginServiceService, modalController, navParams, tasksService) {
        this.route = route;
        this.router = router;
        this.LoginServiceService = LoginServiceService;
        this.modalController = modalController;
        this.navParams = navParams;
        this.tasksService = tasksService;
        this.number_service = navParams.get('number_service');
        this.type_network = navParams.get('type_network');
        this.data = navParams.get('data');
        this.photos_services = navParams.get('images');
        this.idservice = navParams.get('idservice');
        // console.log(this.images)
        // console.log(this.data)
    }
    ngOnInit() {
    }
    photos_add(photos_service) {
        let navigationExtras = {
            queryParams: {
                photos_service: photos_service,
                data: this.data
            }
        };
        this.router.navigate(['menu/menu/fotografias'], navigationExtras);
        this.modalController.dismiss({
            'dismissed': false,
        });
    }
    search() {
        this.tasksService.SelectImage(this.data.idodi, this.idservice)
            .then(tasks => {
            let actual = 0;
            let totales = 0;
            let images = [];
            for (const prop in tasks) {
                actual += tasks[prop].actual;
                totales += tasks[prop].min;
                if (tasks[prop].actual < tasks[prop].min) {
                    images.push(tasks[prop]);
                }
            }
            this.photos_services = images;
        })
            .catch(error => {
            console.error(error);
        });
    }
    back() {
        this.modalController.dismiss({
            'dismissed': false,
        });
    }
    ModalImage(photos_service) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: SendimagesPage,
                componentProps: {
                    'number_service': this.number_service,
                    'type_network': this.type_network,
                    'data': this.data,
                    'photos_service': photos_service,
                    'idservice': this.idservice
                }
            });
            modal.onDidDismiss().then((detail) => {
                this.search();
            });
            yield modal.present();
        });
    }
};
AlertImagePage = tslib_1.__decorate([
    Component({
        selector: 'app-alert-image',
        templateUrl: './alert-image.page.html',
        styleUrls: ['./alert-image.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
        Router,
        LoginServiceService, ModalController, NavParams, TasksService])
], AlertImagePage);
export { AlertImagePage };
//# sourceMappingURL=alert-image.page.js.map