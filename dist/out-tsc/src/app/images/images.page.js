import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginServiceService } from '../Services/login-service.service';
import { ActivatedRoute, Router, } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { SendimagesPage } from '../sendimages/sendimages.page';
import { TasksService } from '../Services/tasks-service';
let ImagesPage = class ImagesPage {
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
        this.idservice = navParams.get('idservice');
    }
    ngOnInit() {
        this.photo_service();
    }
    photo_service() {
        let params = {
            type_network: this.type_network
        };
        this.tasksService.SelectImage(this.data.idodi, this.idservice)
            .then(tasks => {
            this.PhotoServices = tasks;
            this.propCount = Object.keys(tasks).length;
            if (this.propCount > 0) {
                this.photos_services = this.PhotoServices;
            }
            else {
                this.LoginServiceService.photos_service(params).subscribe(result => {
                    this.photos_services = result.response;
                    for (const prop in this.photos_services) {
                        this.tasksService.InsertImage(this.data.idodi, this.photos_services[prop], this.idservice)
                            .then(tasks => {
                            console.log(tasks);
                        })
                            .catch(error => {
                            console.error(error);
                        });
                    }
                }, error => {
                });
            }
        })
            .catch(error => {
            console.error(error);
        });
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
            });
            yield modal.present();
        });
    }
};
ImagesPage = tslib_1.__decorate([
    Component({
        selector: 'app-images',
        templateUrl: './images.page.html',
        styleUrls: ['./images.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
        Router,
        LoginServiceService, ModalController, NavParams, TasksService])
], ImagesPage);
export { ImagesPage };
//# sourceMappingURL=images.page.js.map