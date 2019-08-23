(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["servicio-servicio-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/servicio/servicio.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/servicio/servicio.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"success\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n\n        <ion-title text-center class=\"center\">Fotografias</ion-title>\n\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"send_image()\">\n                <ion-icon slot=\"icon-only\" name=\"cloud-upload\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <!--div-->\n    <section class=\"content-images\">\n        <ion-card class=\"add-img\" *ngFor=\"let photo of photos; let i = i; index\" (click)=\"choosePicture(photo)\">\n            <ion-card-content>\n                <img [src]=\"photo.imagenes\" class=\"img\" width=\"200\" height=\"100\" />\n                <ion-icon name=\"add-circle\" [hidden]=\"photo.hidden\" color=\"light\" size=\"large\"></ion-icon>\n            </ion-card-content>\n        </ion-card>\n\n        <ion-card class=\"add-img add-pdf\">\n            <ion-card-content>\n                <ion-icon name=\"document\" color=\"light\" size=\"large\"></ion-icon>\n            </ion-card-content>\n        </ion-card>\n\n        <canvas #layout hidden></canvas>\n    </section>\n\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _servicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicio.page */ "./src/app/servicio/servicio.page.ts");







const routes = [
    {
        path: '',
        component: _servicio_page__WEBPACK_IMPORTED_MODULE_6__["ServicioPage"]
    }
];
let ServicioPageModule = class ServicioPageModule {
};
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



/***/ }),

