(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["acordeon-acordeon-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/acordeon/acordeon.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/acordeon/acordeon.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"success\">\n        <ion-buttons slot=\"start\">\n            <ion-icon slot=\"icon-only\" name=\"arrow-back\" (click)=\"back()\"></ion-icon>\n        </ion-buttons>\n        <ion-title text-center class=\"center\">Servicio</ion-title>\n\n        <ion-buttons slot=\"end\">\n            <ion-button>\n                <ion-icon slot=\"icon-only\" name=\"save\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list class=\"accordion-list\" no-padding>\n        <section class=\"acc-section\" (click)=\"setStep('expanded1')\">\n            <div class=\"img\">\n                <img src=\"../../assets/img/pngocean.com-id-wflsf.png\" alt=\"\">\n            </div>\n            <div class=\"info\">\n                <p class=\"title\">Servicio</p>\n                <p class=\"subtitle\">Información general de la orden</p>\n            </div>\n            <div class=\"icon\">\n                <ion-icon name=\"{{getIconName('expanded1')}}\" color=\"medium\"></ion-icon>\n            </div>\n\n        </section>\n\n        <section class=\"acc-content\" [ngClass]=\"{'expandable':getNameValid('expanded1')}\">\n            <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Servicio Número\" value=\"TMP-2008201991600\" readonly>\n            </mat-form-field>\n\n\n            <ion-item>\n                <ion-label class=\"example-full-width\">Prioridad</ion-label>\n                <ion-select [(ngModel)]=\"priority\">\n                    <ion-select-option [value]=1>Alta</ion-select-option>\n                    <ion-select-option [value]=2>Media</ion-select-option>\n                    <ion-select-option [value]=3>Baja</ion-select-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label class=\"example-full-width\">Sede</ion-label>\n                <ion-select>\n                    <ion-select-option value=\"1\">Alta</ion-select-option>\n                    <ion-select-option value=\"2\">Media</ion-select-option>\n                    <ion-select-option value=\"3\">Baja</ion-select-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label class=\"example-full-width\">Programación</ion-label>\n                <ion-datetime displayFormat=\"YYYY-MM-DD\" [(ngModel)]=\"programming\"></ion-datetime>\n            </ion-item>\n\n            <ion-item>\n                <ion-label class=\"example-full-width\">Franja de Atención</ion-label>\n                <ion-select [(ngModel)]=\"Attention\">\n                    <ion-select-option [value]=1>Manaña</ion-select-option>\n                    <ion-select-option [value]=2>Tarde</ion-select-option>\n\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label class=\"example-full-width\">Tipos de Gas</ion-label>\n                <ion-select>\n                    <ion-select-option value=\"1\">Natural</ion-select-option>\n                    <ion-select-option value=\"2\">GLP</ion-select-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label class=\"example-full-width\">Tipos de Servicio</ion-label>\n                <ion-select [(ngModel)]=\"type_service\">\n                    <ion-select-option [value]=1>Residencial</ion-select-option>\n                    <ion-select-option [value]=2>Comercial</ion-select-option>\n                    <ion-select-option [value]=3>Industrial</ion-select-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label class=\"example-full-width\">Tipo de Red</ion-label>\n                <ion-select [(ngModel)]=\"type_network\">\n                    <ion-select-option [value]=1>Nueva</ion-select-option>\n                    <ion-select-option [value]=2>Existente</ion-select-option>\n                    <ion-select-option [value]=3>Puesta en Servicio</ion-select-option>\n                    <ion-select-option [value]=4>Linea Matrix Existente</ion-select-option>\n                    <ion-select-option [value]=5>Linea Matrix Nueva</ion-select-option>\n                    <ion-select-option [value]=6>Reforma</ion-select-option>\n                    <ion-select-option [value]=7>No Usuario</ion-select-option>\n                </ion-select>\n            </ion-item>\n\n\n        </section>\n\n        <section class=\"acc-section\" (click)=\"setStep('expanded2')\">\n            <div class=\"img\">\n                <img src=\"../../assets/img/twotone_add_location_black_48dp.png\" alt=\"\">\n            </div>\n            <div class=\"info\">\n                <p class=\"title\">Ubicación</p>\n                <p class=\"subtitle\">Información general de la Ubicación</p>\n\n            </div>\n            <div class=\"icon\">\n                <ion-icon name=\"{{getIconName('expanded2')}}\" color=\"medium\"></ion-icon>\n            </div>\n\n        </section>\n        <section class=\"acc-content\" [ngClass]=\"{'expandable':getNameValid('expanded2')}\">\n            <mat-form-field class=\"example-full-width\">\n                <span matPrefix>Dirección &nbsp;</span>\n                <input type=\"text\" matInput [(ngModel)]=\"address\">\n                <mat-icon matSuffix (click)=\"send_address()\">add_location</mat-icon>\n            </mat-form-field>\n\n        </section>\n        <section class=\"acc-section\" (click)=\"setStep('expanded3')\">\n            <div class=\"img\">\n                <img src=\"../../assets/img/twotone_person_black_48dp.png\" alt=\"\">\n            </div>\n            <div class=\"info\">\n                <p class=\"title\">Cliente</p>\n                <p class=\"subtitle\">Información del Cliente</p>\n\n            </div>\n            <div class=\"icon\">\n                <ion-icon name=\"{{getIconName('expanded3')}}\" color=\"medium\"></ion-icon>\n            </div>\n\n        </section>\n        <section class=\"acc-content\" [ngClass]=\"{'expandable':getNameValid('expanded3')}\">\n            otro formulario\n        </section>\n\n        <section class=\"acc-section\" (click)=\"setStep('expanded4')\">\n            <div class=\"img\">\n                <img src=\"../../assets/img/twotone_build_black_48dp.png\" alt=\"\">\n            </div>\n            <div class=\"info\">\n                <p class=\"title\">Material</p>\n                <p class=\"subtitle\">Información del Material</p>\n\n            </div>\n            <div class=\"icon\">\n                <ion-icon name=\"{{getIconName('expanded4')}}\" color=\"medium\"></ion-icon>\n            </div>\n\n        </section>\n        <section class=\"acc-content\" [ngClass]=\"{'expandable':getNameValid('expanded4')}\">\n            otro formulario\n        </section>\n\n        <section class=\"acc-section\" (click)=\"setStep('expanded5')\">\n            <div class=\"img\">\n                <img src=\"../../assets/img/1043ea6260755f02bafd6d2fa98072ec-icono-de-casco-de-construccion.png\" alt=\"\">\n            </div>\n            <div class=\"info\">\n                <p class=\"title\">Constructor</p>\n                <p class=\"subtitle\">Información del Constructor</p>\n\n            </div>\n            <div class=\"icon\">\n                <ion-icon name=\"{{getIconName('expanded5')}}\" color=\"medium\"></ion-icon>\n            </div>\n\n        </section>\n        <section class=\"acc-content\" [ngClass]=\"{'expandable':getNameValid('expanded5')}\">\n            otro formulario\n        </section>\n\n\n        <section class=\"acc-section\" (click)=\"setStep('expanded6')\">\n            <div class=\"img\">\n                <img src=\"../../assets/img/twotone_insert_photo_black_48dp.png\" alt=\"\">\n            </div>\n            <div class=\"info\">\n                <p class=\"title\">Fotografias</p>\n                <p class=\"subtitle\">Fotografias del servicio</p>\n\n            </div>\n            <div class=\"icon\">\n                <ion-icon name=\"{{getIconName('expanded6')}}\" color=\"medium\" (click)=\"photo_service()\"></ion-icon>\n            </div>\n\n        </section>\n        <section class=\"acc-content\" [ngClass]=\"{'expandable':getNameValid('expanded6')}\">\n            <ion-item detail *ngFor=\"let photos_service of photos_services; let i = i; index\"\n                (click)=\"photos_add(photos_service)\">\n                <ion-label>\n                    {{photos_service.name_photo}}\n                </ion-label>\n            </ion-item>\n        </section>\n\n\n\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/acordeon/acordeon.module.ts":
/*!*********************************************!*\
  !*** ./src/app/acordeon/acordeon.module.ts ***!
  \*********************************************/
/*! exports provided: AcordeonPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcordeonPageModule", function() { return AcordeonPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-material.module */ "./src/app/app-material.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _acordeon_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./acordeon.page */ "./src/app/acordeon/acordeon.page.ts");








var routes = [
    {
        path: '',
        component: _acordeon_page__WEBPACK_IMPORTED_MODULE_7__["AcordeonPage"]
    }
];
var AcordeonPageModule = /** @class */ (function () {
    function AcordeonPageModule() {
    }
    AcordeonPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_5__["AppMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_acordeon_page__WEBPACK_IMPORTED_MODULE_7__["AcordeonPage"]]
        })
    ], AcordeonPageModule);
    return AcordeonPageModule;
}());



