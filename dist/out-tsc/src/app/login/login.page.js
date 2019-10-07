import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoginServiceService } from "../Services/login-service.service";
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FCM } from '@ionic-native/fcm/ngx';
let LoginPage = class LoginPage {
    constructor(LoginServiceService, toastController, router, fcm) {
        this.LoginServiceService = LoginServiceService;
        this.toastController = toastController;
        this.router = router;
        this.fcm = fcm;
    }
    ngOnInit() {
    }
    ionViewCanEnter() {
        if (!localStorage.getItem("idusers")) {
        }
        else {
            this.router.navigateByUrl('/menu');
        }
    }
    presentToast(mesajje) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: mesajje,
                duration: 2000
            });
            toast.present();
        });
    }
    LoginUser() {
        if (this.user == undefined || this.pass == undefined) {
            this.presentToast('Campos Vacios');
            return;
        }
        if (this.user == '' || this.pass == '') {
            this.presentToast('Campos Vacios');
            return;
        }
        this.LoginServiceService.login({ user: this.user, pass: this.pass }).subscribe(result => {
            if (result.response == false) {
                this.presentToast('Usuario o Contraseña Invalido');
                return;
            }
            if (result.response == true) {
                localStorage.setItem("idusers", result.data.idusers);
                localStorage.setItem("nombres", result.data.name + " " + result.data.last_name);
                localStorage.setItem("email", result.data.email);
                localStorage.setItem("id", result.data.id);
                localStorage.setItem("type", result.data.type);
                localStorage.setItem("idemployees", result.idemployees);
                this.router.navigateByUrl('/menu');
                this.iduser = localStorage.getItem("idusers");
                this.fcm.getToken().then((token) => this.LoginServiceService.registerToken({ token: token, iduser: this.iduser }).subscribe(result => {
                }, error => {
                })).catch(error => {
                    console.log('error');
                });
            }
        }, error => {
        });
    }
};
LoginPage = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.page.html',
        styleUrls: ['./login.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [LoginServiceService, ToastController, Router,
        FCM])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.page.js.map