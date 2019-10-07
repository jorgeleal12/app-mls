import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginServiceService } from '../Services/login-service.service';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { CityPage } from '../city/city.page';
let NewAcountPage = class NewAcountPage {
    constructor(loginServiceService, toastController, modalController, navParams) {
        this.loginServiceService = loginServiceService;
        this.toastController = toastController;
        this.modalController = modalController;
        this.navParams = navParams;
        this.imgUser = '../assets/iconos/1986736.svg';
        this.hidden = true;
        this.hidden1 = true;
        this.NewAcount = new FormGroup({
            idclient_account: new FormControl(''),
            city: new FormControl(),
            address: new FormControl('', [Validators.required]),
            indications: new FormControl(),
            state: new FormControl(),
            idstate: new FormControl('', [Validators.required]),
            client_idclient: new FormControl(),
            number_acount: new FormControl('', [Validators.required]),
            name_city: new FormControl('', [Validators.required]),
        });
        const data = navParams.get('data');
        this.idclient = navParams.get('idclient');
        if (data != null) {
            this.NewAcount.get('idclient_account').setValue(data.idclient_account);
            this.NewAcount.get('city').setValue(data.city);
            this.NewAcount.get('name_city').setValue(data.name_city);
            this.NewAcount.get('address').setValue(data.address);
            this.NewAcount.get('indications').setValue(data.indications);
            this.NewAcount.get('idstate').setValue(data.idstate);
            this.NewAcount.get('client_idclient').setValue(data.client_idclient);
            this.NewAcount.get('number_acount').setValue(data.number_acount);
            this.NewAcount.get('state').setValue(data.state);
            this.hidden1 = false;
        }
        else {
            this.hidden = false;
        }
    }
    ngOnInit() {
    }
    save() {
        const params = {
            idclient_account: this.NewAcount.value.idclient_account,
            city: this.NewAcount.value.city,
            address: this.NewAcount.value.address,
            indications: this.NewAcount.value.indications,
            state: this.NewAcount.value.idstate,
            client_idclient: this.idclient,
            number_acount: this.NewAcount.value.number_acount,
        };
        this.loginServiceService.CreateAcount(params).subscribe(result => {
            if (result.response == true) {
                this.presentToast('Se creo la Cuenta');
                this.NewAcount.get('idclient_account').setValue(result.idaccount);
                this.hidden = true;
                this.hidden1 = false;
            }
            if (result.response == false) {
                this.presentToast('Se Actualizo la Cuenta');
                this.hidden = true;
                this.hidden1 = false;
            }
        }, error => {
        });
    }
    back() {
        this.modalController.dismiss({
            'dismissed': false,
        });
    }
    SearchCity() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: CityPage,
                componentProps: {}
            });
            modal.onDidDismiss().then((detail) => {
                this.NewAcount.get('name_city').setValue(detail.data.data.name_municipality);
                this.NewAcount.get('city').setValue(detail.data.data.idmunicipality);
            });
            yield modal.present();
        });
    }
    edit() {
        this.hidden = false;
        this.hidden1 = true;
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
};
NewAcountPage = tslib_1.__decorate([
    Component({
        selector: 'app-new-acount',
        templateUrl: './new-acount.page.html',
        styleUrls: ['./new-acount.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [LoginServiceService,
        ToastController,
        ModalController,
        NavParams])
], NewAcountPage);
export { NewAcountPage };
//# sourceMappingURL=new-acount.page.js.map