/***/ }),

/***/ "./src/app/acordeon/acordeon.page.scss":
/*!*********************************************!*\
  !*** ./src/app/acordeon/acordeon.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".acc-section {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  border-top: thin solid #c1c1c1;\n  background: #eaeaea;\n  padding: 0.7em;\n}\n.acc-section:first-child {\n  border-top: none;\n}\n.acc-section:last-child {\n  border-bottom: thin solid #e5e5e5;\n}\n.acc-section .img {\n  width: 35px;\n  margin-right: 0.5em;\n}\n.acc-section .img img {\n  width: 100%;\n}\n.acc-section .info {\n  width: calc(100% - 60px);\n}\n.acc-section .info > * {\n  margin: 0;\n}\n.acc-section .info .title {\n  font-size: 1em;\n  color: #323133;\n}\n.acc-section .info .subtitle {\n  font-size: 0.9em;\n  color: #8a888a;\n}\n.acc-section .info .text {\n  font-size: 0.8em;\n  color: #f3b236;\n}\n.acc-section .icon {\n  width: 20px;\n}\n.acc-content {\n  height: 0;\n  overflow: hidden;\n  padding: 0 0.5em;\n  -webkit-transition: all 0.6s;\n  transition: all 0.6s;\n}\n.acc-content.expandable {\n  height: auto;\n  padding-top: 0.5em;\n  padding-bottom: 0.5em;\n  -webkit-transition: all 0.6s;\n  transition: all 0.6s;\n}\n@-webkit-keyframes delay-overflow {\n  from {\n    overflow: auto;\n  }\n}\n@keyframes delay-overflow {\n  from {\n    overflow: auto;\n  }\n}\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.example-full-width {\n  width: 100%;\n  font-size: 15px;\n  color: #8a888a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvYXBwLW1scy9zcmMvYXBwL2Fjb3JkZW9uL2Fjb3JkZW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWNvcmRlb24vYWNvcmRlb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQ0Y7QURDRTtFQUNFLGdCQUFBO0FDQ0o7QURFRTtFQUNFLGlDQUFBO0FDQUo7QURHRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQ0RKO0FER0k7RUFDRSxXQUFBO0FDRE47QURLRTtFQUNFLHdCQUFBO0FDSEo7QURLSTtFQUNFLFNBQUE7QUNITjtBRE1JO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUNKTjtBRE9JO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDTE47QURRSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ05OO0FEVUU7RUFDRSxXQUFBO0FDUko7QURZQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtBQ1RGO0FEV0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7QUNUSjtBRGFBO0VBQ0U7SUFDRSxjQUFBO0VDVkY7QUFDRjtBRE9BO0VBQ0U7SUFDRSxjQUFBO0VDVkY7QUFDRjtBRFlBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNWRjtBRGFBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDVkYiLCJmaWxlIjoic3JjL2FwcC9hY29yZGVvbi9hY29yZGVvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNjLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItdG9wOiB0aGluIHNvbGlkICNjMWMxYzE7XG4gIGJhY2tncm91bmQ6ICNlYWVhZWE7XG4gIHBhZGRpbmc6IC43ZW07XG5cbiAgJjpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgfVxuXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCAjZTVlNWU1O1xuICB9XG5cbiAgJiAuaW1nIHtcbiAgICB3aWR0aDogMzVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC41ZW07XG5cbiAgICAmIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuICAmIC5pbmZvIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XG5cbiAgICAmID4gKiB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgJiAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICBjb2xvcjogIzMyMzEzMztcbiAgICB9XG5cbiAgICAmIC5zdWJ0aXRsZSB7XG4gICAgICBmb250LXNpemU6IC45ZW07XG4gICAgICBjb2xvcjogIzhhODg4YTtcbiAgICB9XG5cbiAgICAmIC50ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICAgIGNvbG9yOiAjZjNiMjM2O1xuICAgIH1cbiAgfVxuXG4gICYgLmljb24ge1xuICAgIHdpZHRoOiAyMHB4O1xuICB9XG59XG5cbi5hY2MtY29udGVudCB7XG4gIGhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMCAuNWVtO1xuICB0cmFuc2l0aW9uOiBhbGwgLjZzO1xuXG4gICYuZXhwYW5kYWJsZSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiAuNWVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAuNWVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAuNnM7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBkZWxheS1vdmVyZmxvdyB7XG4gIGZyb20ge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG59XG4uZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzhhODg4YTtcbiAgLy9tYXJnaW4tYm90dG9tOiAtMTBweCAhaW1wb3J0YW50O1xufSIsIi5hY2Mtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci10b3A6IHRoaW4gc29saWQgI2MxYzFjMTtcbiAgYmFja2dyb3VuZDogI2VhZWFlYTtcbiAgcGFkZGluZzogMC43ZW07XG59XG4uYWNjLXNlY3Rpb246Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wOiBub25lO1xufVxuLmFjYy1zZWN0aW9uOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICNlNWU1ZTU7XG59XG4uYWNjLXNlY3Rpb24gLmltZyB7XG4gIHdpZHRoOiAzNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xufVxuLmFjYy1zZWN0aW9uIC5pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYWNjLXNlY3Rpb24gLmluZm8ge1xuICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XG59XG4uYWNjLXNlY3Rpb24gLmluZm8gPiAqIHtcbiAgbWFyZ2luOiAwO1xufVxuLmFjYy1zZWN0aW9uIC5pbmZvIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjb2xvcjogIzMyMzEzMztcbn1cbi5hY2Mtc2VjdGlvbiAuaW5mbyAuc3VidGl0bGUge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogIzhhODg4YTtcbn1cbi5hY2Mtc2VjdGlvbiAuaW5mbyAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjZjNiMjM2O1xufVxuLmFjYy1zZWN0aW9uIC5pY29uIHtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi5hY2MtY29udGVudCB7XG4gIGhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMCAwLjVlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XG59XG4uYWNjLWNvbnRlbnQuZXhwYW5kYWJsZSB7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZy10b3A6IDAuNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjZzO1xufVxuXG5Aa2V5ZnJhbWVzIGRlbGF5LW92ZXJmbG93IHtcbiAgZnJvbSB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbn1cbi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjOGE4ODhhO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/acordeon/acordeon.page.ts":
/*!*******************************************!*\
  !*** ./src/app/acordeon/acordeon.page.ts ***!
  \*******************************************/
