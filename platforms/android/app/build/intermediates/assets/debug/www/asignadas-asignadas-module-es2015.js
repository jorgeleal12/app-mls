(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asignadas-asignadas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/asignadas/asignadas.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/asignadas/asignadas.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <ion-title text-center class=\"center\">Servicios</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"cloud-upload\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor=\"let car of cars\" (click)=\"servicio(car)\">\n    <ion-card-header>\n      <ion-card-subtitle>Cliente: {{ car.client}}</ion-card-subtitle>\n      <ion-card-subtitle>Dirección: {{ car.address}}</ion-card-subtitle>\n      <ion-card-subtitle>Dirección: {{ car.phone_contact}}</ion-card-subtitle>\n    </ion-card-header>\n\n    <ion-card-content>\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/Services/login-service.service.ts":
/*!***************************************************!*\
  !*** ./src/app/Services/login-service.service.ts ***!
  \***************************************************/
/*! exports provided: LoginServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginServiceService", function() { return LoginServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let LoginServiceService = class LoginServiceService {
    constructor(http) {
        this.http = http;
        this.api_url = 'http://192.168.1.126/laravel-mls/public/api/';
    }
    save_image(params) {
        return this.http.post(`${this.api_url}movil/image`, params);
    }
    login(params) {
        return this.http.post(`${this.api_url}movil/login`, params);
    }
    totalasignadas(params) {
        return this.http.post(`${this.api_url}movil/totalasignadas`, params);
    }
    seach_asignadas(params) {
        return this.http.post(`${this.api_url}movil/seach_asignadas`, params);
    }
    photos_service(params) {
        return this.http.post(`${this.api_url}movil/photos_service`, params);
    }
};
LoginServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LoginServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LoginServiceService);



/***/ }),

/***/ "./src/app/asignadas/asignadas.module.ts":
/*!***********************************************!*\
  !*** ./src/app/asignadas/asignadas.module.ts ***!
  \***********************************************/
/*! exports provided: AsignadasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignadasPageModule", function() { return AsignadasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _asignadas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asignadas.page */ "./src/app/asignadas/asignadas.page.ts");







const routes = [
    {
        path: '',
        component: _asignadas_page__WEBPACK_IMPORTED_MODULE_6__["AsignadasPage"]
    }
];
let AsignadasPageModule = class AsignadasPageModule {
};
AsignadasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_asignadas_page__WEBPACK_IMPORTED_MODULE_6__["AsignadasPage"]]
    })
], AsignadasPageModule);



/***/ }),

/***/ "./src/app/asignadas/asignadas.page.scss":
/*!***********************************************!*\
  !*** ./src/app/asignadas/asignadas.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FzaWduYWRhcy9hc2lnbmFkYXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/asignadas/asignadas.page.ts":
/*!*********************************************!*\
  !*** ./src/app/asignadas/asignadas.page.ts ***!
  \*********************************************/
/*! exports provided: AsignadasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignadasPage", function() { return AsignadasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Services_login_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/login-service.service */ "./src/app/Services/login-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AsignadasPage = class AsignadasPage {
    constructor(LoginServiceService, router) {
        this.LoginServiceService = LoginServiceService;
        this.router = router;
    }
    ngOnInit() {
        this.search_asignadas();
    }
    search_asignadas() {
        let params = { user: localStorage.getItem("id") };
        this.LoginServiceService.seach_asignadas(params).subscribe(result => {
            this.cars = result.data;
        }, error => {
        });
    }
    servicio(car) {
        this.router.navigate(['menu/menu/servicio'], car);
    }
};
AsignadasPage.ctorParameters = () => [
    { type: _Services_login_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AsignadasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-asignadas',
        template: __webpack_require__(/*! raw-loader!./asignadas.page.html */ "./node_modules/raw-loader/index.js!./src/app/asignadas/asignadas.page.html"),
        styles: [__webpack_require__(/*! ./asignadas.page.scss */ "./src/app/asignadas/asignadas.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_login_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AsignadasPage);



/***/ })

}]);
//# sourceMappingURL=asignadas-asignadas-module-es2015.js.map