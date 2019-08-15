(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["acordeon-acordeon-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/acordeon/acordeon.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/acordeon/acordeon.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"success\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title text-center class=\"center\">Acordeón</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list class=\"accordion-list\" no-padding>\n        <section class=\"acc-section\" (click)=\"setStep('expanded1')\">\n            <div class=\"img\">\n                <img src=\"../../assets/img/29099.png\" alt=\"\">\n            </div>\n            <div class=\"info\">\n                <p class=\"title\">title 1</p>\n                <p class=\"subtitle\">subtitle 1</p>\n                <p class=\"text\">text 1</p>\n            </div>\n            <div class=\"icon\">\n                <ion-icon name=\"{{getIconName('expanded1')}}\" color=\"medium\"></ion-icon>\n            </div>\n\n        </section>\n        <section class=\"acc-content\" [ngClass]=\"{'expandable':getNameValid('expanded1')}\">\n            aqui va formulario\n        </section>\n        <section class=\"acc-section\" (click)=\"setStep('expanded2')\">\n            <div class=\"img\">\n                <img src=\"../../assets/img/29099.png\" alt=\"\">\n            </div>\n            <div class=\"info\">\n                <p class=\"title\">title 1</p>\n                <p class=\"subtitle\">subtitle 1</p>\n                <p class=\"text\">text 1</p>\n            </div>\n            <div class=\"icon\">\n                <ion-icon name=\"{{getIconName('expanded2')}}\" color=\"medium\"></ion-icon>\n            </div>\n\n        </section>\n        <section class=\"acc-content\" [ngClass]=\"{'expandable':getNameValid('expanded2')}\">\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi perferendis sequi tempore ullam voluptatibus!\n            Consequatur deleniti dicta doloremque ea enim explicabo libero minus numquam, optio pariatur perspiciatis\n            repellat sed vel!\n        </section>\n        <section class=\"acc-section\" (click)=\"setStep('expanded3')\">\n            <div class=\"img\">\n                <img src=\"../../assets/img/29099.png\" alt=\"\">\n            </div>\n            <div class=\"info\">\n                <p class=\"title\">title 1</p>\n                <p class=\"subtitle\">subtitle 1</p>\n                <p class=\"text\">text 1</p>\n            </div>\n            <div class=\"icon\">\n                <ion-icon name=\"{{getIconName('expanded3')}}\" color=\"medium\"></ion-icon>\n            </div>\n\n        </section>\n        <section class=\"acc-content\" [ngClass]=\"{'expandable':getNameValid('expanded3')}\">\n            otro formulario\n        </section>\n\n\n    </ion-list>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _acordeon_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./acordeon.page */ "./src/app/acordeon/acordeon.page.ts");







const routes = [
    {
        path: '',
        component: _acordeon_page__WEBPACK_IMPORTED_MODULE_6__["AcordeonPage"]
    }
];
let AcordeonPageModule = class AcordeonPageModule {
};
AcordeonPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_acordeon_page__WEBPACK_IMPORTED_MODULE_6__["AcordeonPage"]]
    })
], AcordeonPageModule);



/***/ }),