/*! exports provided: AcordeonPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcordeonPage", function() { return AcordeonPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/launch-navigator/ngx */ "./node_modules/@ionic-native/launch-navigator/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _Services_login_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/login-service.service */ "./src/app/Services/login-service.service.ts");






var AcordeonPage = /** @class */ (function () {
    function AcordeonPage(route, router, launchNavigator, geolocation, loginServiceService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.launchNavigator = launchNavigator;
        this.geolocation = geolocation;
        this.loginServiceService = loginServiceService;
        this.step = { sectionName: null };
        this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.data = _this.router.getCurrentNavigation().extras;
                _this.priority = _this.data.Attention;
                //     this.sede = this.data.
                _this.programming = _this.data.date_programming;
                _this.Attention = _this.data.Attention;
                //                 this.gas_type = this.data.
                _this.type_service = _this.data.type;
                _this.type_network = _this.data.type_network;
                _this.address = _this.data.address;
            }
        });
        this.coords();
        //this.photo_service();
    }
    AcordeonPage.prototype.ngOnInit = function () {
    };
    AcordeonPage.prototype.getNameValid = function (sectionName) {
        return this.step.sectionName === sectionName;
    };
    AcordeonPage.prototype.setStep = function (sectionName) {
        this.step.sectionName = sectionName !== this.step.sectionName ? sectionName : null;
    };
    AcordeonPage.prototype.getIconName = function (sectionName) {
        return this.getNameValid(sectionName) ? 'arrow-down' : 'arrow-forward';
    };
    AcordeonPage.prototype.back = function () {
        this.router.navigateByUrl('menu/menu/asignadas');
    };
    AcordeonPage.prototype.coords = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            // resp.coords.latitude
            // resp.coords.longitude
            _this.addrees_ini = resp.coords.latitude + "," + resp.coords.longitude;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    AcordeonPage.prototype.send_address = function () {
        var options = {
            start: this.addrees_ini,
            app: this.launchNavigator.APP.GOOGLE_MAPS
        };
        this.launchNavigator.navigate(this.address, options)
            .then(function (success) { return console.log('Launched navigator'); }, function (error) { return console.log('Error launching navigator', error); });
    };
    AcordeonPage.prototype.photo_service = function () {
        var _this = this;
        var params = {
            type_network: this.type_network
        };
        this.loginServiceService.photos_service(params).subscribe(function (result) {
            _this.photos_services = result.response;
        }, function (error) {
        });
    };
    AcordeonPage.prototype.photos_add = function (photos_service) {
        this.router.navigate(['menu/menu/fotografias'], photos_service);
    };
    AcordeonPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_3__["LaunchNavigator"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
        { type: _Services_login_service_service__WEBPACK_IMPORTED_MODULE_5__["LoginServiceService"] }
    ]; };
    AcordeonPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-acordeon',
            template: __webpack_require__(/*! raw-loader!./acordeon.page.html */ "./node_modules/raw-loader/index.js!./src/app/acordeon/acordeon.page.html"),
            styles: [__webpack_require__(/*! ./acordeon.page.scss */ "./src/app/acordeon/acordeon.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_3__["LaunchNavigator"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"], _Services_login_service_service__WEBPACK_IMPORTED_MODULE_5__["LoginServiceService"]])
    ], AcordeonPage);
    return AcordeonPage;
}());



/***/ })

}]);
//# sourceMappingURL=acordeon-acordeon-module-es5.js.map