(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["servicio-servicio-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/servicio/servicio.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/servicio/servicio.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"success\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n\n        <ion-title text-center class=\"center\">Fotografias</ion-title>\n\n        <ion-buttons slot=\"end\">\n            <ion-button>\n                <ion-icon slot=\"icon-only\" name=\"cloud-upload\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <!--div-->\n    <section class=\"content-images\">\n        <ion-card class=\"add-img\" *ngFor=\"let photo of photos; let i = i; index\" (click)=\"choosePicture(photo)\">\n            <ion-card-content>\n                <ion-icon name=\"add-circle\" color=\"light\" size=\"large\"></ion-icon>\n            </ion-card-content>\n        </ion-card>\n\n        <ion-card class=\"add-img add-pdf\">\n            <ion-card-content>\n                <ion-icon name=\"document\" color=\"light\" size=\"large\"></ion-icon>\n            </ion-card-content>\n        </ion-card>\n    </section>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/servicio/servicio.module.ts":
/*!*********************************************!*\
  !*** ./src/app/servicio/servicio.module.ts ***!
  \*********************************************/
/*! exports provided: ServicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioPageModule", function() { return ServicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _servicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicio.page */ "./src/app/servicio/servicio.page.ts");







var routes = [
    {
        path: '',
        component: _servicio_page__WEBPACK_IMPORTED_MODULE_6__["ServicioPage"]
    }
];
var ServicioPageModule = /** @class */ (function () {
    function ServicioPageModule() {
    }
    ServicioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_servicio_page__WEBPACK_IMPORTED_MODULE_6__["ServicioPage"]]
        })
    ], ServicioPageModule);
    return ServicioPageModule;
}());



/***/ }),

/***/ "./src/app/servicio/servicio.page.scss":
/*!*********************************************!*\
  !*** ./src/app/servicio/servicio.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  color: rgba(35, 35, 35, 0.65) !important;\n}\n\n.content-images {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n          align-items: center;\n  box-sizing: border-box;\n  flex-wrap: wrap;\n}\n\n.content-images .add-img {\n  width: 28%;\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n  margin: 1em 0.5em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  background: -webkit-gradient(linear, left top, right top, from(#7bc228), to(#80c252));\n  background: linear-gradient(to right, #7bc228, #80c252);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvYXBwLW1scy9zcmMvYXBwL3NlcnZpY2lvL3NlcnZpY2lvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2VydmljaW8vc2VydmljaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHVCQUFBO1VBQUEsMkJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxVQUFBO0VBQ0EsOERBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EscUZBQUE7RUFBQSx1REFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2VydmljaW8vc2VydmljaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XG4gIGNvbG9yOiByZ2JhKDM1LCAzNSwgMzUsIDAuNjUpICFpbXBvcnRhbnQ7XG59XG5cbi5jb250ZW50LWltYWdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxleC13cmFwOiB3cmFwO1xuXG4gICYgLmFkZC1pbWcge1xuICAgIHdpZHRoOiAyOCU7XG4gICAgYm94LXNoYWRvdzogMCAuMTI1cmVtIC4yNXJlbSByZ2JhKDAsIDAsIDAsIC4wNzUpICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxZW0gLjVlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjN2JjMjI4LCAjODBjMjUyKTtcbiAgfVxufVxuIiwiLmNlbnRlciB7XG4gIGNvbG9yOiByZ2JhKDM1LCAzNSwgMzUsIDAuNjUpICFpbXBvcnRhbnQ7XG59XG5cbi5jb250ZW50LWltYWdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmNvbnRlbnQtaW1hZ2VzIC5hZGQtaW1nIHtcbiAgd2lkdGg6IDI4JTtcbiAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4wNzUpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMWVtIDAuNWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjN2JjMjI4LCAjODBjMjUyKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/servicio/servicio.page.ts":
/*!*******************************************!*\
  !*** ./src/app/servicio/servicio.page.ts ***!
  \*******************************************/
/*! exports provided: ServicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioPage", function() { return ServicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");




var ServicioPage = /** @class */ (function () {
    function ServicioPage(route, router, imagePicker) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.imagePicker = imagePicker;
        this.photos = [];
        this.route.queryParams.subscribe(function (params) {
            _this.data = _this.router.getCurrentNavigation().extras;
            for (var index = 0; index < _this.data.quantity; index++) {
                _this.photos.push({
                    imagenes: '',
                    id: index,
                    state: true
                });
            }
        });
    }
    ServicioPage.prototype.ngOnInit = function () {
    };
    ServicioPage.prototype.choosePicture = function (photo) {
        console.log(photo);
        // this.respuesta = true;
        // this.falso = true;
        // this.imagenbotton = false;
        //this.rowDataHomeForm = [];
        var options = {
            title: "selecionar imagen",
            message: "select 1",
            maximumImagesCount: 12,
            outType: 0,
            width: 1920,
            height: 1080,
            quality: 100
        };
        this.imagePicker.getPictures(options).then(function (_imagePath) {
            // this.image = _imagePath;
            // for (var i = 0; i < this.image.length; i++) {
            // }
        }, function (err) { });
    };
    ServicioPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["ImagePicker"] }
    ]; };
    ServicioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-servicio',
            template: __webpack_require__(/*! raw-loader!./servicio.page.html */ "./node_modules/raw-loader/index.js!./src/app/servicio/servicio.page.html"),
            styles: [__webpack_require__(/*! ./servicio.page.scss */ "./src/app/servicio/servicio.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["ImagePicker"]])
    ], ServicioPage);
    return ServicioPage;
}());



/***/ })

}]);
//# sourceMappingURL=servicio-servicio-module-es5.js.map