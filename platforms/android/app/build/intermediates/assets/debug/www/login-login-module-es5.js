(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n    <section class=\"container-login\">\n        <div class=\"login\">\n            <img src=\"assets/img/Mg9Em2PYSwuOycb8bh2U_Logo-c4e88dff0b96286ff7c6a17226fd34006f9b99864f25249cdfc05d931ec5886e.png\"\n                alt=\"\" class=\"login-img\">\n            <form class=\"login-form\">\n                <ion-item class=\"login-input\">\n                    <ion-label position=\"floating\" class=\"login-item\">\n                        <ion-icon name=\"person\" color=\"medium\" size=\"small\" class=\"aside-icon\"></ion-icon>\n                        Identificación\n                    </ion-label>\n                    <ion-input ngModel type=\"text\" name=\"user\" [(ngModel)]=\"user\"></ion-input>\n                </ion-item>\n\n                <ion-item style=\"margin-bottom: 2em\">\n                    <ion-label position=\"floating\" class=\"login-item\">\n                        <ion-icon name=\"unlock\" color=\"medium\" size=\"small\" class=\"aside-icon\"></ion-icon>\n                        Contraseña\n                    </ion-label>\n                    <ion-input ngModel type=\"password\" name=\"pass\" [(ngModel)]=\"pass\"></ion-input>\n                </ion-item>\n                <ion-button type=\"submit\" expand=\"full\" color=\"success\" (click)=\"LoginUser()\">INICIA SESIÓN</ion-button>\n            </form>\n        </div>\n    </section>\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-material.module */ "./src/app/app-material.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");








var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_6__["AppMaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-login {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%;\n}\n\n.login {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.login-img {\n  width: 35%;\n  margin: 2em;\n}\n\n.login-form {\n  width: 100%;\n}\n\n.login-form > * {\n  width: 100%;\n  margin-bottom: 1em;\n}\n\n.login-item {\n  display: -webkit-box;\n  display: flex;\n}\n\nion-icon.aside-icon {\n  margin-right: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvYXBwLW1scy9zcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDRUY7O0FEQ0U7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtBQ0FKOztBRENJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDQ047O0FESUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNGSjs7QURNQTtFQUNFLG1CQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWxvZ2lue1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubG9naW4ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXG4gICYtaW1nIHtcbiAgICB3aWR0aDogMzUlO1xuICAgIG1hcmdpbjogMmVtO1xuICB9XG5cbiAgJi1mb3Jte1xuICAgIHdpZHRoOiAxMDAlO1xuICAgICYgPiAqIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIH1cbiAgfVxuXG5cbiAgJi1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59XG5cbmlvbi1pY29uLmFzaWRlLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IC41ZW07XG59XG4iLCIuY29udGFpbmVyLWxvZ2luIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubG9naW4ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5sb2dpbi1pbWcge1xuICB3aWR0aDogMzUlO1xuICBtYXJnaW46IDJlbTtcbn1cbi5sb2dpbi1mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubG9naW4tZm9ybSA+ICoge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuLmxvZ2luLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5pb24taWNvbi5hc2lkZS1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_login_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/login-service.service */ "./src/app/Services/login-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginPage = /** @class */ (function () {
    function LoginPage(LoginServiceService, toastController, router) {
        this.LoginServiceService = LoginServiceService;
        this.toastController = toastController;
        this.router = router;
    }
    LoginPage.prototype.ngOnInit = function () {
        if (!localStorage.getItem("idusers")) {
        }
        else {
            this.router.navigateByUrl('/menu');
        }
    };
    LoginPage.prototype.presentToast = function (mesajje) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: mesajje,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.LoginUser = function () {
        var _this = this;
        if (this.user == undefined || this.pass == undefined) {
            this.presentToast('Campos Vacios');
            return;
        }
        if (this.user == '' || this.pass == '') {
            this.presentToast('Campos Vacios');
            return;
        }
        this.LoginServiceService.login({ user: this.user, pass: this.pass }).subscribe(function (result) {
            if (result.response == false) {
                _this.presentToast('Usuario o Contraseña Invalido');
                return;
            }
            if (result.response == true) {
                localStorage.setItem("idusers", result.data.idusers);
                localStorage.setItem("nombres", result.data.name + " " + result.data.last_name);
                localStorage.setItem("email", result.data.email);
                localStorage.setItem("id", result.data.id);
                _this.router.navigateByUrl('/menu');
            }
        }, function (error) {
        });
    };
    LoginPage.ctorParameters = function () { return [
        { type: _Services_login_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginServiceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_login_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module-es5.js.map