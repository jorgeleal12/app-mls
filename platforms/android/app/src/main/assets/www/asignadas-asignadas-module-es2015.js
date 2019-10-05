(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asignadas-asignadas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/asignadas/asignadas.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/asignadas/asignadas.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-icon slot=\"icon-only\" name=\"arrow-back\" (click)=\"back()\"></ion-icon>\n    </ion-buttons>\n\n    <ion-title text-center class=\"center\">Servicios</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"sendimage()\">\n        <ion-icon slot=\"icon-only\" name=\"cloud-upload\"></ion-icon>\n        <ion-badge color=\"danger\" id=\"cart-badge\">{{propCount}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"lines\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-item lines=\"none\" *ngFor=\"let car of cars\" (click)=\"servicio(car)\">\n    <ion-icon class=\"big1\" src=\"assets/iconos/138579.svg\" item-end></ion-icon>\n    <ion-label text-wrap>\n      <ion-text color=\"primary\">\n        <h3>{{ car.idodi}}</h3>\n      </ion-text>\n      <ion-text>\n        <p class=\"prog\">Prog: {{car.date_programming }}</p>\n        <p class=\"prog\">Estado: {{car.name_state }} </p>\n      </ion-text>\n    </ion-label>\n    <ion-icon class=\"big\" src=\"assets/iconos/148882.svg\" item-end *ngIf=\"car.state!=3\">\n    </ion-icon>\n    <ion-icon class=\"big\" src=\"assets/iconos/226972.svg\" item-end *ngIf=\"car.state==3\">\n    </ion-icon>\n  </ion-item>\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\" (click)=\"servicio()\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

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

module.exports = ".cards {\n  box-shadow: none !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  padding: 0;\n}\n\n.title {\n  font-size: 1em !important;\n  color: #7f7d7d !important;\n}\n\n.subtitle {\n  font-size: 0.9em !important;\n}\n\n.id {\n  font-size: 1em !important;\n  color: #7fab54;\n}\n\n.prog {\n  font-size: 0.8em !important;\n  color: #7f7d7d !important;\n}\n\nion-icon.big {\n  width: 32px !important;\n  height: 32px !important;\n}\n\nion-icon.big1 {\n  width: 48px !important;\n  height: 48px !important;\n  margin-right: 10px !important;\n}\n\nion-icon.big2 {\n  width: 52px !important;\n  height: 52px !important;\n  margin-right: 10px !important;\n}\n\n#cart-btn {\n  position: relative;\n}\n\n#cart-badge {\n  position: absolute;\n  top: -2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvYXBwLW1scy9zcmMvYXBwL2FzaWduYWRhcy9hc2lnbmFkYXMucGFnZS5zY3NzIiwic3JjL2FwcC9hc2lnbmFkYXMvYXNpZ25hZGFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0osb0RBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtBQ0NBOztBRENBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtBQ0VKOztBREFBO0VBQ0ksMkJBQUE7QUNHSjs7QURBQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQ0dKOztBRENBO0VBQ0ksMkJBQUE7RUFDQSx5QkFBQTtBQ0VKOztBRENJO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQ0VOOztBREFJO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FDRVI7O0FEQU07RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUNFUjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FzaWduYWRhcy9hc2lnbmFkYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRze1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbmZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmIWltcG9ydGFudDtcbm1hcmdpbi10b3A6IDAhaW1wb3J0YW50O1xubWFyZ2luLWJvdHRvbTogMCFpbXBvcnRhbnQ7XG5wYWRkaW5nOiAwO1xufVxuLnRpdGxle1xuICAgIGZvbnQtc2l6ZTogMWVtICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM3ZjdkN2QgIWltcG9ydGFudDtcbn1cbi5zdWJ0aXRsZXtcbiAgICBmb250LXNpemU6IC45ZW0gIWltcG9ydGFudDtcblxufVxuLmlke1xuICAgIGZvbnQtc2l6ZTogMWVtICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM3ZmFiNTQ7XG5cbn1cblxuLnByb2d7XG4gICAgZm9udC1zaXplOiAuOGVtICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM3ZjdkN2QgIWltcG9ydGFudDtcbn1cbmlvbi1pY29uIHtcbiAgICAmLmJpZyB7XG4gICAgICB3aWR0aDogMzJweCFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDMycHghaW1wb3J0YW50O1xuICAgIH1cbiAgICAmLmJpZzEge1xuICAgICAgICB3aWR0aDogNDhweCFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogNDhweCFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweCFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICAmLmJpZzIge1xuICAgICAgICB3aWR0aDogNTJweCFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogNTJweCFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweCFpbXBvcnRhbnQ7XG4gICAgIH1cbn1cblxuI2NhcnQtYnRuIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gICNjYXJ0LWJhZGdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMnB4O1xuICAgIFxuICB9IiwiLmNhcmRzIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxZW0gIWltcG9ydGFudDtcbiAgY29sb3I6ICM3ZjdkN2QgIWltcG9ydGFudDtcbn1cblxuLnN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xufVxuXG4uaWQge1xuICBmb250LXNpemU6IDFlbSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzdmYWI1NDtcbn1cblxuLnByb2cge1xuICBmb250LXNpemU6IDAuOGVtICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjN2Y3ZDdkICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pY29uLmJpZyB7XG4gIHdpZHRoOiAzMnB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzJweCAhaW1wb3J0YW50O1xufVxuaW9uLWljb24uYmlnMSB7XG4gIHdpZHRoOiA0OHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDhweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbn1cbmlvbi1pY29uLmJpZzIge1xuICB3aWR0aDogNTJweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDUycHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNjYXJ0LWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2NhcnQtYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTJweDtcbn0iXX0= */"

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _Services_tasks_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/tasks-service */ "./src/app/Services/tasks-service.ts");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _utilitis_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utilitis/constant */ "./src/app/utilitis/constant.ts");










