import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoginServiceService } from '../Services/login-service.service';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { NewCertificatePage } from '../new-certificate/new-certificate.page';
let CertificatePage = class CertificatePage {
    constructor(loginServiceService, modalController, navParams) {
        this.loginServiceService = loginServiceService;
        this.modalController = modalController;
        this.navParams = navParams;
        this.number_service = navParams.get('number_service');
        this.type_network = navParams.get('type_network');
        this.data = navParams.get('data');
        console.log(this.data);
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.search();
    }
    search() {
        const params = {
            idodi: this.data.idodi
        };
        this.loginServiceService.search_certificate(params).subscribe(result => {
            this.certificates = result.response;
        }, error => { });
    }
    back() {
        this.modalController.dismiss({
            'dismissed': false,
        });
    }
    ModalNewCertificate() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.data.state != 2) {
                return;
            }
            const modal = yield this.modalController.create({
                component: NewCertificatePage,
                componentProps: {
                    'number_service': this.number_service,
                    'type_network': this.type_network,
                    'data': this.data,
                }
            });
            modal.onDidDismiss().then((detail) => {
                this.search();
            });
            yield modal.present();
        });
    }
    ModalCertificate(certificate) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: NewCertificatePage,
                componentProps: {
                    'number_service': this.number_service,
                    'type_network': this.type_network,
                    'data': this.data,
                    'certificate': certificate,
                }
            });
            modal.onDidDismiss().then((detail) => {
            });
            yield modal.present();
        });
    }
};
CertificatePage = tslib_1.__decorate([
    Component({
        selector: 'app-certificate',
        templateUrl: './certificate.page.html',
        styleUrls: ['./certificate.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [LoginServiceService,
        ModalController, NavParams])
], CertificatePage);
export { CertificatePage };
//# sourceMappingURL=certificate.page.js.map