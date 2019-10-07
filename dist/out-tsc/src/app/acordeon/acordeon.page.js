import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoginServiceService } from '../Services/login-service.service';
import { MaterialsPage } from '../materials/materials.page';
import { ModalController } from '@ionic/angular';
import { BuilderPage } from '../builder/builder.page';
import { Service } from '../model/Service.model';
import { ToastController } from '@ionic/angular';
import { CertificatePage } from '../certificate/certificate.page';
import { FormControl, FormGroup } from "@angular/forms";
import { ClientServicePage } from '../client-service/client-service.page';
import { AcountServicePage } from '../acount-service/acount-service.page';
import { LoadingController } from '@ionic/angular';
let AcordeonPage = class AcordeonPage {
    constructor(route, router, launchNavigator, geolocation, loginServiceService, modalController, toastController, loadingController) {
        this.route = route;
        this.router = router;
        this.launchNavigator = launchNavigator;
        this.geolocation = geolocation;
        this.loginServiceService = loginServiceService;
        this.modalController = modalController;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.step = { sectionName: null };
        this.div_hidden = true;
        this.div_service = true;
        this.Service = new Service();
        this.NewService = new FormGroup({
            number_service: new FormControl(),
            name_priority: new FormControl(),
            date_programming: new FormControl(),
            Attention: new FormControl(),
            name_atencion: new FormControl(),
            name_gas: new FormControl(),
            name_type: new FormControl(),
            name_network: new FormControl(),
            contract_name: new FormControl(),
            client: new FormControl(),
            name_client: new FormControl(),
            identifacation: new FormControl(),
            phone: new FormControl(),
            type_service_idtype_service: new FormControl(),
            type_network_idtype_network: new FormControl(),
            address: new FormControl(),
            idodi: new FormControl(),
            name_state: new FormControl(),
            state: new FormControl(),
            name_material: new FormControl(),
            name_construtor: new FormControl(),
            priority: new FormControl(),
            material: new FormControl(),
            construtor: new FormControl(),
            service_type_idservice_type: new FormControl(),
            name_address: new FormControl(),
            number_acount: new FormControl(),
            indications: new FormControl(),
            user: new FormControl(),
            user_type: new FormControl(),
            department_iddepartment: new FormControl(),
            city: new FormControl(),
        });
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras;
                this.div_service = false;
                this.div_hidden = true;
                this.NewService.get('number_service').setValue(this.data.idodi);
                this.NewService.get('name_priority').setValue(this.data.name_priority);
                this.NewService.get('date_programming').setValue(this.data.date_programming);
                this.NewService.get('Attention').setValue(this.data.Attention);
                this.NewService.get('name_atencion').setValue(this.data.name_atencion);
                this.NewService.get('name_gas').setValue(this.data.name_gas);
                this.NewService.get('name_type').setValue(this.data.name_type);
                this.NewService.get('name_network').setValue(this.data.name_network);
                this.NewService.get('contract_name').setValue(this.data.contract_name);
                this.NewService.get('client').setValue(this.data.client);
                this.NewService.get('name_client').setValue(this.data.name_client);
                this.NewService.get('identifacation').setValue(this.data.identifacation);
                this.NewService.get('phone').setValue(this.data.phone);
                this.NewService.get('type_service_idtype_service').setValue(this.data.type_service_idtype_service);
                this.NewService.get('type_network_idtype_network').setValue(this.data.type_network_idtype_network);
                this.NewService.get('address').setValue(this.data.address);
                this.NewService.get('idodi').setValue(this.data.idodi);
                this.NewService.get('name_state').setValue(this.data.name_state);
                this.NewService.get('state').setValue(this.data.state);
                this.NewService.get('name_material').setValue(this.data.name_material);
                this.NewService.get('name_construtor').setValue(this.data.name_construtor);
                this.NewService.get('priority').setValue(this.data.priority);
                this.NewService.get('material').setValue(this.data.material);
                this.NewService.get('construtor').setValue(this.data.construtor);
                this.NewService.get('service_type_idservice_type').setValue(this.data.service_type_idservice_type);
                this.search_address();
                this.hidden = true;
                this.type_red();
            }
            else {
                this.div_hidden = false;
                this.div_service = true;
                this.NewService.reset();
                this.hidden = false;
            }
        });
        this.coords();
    }
    ngOnInit() {
        this.NewService.get('user').setValue(localStorage.getItem("idemployees"));
        this.NewService.get('user_type').setValue(localStorage.getItem("type"));
    }
    edit() {
        console.log('1');
        this.hidden = false;
        this.div_hidden = false;
        this.div_service = true;
        this.NewService.get('type_network_idtype_network').setValue(this.data.type_network_idtype_network);
        this.search_address();
    }
    search_address() {
        this.loginServiceService.search_address(this.NewService.value.address).subscribe(result => {
            this.NewService.get('name_address').setValue(result.response.address);
            this.NewService.get('number_acount').setValue(result.response.number_acount);
            this.NewService.get('indications').setValue(result.response.indications);
            this.NewService.get('city').setValue(result.response.city);
        }, error => {
        });
    }
    presentToast(message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000
            });
            toast.present();
        });
    }
    presentModal() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.NewService.value.material == null) {
                const modal = yield this.modalController.create({
                    component: MaterialsPage
                });
                modal.onDidDismiss().then((detail) => {
                    if (detail.data.data !== undefined) {
                        this.NewService.get('name_material').setValue(detail.data.data.name_materials);
                        this.NewService.get('material').setValue(detail.data.data.idmaterials);
                        this.step.sectionName = 'expanded4';
                    }
                });
                yield modal.present();
            }
        });
    }
    edit_material() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: MaterialsPage
            });
            modal.onDidDismiss().then((detail) => {
                if (detail.data.data !== undefined) {
                    this.NewService.get('name_material').setValue(detail.data.data.name_materials);
                    this.NewService.get('material').setValue(detail.data.data.idmaterials);
                    this.step.sectionName = 'expanded4';
                }
            });
            yield modal.present();
        });
    }
    client() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.NewService.value.client == undefined) {
                const modal = yield this.modalController.create({
                    component: ClientServicePage,
                });
                modal.onDidDismiss().then((detail) => {
                    if (detail.data.data !== undefined) {
                        this.NewService.get('client').setValue(detail.data.data.idclient);
                        this.NewService.get('name_client').setValue(detail.data.data.name_client);
                        this.NewService.get('identifacation').setValue(detail.data.data.id_client);
                        this.NewService.get('phone').setValue(detail.data.data.phone);
                        this.step.sectionName = 'expanded3';
                    }
                });
                yield modal.present();
            }
        });
    }
    edit_client() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: ClientServicePage,
            });
            modal.onDidDismiss().then((detail) => {
                if (detail.data.data !== undefined) {
                    this.NewService.get('client').setValue(detail.data.data.idclient);
                    this.NewService.get('name_client').setValue(detail.data.data.name_client);
                    this.NewService.get('identifacation').setValue(detail.data.data.id_client);
                    this.NewService.get('phone').setValue(detail.data.data.phone);
                    this.step.sectionName = 'expanded3';
                }
            });
            yield modal.present();
        });
    }
    DeleClient() {
        this.NewService.get('client').setValue(null);
        this.NewService.get('name_client').setValue('');
        this.NewService.get('identifacation').setValue('');
        this.NewService.get('phone').setValue('');
        this.step.sectionName = 'expanded3';
    }
    acount() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.NewService.value.client == null) {
                this.presentToast('Seleccione Primero un Cliente');
                return;
            }
            if (this.NewService.value.address == undefined) {
                const modal = yield this.modalController.create({
                    component: AcountServicePage,
                    componentProps: {
                        'idclient': this.NewService.value.client,
                    }
                });
                modal.onDidDismiss().then((detail) => {
                    if (detail.data.data !== undefined) {
                        this.NewService.get('address').setValue(detail.data.data.idclient_account);
                        this.NewService.get('name_address').setValue(detail.data.data.address);
                        this.NewService.get('number_acount').setValue(detail.data.data.number_acount);
                        this.NewService.get('indications').setValue(detail.data.data.indications);
                        this.NewService.get('city').setValue(detail.data.data.city);
                        this.step.sectionName = 'expanded2';
                    }
                });
                yield modal.present();
            }
        });
    }
    edit_acount() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.NewService.value.client == null) {
                this.presentToast('Seleccione Primero un Cliente');
                return;
            }
            const modal = yield this.modalController.create({
                component: AcountServicePage,
                componentProps: {
                    'idclient': this.NewService.value.client,
                }
            });
            modal.onDidDismiss().then((detail) => {
                if (detail.data.data !== undefined) {
                    this.NewService.get('address').setValue(detail.data.data.idclient_account);
                    this.NewService.get('name_address').setValue(detail.data.data.address);
                    this.NewService.get('number_acount').setValue(detail.data.data.number_acount);
                    this.NewService.get('indications').setValue(detail.data.data.indications);
                    this.NewService.get('city').setValue(detail.data.data.city);
                    this.step.sectionName = 'expanded2';
                }
            });
            yield modal.present();
        });
    }
    ModalBuilder() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.NewService.value.construtor == undefined) {
                const modal = yield this.modalController.create({
                    component: BuilderPage
                });
                modal.onDidDismiss().then((detail) => {
                    if (detail.data.data !== undefined) {
                        this.NewService.get('construtor').setValue(detail.data.data.idbuilder);
                        this.NewService.get('name_construtor').setValue(detail.data.data.name_builder);
                        this.step.sectionName = 'expanded5';
                    }
                });
                yield modal.present();
            }
        });
    }
    ModalCetificate() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.NewService.value.idodi == null) {
                this.presentToast('Guarde Primero');
                return;
            }
            const modal = yield this.modalController.create({
                component: CertificatePage,
                componentProps: {
                    'number_service': this.NewService.value.idodi,
                    'type_network': this.NewService.value.type_network_idtype_network,
                    'data': this.NewService.value,
                }
            });
            modal.onDidDismiss().then((detail) => {
            });
            yield modal.present();
        });
    }
    edit_builder() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: BuilderPage
            });
            modal.onDidDismiss().then((detail) => {
                if (detail.data.data !== undefined) {
                    this.NewService.get('construtor').setValue(detail.data.data.idbuilder);
                    this.NewService.get('name_construtor').setValue(detail.data.data.name_builder);
                    this.step.sectionName = 'expanded5';
                }
            });
            yield modal.present();
        });
    }
    getNameValid(sectionName) {
        return this.step.sectionName === sectionName;
    }
    setStep(sectionName) {
        this.step.sectionName = sectionName !== this.step.sectionName ? sectionName : null;
    }
    getIconName(sectionName) {
        return this.getNameValid(sectionName) ? 'arrow-down' : 'arrow-forward';
    }
    back() {
        this.router.navigateByUrl('menu/menu/asignadas');
    }
    coords() {
        this.geolocation.getCurrentPosition().then((resp) => {
            // resp.coords.latitude
            // resp.coords.longitude
            this.addrees_ini = resp.coords.latitude + "," + resp.coords.longitude;
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    send_address() {
        let options = {
            start: this.addrees_ini,
            app: this.launchNavigator.APP.GOOGLE_MAPS
        };
        this.launchNavigator.navigate(this.Service.address, options)
            .then(success => console.log('Launched navigator'), error => console.log('Error launching navigator', error));
    }
    save() {
        this.loginServiceService.SaveService(this.NewService.value).subscribe(result => {
            if (result.response == true) {
                this.presentToast('Se Guardo el Servicio');
            }
            else {
                this.presentToast('Hay Certificados sin Aprobar');
            }
        }, error => {
        });
    }
    DeleteMaterial() {
        this.NewService.get('name_material').setValue('');
        this.NewService.get('material').setValue(null);
    }
    DeleteConstructor() {
        this.NewService.get('name_construtor').setValue('');
        this.NewService.get('construtor').setValue(null);
    }
    type_red() {
        const params = {
            type: this.NewService.value.type_service_idtype_service
        };
        this.loginServiceService.type_red(params).subscribe(result => {
            this.networks = result.response;
        }, error => {
        });
    }
};
AcordeonPage = tslib_1.__decorate([
    Component({
        selector: 'app-acordeon',
        templateUrl: './acordeon.page.html',
        styleUrls: ['./acordeon.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
        Router,
        LaunchNavigator,
        Geolocation,
        LoginServiceService,
        ModalController,
        ToastController,
        LoadingController])
], AcordeonPage);
export { AcordeonPage };
//# sourceMappingURL=acordeon.page.js.map