let AsignadasPage = class AsignadasPage {
    constructor(LoginServiceService, router, loadingController, tasksService, transfer, file) {
        this.LoginServiceService = LoginServiceService;
        this.router = router;
        this.loadingController = loadingController;
        this.tasksService = tasksService;
        this.transfer = transfer;
        this.file = file;
        this.constant = new _utilitis_constant__WEBPACK_IMPORTED_MODULE_9__["constant"]();
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.sqli();
        this.search_asignadas();
    }
    search_asignadas() {
        this.showLoader();
        let params = {
            user: localStorage.getItem("id"),
            type: localStorage.getItem("type")
        };
        this.LoginServiceService.seach_asignadas(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
            this.loadingController.dismiss();
        })).subscribe(result => {
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
    back() {
        this.router.navigateByUrl('menu/menu/home');
    }
    showLoader() {
        this.loaderToShow = this.loadingController.create({
            message: 'Cargando',
            duration: 1000
        }).then((res) => {
            res.present();
        });
    }
    sqli() {
        this.tasksService.SelectICertificate()
            .then(tasks => {
            console.log(tasks);
            this.image = tasks;
            this.propCount = Object.keys(tasks).length;
        })
            .catch(error => {
            console.error(error);
        });
    }
    sendimage() {
        for (let data of this.image) {
            console.log(data);
            this.onLoadimage(data.name_photo, data.odi_idodi, data.idphotos, data.certifications);
        }
    }
    onLoadimage(name_photo, odi_idodi, idphotos, certifications) {
        let params = {
            idodi: odi_idodi,
            tipe: idphotos,
            idservice: certifications,
        };
        let filePath = this.file.externalRootDirectory + "MLS/";
        const fileTransfer = this.transfer.create();
        let imagen = filePath + name_photo;
        console.log(imagen);
        let options = {
            fileKey: "file",
            fileName: 'name.jpg',
            headers: {},
            params: { params: params }
        };
        fileTransfer
            .upload(imagen, this.constant.routeGlobal + "odi/send_image_movil", options)
            .then(data => {
            var json = JSON.parse(data.response);
            if (json.response == true) {
                console.log(json.response);
            }
        }, err => {
            console.log(err.body);
        });
    }
    ;
};
AsignadasPage.ctorParameters = () => [
    { type: _Services_login_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _Services_tasks_service__WEBPACK_IMPORTED_MODULE_6__["TasksService"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"] }
];
AsignadasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-asignadas',
        template: __webpack_require__(/*! raw-loader!./asignadas.page.html */ "./node_modules/raw-loader/index.js!./src/app/asignadas/asignadas.page.html"),
        styles: [__webpack_require__(/*! ./asignadas.page.scss */ "./src/app/asignadas/asignadas.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_login_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginServiceService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
        _Services_tasks_service__WEBPACK_IMPORTED_MODULE_6__["TasksService"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"]])
], AsignadasPage);



/***/ })

}]);
//# sourceMappingURL=asignadas-asignadas-module-es2015.js.map