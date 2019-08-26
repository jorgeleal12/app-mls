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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LoginServiceService = /** @class */ (function () {
    function LoginServiceService(http) {
        this.http = http;
        this.api_url = 'http://192.168.1.57/laravel-mls/public/api/';
    }
    LoginServiceService.prototype.save_image = function (params) {
        return this.http.post(this.api_url + "movil/image", params);
    };
    LoginServiceService.prototype.login = function (params) {
        return this.http.post(this.api_url + "movil/login", params);
    };
    LoginServiceService.prototype.totalasignadas = function (params) {
        return this.http.post(this.api_url + "movil/totalasignadas", params);
    };
    LoginServiceService.prototype.seach_asignadas = function (params) {
        return this.http.post(this.api_url + "movil/seach_asignadas", params);
    };
    LoginServiceService.prototype.photos_service = function (params) {
        return this.http.post(this.api_url + "movil/photos_service", params);
    };
    LoginServiceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    LoginServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginServiceService);
    return LoginServiceService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _asignadas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asignadas.page */ "./src/app/asignadas/asignadas.page.ts");







var routes = [
    {
        path: '',
        component: _asignadas_page__WEBPACK_IMPORTED_MODULE_6__["AsignadasPage"]
    }
];
var AsignadasPageModule = /** @class */ (function () {
    function AsignadasPageModule() {
    }
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
    return AsignadasPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_login_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/login-service.service */ "./src/app/Services/login-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AsignadasPage = /** @class */ (function () {
    function AsignadasPage(LoginServiceService, router) {
        this.LoginServiceService = LoginServiceService;
        this.router = router;
    }
    AsignadasPage.prototype.ngOnInit = function () {
        this.search_asignadas();
    };
    AsignadasPage.prototype.search_asignadas = function () {
        var _this = this;
        var params = { user: localStorage.getItem("id") };
        this.LoginServiceService.seach_asignadas(params).subscribe(function (result) {
            _this.cars = result.data;
        }, function (error) {
        });
    };
    AsignadasPage.prototype.servicio = function (car) {
        this.router.navigate(['menu/menu/servicio'], car);
    };
    AsignadasPage.ctorParameters = function () { return [
        { type: _Services_login_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AsignadasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-asignadas',
            template: __webpack_require__(/*! raw-loader!./asignadas.page.html */ "./node_modules/raw-loader/index.js!./src/app/asignadas/asignadas.page.html"),
            styles: [__webpack_require__(/*! ./asignadas.page.scss */ "./src/app/asignadas/asignadas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_login_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AsignadasPage);
    return AsignadasPage;
}());



/***/ })

}]);
//# sourceMappingURL=asignadas-asignadas-module-es5.js.map