/***/ "./src/app/acordeon/acordeon.page.scss":
/*!*********************************************!*\
  !*** ./src/app/acordeon/acordeon.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".acc-section {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  border-top: thin solid #e5e5e5;\n  background: #f7f5f8;\n  padding: 0.7em;\n}\n.acc-section:first-child {\n  border-top: none;\n}\n.acc-section:last-child {\n  border-bottom: thin solid #e5e5e5;\n}\n.acc-section .img {\n  width: 35px;\n  margin-right: 0.5em;\n}\n.acc-section .img img {\n  width: 100%;\n}\n.acc-section .info {\n  width: calc(100% - 60px);\n}\n.acc-section .info > * {\n  margin: 0;\n}\n.acc-section .info .title {\n  font-size: 1em;\n  color: #323133;\n}\n.acc-section .info .subtitle {\n  font-size: 0.9em;\n  color: #8a888a;\n}\n.acc-section .info .text {\n  font-size: 0.8em;\n  color: #f3b236;\n}\n.acc-section .icon {\n  width: 20px;\n}\n.acc-content {\n  height: 0;\n  overflow: hidden;\n  padding: 0 0.5em;\n  -webkit-transition: all 0.6s;\n  transition: all 0.6s;\n}\n.acc-content.expandable {\n  height: auto;\n  padding-top: 0.5em;\n  padding-bottom: 0.5em;\n  -webkit-transition: all 0.6s;\n  transition: all 0.6s;\n}\n@-webkit-keyframes delay-overflow {\n  from {\n    overflow: auto;\n  }\n}\n@keyframes delay-overflow {\n  from {\n    overflow: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvYXBwLW1scy9zcmMvYXBwL2Fjb3JkZW9uL2Fjb3JkZW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWNvcmRlb24vYWNvcmRlb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQ0Y7QURDRTtFQUNFLGdCQUFBO0FDQ0o7QURFRTtFQUNFLGlDQUFBO0FDQUo7QURHRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQ0RKO0FER0k7RUFDRSxXQUFBO0FDRE47QURLRTtFQUNFLHdCQUFBO0FDSEo7QURLSTtFQUNFLFNBQUE7QUNITjtBRE1JO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUNKTjtBRE9JO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDTE47QURRSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ05OO0FEVUU7RUFDRSxXQUFBO0FDUko7QURZQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtBQ1RGO0FEV0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7QUNUSjtBRGFBO0VBQ0U7SUFDRSxjQUFBO0VDVkY7QUFDRjtBRE9BO0VBQ0U7SUFDRSxjQUFBO0VDVkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Fjb3JkZW9uL2Fjb3JkZW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY2Mtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci10b3A6IHRoaW4gc29saWQgI2U1ZTVlNTtcbiAgYmFja2dyb3VuZDogI2Y3ZjVmODtcbiAgcGFkZGluZzogLjdlbTtcblxuICAmOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICB9XG5cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICNlNWU1ZTU7XG4gIH1cblxuICAmIC5pbWcge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIG1hcmdpbi1yaWdodDogLjVlbTtcblxuICAgICYgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gICYgLmluZm8ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcblxuICAgICYgPiAqIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAmIC50aXRsZSB7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgIGNvbG9yOiAjMzIzMTMzO1xuICAgIH1cblxuICAgICYgLnN1YnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICAgIGNvbG9yOiAjOGE4ODhhO1xuICAgIH1cblxuICAgICYgLnRleHQge1xuICAgICAgZm9udC1zaXplOiAuOGVtO1xuICAgICAgY29sb3I6ICNmM2IyMzY7XG4gICAgfVxuICB9XG5cbiAgJiAuaWNvbiB7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cbn1cblxuLmFjYy1jb250ZW50IHtcbiAgaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwIC41ZW07XG4gIHRyYW5zaXRpb246IGFsbCAuNnM7XG5cbiAgJi5leHBhbmRhYmxlIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZy10b3A6IC41ZW07XG4gICAgcGFkZGluZy1ib3R0b206IC41ZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIC42cztcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGRlbGF5LW92ZXJmbG93IHtcbiAgZnJvbSB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbn1cbiIsIi5hY2Mtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci10b3A6IHRoaW4gc29saWQgI2U1ZTVlNTtcbiAgYmFja2dyb3VuZDogI2Y3ZjVmODtcbiAgcGFkZGluZzogMC43ZW07XG59XG4uYWNjLXNlY3Rpb246Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wOiBub25lO1xufVxuLmFjYy1zZWN0aW9uOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICNlNWU1ZTU7XG59XG4uYWNjLXNlY3Rpb24gLmltZyB7XG4gIHdpZHRoOiAzNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xufVxuLmFjYy1zZWN0aW9uIC5pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYWNjLXNlY3Rpb24gLmluZm8ge1xuICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XG59XG4uYWNjLXNlY3Rpb24gLmluZm8gPiAqIHtcbiAgbWFyZ2luOiAwO1xufVxuLmFjYy1zZWN0aW9uIC5pbmZvIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjb2xvcjogIzMyMzEzMztcbn1cbi5hY2Mtc2VjdGlvbiAuaW5mbyAuc3VidGl0bGUge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogIzhhODg4YTtcbn1cbi5hY2Mtc2VjdGlvbiAuaW5mbyAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjZjNiMjM2O1xufVxuLmFjYy1zZWN0aW9uIC5pY29uIHtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi5hY2MtY29udGVudCB7XG4gIGhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMCAwLjVlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XG59XG4uYWNjLWNvbnRlbnQuZXhwYW5kYWJsZSB7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZy10b3A6IDAuNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjZzO1xufVxuXG5Aa2V5ZnJhbWVzIGRlbGF5LW92ZXJmbG93IHtcbiAgZnJvbSB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AcordeonPage = class AcordeonPage {
    constructor() {
        this.step = { sectionName: null };
    }
    ngOnInit() {
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
};
AcordeonPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-acordeon',
        template: __webpack_require__(/*! raw-loader!./acordeon.page.html */ "./node_modules/raw-loader/index.js!./src/app/acordeon/acordeon.page.html"),
        styles: [__webpack_require__(/*! ./acordeon.page.scss */ "./src/app/acordeon/acordeon.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AcordeonPage);



/***/ })

}]);
//# sourceMappingURL=acordeon-acordeon-module-es2015.js.map