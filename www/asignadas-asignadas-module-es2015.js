(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asignadas-asignadas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/asignadas/asignadas.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/asignadas/asignadas.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <ion-title text-center class=\"center\">Servicios</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"cloud-upload\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n</ion-content>\n<ion-content>\n\n\n  <ion-item lines=\"none\" *ngFor=\"let car of cars\" (click)=\"servicio(car)\">\n    <ion-icon class=\"big1\" src=\"assets/iconos/148965.svg\" item-end></ion-icon>\n    <ion-label text-wrap>\n      <ion-text color=\"primary\">\n        <h3>{{ car.idodi}}</h3>\n      </ion-text>\n      <p class=\"title\">{{ car.address}}</p>\n      <ion-text>\n\n        <p class=\"prog\">Prog: {{car.date_programming }} {{ car.identifacation}}</p>\n      </ion-text>\n    </ion-label>\n    <ion-icon class=\"big\" src=\"assets/iconos/148882.svg\" item-end></ion-icon>\n  </ion-item>\n</ion-content>"

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

module.exports = ".cards {\n  box-shadow: none !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  padding: 0;\n}\n\n.title {\n  font-size: 1em !important;\n  color: #7f7d7d !important;\n}\n\n.subtitle {\n  font-size: 0.9em !important;\n}\n\n.id {\n  font-size: 1em !important;\n  color: #7fab54;\n}\n\n.prog {\n  font-size: 0.8em !important;\n  color: #7f7d7d !important;\n}\n\nion-icon.big {\n  width: 32px;\n  height: 32px;\n}\n\nion-icon.big1 {\n  width: 38px;\n  height: 38px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvYXBwLW1scy9zcmMvYXBwL2FzaWduYWRhcy9hc2lnbmFkYXMucGFnZS5zY3NzIiwic3JjL2FwcC9hc2lnbmFkYXMvYXNpZ25hZGFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0osb0RBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtBQ0NBOztBRENBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtBQ0VKOztBREFBO0VBQ0ksMkJBQUE7QUNHSjs7QURBQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQ0dKOztBRENBO0VBQ0ksMkJBQUE7RUFDQSx5QkFBQTtBQ0VKOztBRENJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNFTjs7QURBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL2FzaWduYWRhcy9hc2lnbmFkYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRze1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbmZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmIWltcG9ydGFudDtcbm1hcmdpbi10b3A6IDAhaW1wb3J0YW50O1xubWFyZ2luLWJvdHRvbTogMCFpbXBvcnRhbnQ7XG5wYWRkaW5nOiAwO1xufVxuLnRpdGxle1xuICAgIGZvbnQtc2l6ZTogMWVtICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM3ZjdkN2QgIWltcG9ydGFudDtcbn1cbi5zdWJ0aXRsZXtcbiAgICBmb250LXNpemU6IC45ZW0gIWltcG9ydGFudDtcblxufVxuLmlke1xuICAgIGZvbnQtc2l6ZTogMWVtICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM3ZmFiNTQ7XG5cbn1cblxuLnByb2d7XG4gICAgZm9udC1zaXplOiAuOGVtICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM3ZjdkN2QgIWltcG9ydGFudDtcbn1cbmlvbi1pY29uIHtcbiAgICAmLmJpZyB7XG4gICAgICB3aWR0aDogMzJweDtcbiAgICAgIGhlaWdodDogMzJweDtcbiAgICB9XG4gICAgJi5iaWcxIHtcbiAgICAgICAgd2lkdGg6IDM4cHg7XG4gICAgICAgIGhlaWdodDogMzhweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgfVxufSIsIi5jYXJkcyB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMWVtICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjN2Y3ZDdkICFpbXBvcnRhbnQ7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbn1cblxuLmlkIHtcbiAgZm9udC1zaXplOiAxZW0gIWltcG9ydGFudDtcbiAgY29sb3I6ICM3ZmFiNTQ7XG59XG5cbi5wcm9nIHtcbiAgZm9udC1zaXplOiAwLjhlbSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzdmN2Q3ZCAhaW1wb3J0YW50O1xufVxuXG5pb24taWNvbi5iaWcge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuaW9uLWljb24uYmlnMSB7XG4gIHdpZHRoOiAzOHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn0iXX0= */"

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
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
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