/***/ "./src/app/servicio/servicio.page.scss":
/*!*********************************************!*\
  !*** ./src/app/servicio/servicio.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  color: rgba(35, 35, 35, 0.65) !important;\n}\n\n.content-images {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n          align-items: center;\n  box-sizing: border-box;\n  flex-wrap: wrap;\n}\n\n.content-images .add-img {\n  width: 30%;\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n  margin: 0.5em 0.5em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  background: -webkit-gradient(linear, left top, right top, from(#7bc228), to(#80c252));\n  background: linear-gradient(to right, #7bc228, #80c252);\n}\n\n.content-images .img {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvYXBwLW1scy9zcmMvYXBwL3NlcnZpY2lvL3NlcnZpY2lvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2VydmljaW8vc2VydmljaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHVCQUFBO1VBQUEsMkJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxVQUFBO0VBQ0EsOERBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EscUZBQUE7RUFBQSx1REFBQTtBQ0NKOztBRENFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvc2VydmljaW8vc2VydmljaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XG4gIGNvbG9yOiByZ2JhKDM1LCAzNSwgMzUsIDAuNjUpICFpbXBvcnRhbnQ7XG59XG5cbi5jb250ZW50LWltYWdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxleC13cmFwOiB3cmFwO1xuXG4gICYgLmFkZC1pbWcge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgYm94LXNoYWRvdzogMCAuMTI1cmVtIC4yNXJlbSByZ2JhKDAsIDAsIDAsIC4wNzUpICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAuNWVtIC41ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzdiYzIyOCwgIzgwYzI1Mik7XG4gIH1cbiAgJiAuaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIC8vICBtYXJnaW46IDFlbSAuNWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzdiYzIyOCwgIzgwYzI1Mik7XG4gIH1cbn1cbiIsIi5jZW50ZXIge1xuICBjb2xvcjogcmdiYSgzNSwgMzUsIDM1LCAwLjY1KSAhaW1wb3J0YW50O1xufVxuXG4uY29udGVudC1pbWFnZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5jb250ZW50LWltYWdlcyAuYWRkLWltZyB7XG4gIHdpZHRoOiAzMCU7XG4gIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMC4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuMDc1KSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAuNWVtIDAuNWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjN2JjMjI4LCAjODBjMjUyKTtcbn1cbi5jb250ZW50LWltYWdlcyAuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");







let ServicioPage = class ServicioPage {
    constructor(route, router, imagePicker, transfer, file, fileChooser) {
        this.route = route;
        this.router = router;
        this.imagePicker = imagePicker;
        this.transfer = transfer;
        this.file = file;
        this.fileChooser = fileChooser;
        this.photos = [];
        this.win = window;
        this.route.queryParams.subscribe(params => {
            this.data = this.router.getCurrentNavigation().extras;
            console.log(this.data);
            for (let index = 0; index < this.data.quantity; index++) {
                this.photos.push({
                    imagenes: '',
                    id: index,
                    hidden: false,
                    name_photo: this.data.name_photo
                });
            }
        });
    }
    ngOnInit() {
    }
    choosePicture(photo) {
        // this.respuesta = true;
        // this.falso = true;
        // this.imagenbotton = false;
        //this.rowDataHomeForm = [];
        let options = {
            title: "selecionar imagen",
            message: "select 1",
            maximumImagesCount: 1,
            outType: 0,
            width: 1920,
            height: 1080,
            quality: 100
        };
        this.imagePicker.getPictures(options).then(_imagePath => {
            // this.image = _imagePath;
            let path = this.win.Ionic.WebView.convertFileSrc(_imagePath[0]);
            photo.imagenes = path;
            console.log(_imagePath[0]);
            console.log(photo);
            photo.hidden = true;
            // for (var i = 0; i < this.image.length; i++) {
            // }
        }, err => { });
    }
    onLoadimage(img, id, name_photo) {
        let canvas = this.canvasRef.nativeElement;
        let context = canvas.getContext("2d");
        let source = new Image();
        source.crossOrigin = "Anonymous";
        source.onload = () => {
            canvas.height = source.height;
            canvas.width = source.width;
            canvas.style.width = "320px";
            canvas.style.height = "300px";
            context.drawImage(source, 0, 0);
            context.font = "50px impact";
            context.textAlign = "right";
            context.fillStyle = "white";
            context.fillText(name_photo, 600, 150);
            let quality = [1.0];
            let imagen = canvas.toDataURL("image/jpeg");
            const fileTransfer = this.transfer.create();
            // console.log(img, this.imagen);
            let divisiones = img.split("cache/");
            let options = {
                fileKey: "file",
                fileName: divisiones[1],
                headers: {},
                params: { params: this.data }
            };
            fileTransfer
                .upload(imagen, "http://192.168.1.57/laravel-mls/public/api/odi/send_image_movil", options)
                .then(data => {
                // var json = JSON.parse(data.response);
                // if (json.response == true) {
                // this.respuesta = false;
                // this.rowDataHomeForm[id].state = true;
                // } else {
                // this.rowDataHomeForm[id].state = false;
                // this.writeFile(imagen, "My Picture", divisiones[1]);
                // this.database
                //   .CreateConse(
                //     this.data.consecutive,
                //     this.file.externalRootDirectory + "SIP/" + divisiones[1],
                //     this.pedido,
                //     divisiones[1]
                //   )
                //   .then(
                //     dataset => {
                //       console.log(dataset);
                //     },
                //     error => { }
                //   );
                // this.falso = false;
                // }
            }, err => {
                console.log(err.body);
                // this.falso = false;
                // this.writeFile(imagen, "My Picture", divisiones[1]);
                // this.database
                //   .CreateConse(
                //     this.data.consecutive,
                //     this.file.externalRootDirectory + "SIP/" + divisiones[1],
                //     this.pedido,
                //     divisiones[1]
                //   )
                //   .then(
                //     dataset => {
                //       console.log(dataset);
                //     },
                //     error => { }
                //   );
                // this.rowDataHomeForm[id].state = false;
            });
        };
        source.src = img;
    }
    send_image() {
        // let loader = this.loadingCtrl.create({
        //   content: "Please wait..."
        // });
        // loader.present();
        console.log(1);
        for (let data of this.photos) {
            this.onLoadimage(data.imagenes, data.id, data.name_photo);
        }
        // loader.dismiss();
        // this.database.GetAllUsers(this.consecutivo).then(
        //   Response => {
        //     console.log(Response);
        //   },
        //   error => {}
        // );
        // this.image = [];
        //let reader = new FileReader();
    }
};
ServicioPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["ImagePicker"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"] },
    { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_6__["FileChooser"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('layout', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ServicioPage.prototype, "canvasRef", void 0);
ServicioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-servicio',
        template: __webpack_require__(/*! raw-loader!./servicio.page.html */ "./node_modules/raw-loader/index.js!./src/app/servicio/servicio.page.html"),
        styles: [__webpack_require__(/*! ./servicio.page.scss */ "./src/app/servicio/servicio.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["ImagePicker"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"],
        _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_6__["FileChooser"]])
], ServicioPage);



/***/ })

}]);
//# sourceMappingURL=servicio-servicio-module-es2015.js.map