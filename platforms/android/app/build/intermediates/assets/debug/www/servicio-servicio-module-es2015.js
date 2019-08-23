(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["servicio-servicio-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/servicio/servicio.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/servicio/servicio.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"success\">\n        <ion-buttons slot=\"start\">\n            <ion-icon slot=\"icon-only\" name=\"arrow-back\" (click)=\"back()\"></ion-icon>\n        </ion-buttons>\n\n        <ion-title text-center class=\"center\">Fotografias</ion-title>\n\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"send_image()\">\n                <ion-icon slot=\"icon-only\" name=\"save\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <!--div-->\n    <section class=\"content-images\">\n        <ion-card class=\"add-img\" *ngFor=\"let photo of photos; let i = i; index\" (click)=\"choosePicture(photo)\">\n            <ion-card-content>\n                <img [src]=\"photo.imagenes\" class=\"img\" width=\"200\" height=\"100\" [hidden]=\"photo.hidden_image\" />\n                <ion-icon name=\"add-circle\" [hidden]=\"photo.hidden\" color=\"light\" size=\"large\"></ion-icon>\n\n                <span class=\"span\" [hidden]=\"photo.send\" *ngIf=\"photo.state == true\">\n                    <ion-icon class=\"icono\" name=\"md-checkmark-circle\"></ion-icon>\n                </span>\n\n                <span class=\"span\" [hidden]=\"photo.error\" *ngIf=\"photo.state == false\">\n                    <ion-icon class=\"icono1\" name=\"md-close-circle\"></ion-icon>\n                </span>\n            </ion-card-content>\n        </ion-card>\n\n        <ion-card class=\"add-img add-pdf\">\n            <ion-card-content>\n                <ion-icon name=\"document\" color=\"light\" size=\"large\"></ion-icon>\n            </ion-card-content>\n        </ion-card>\n\n        <canvas #layout hidden></canvas>\n    </section>\n\n</ion-content>"

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

module.exports = ".center {\n  color: rgba(255, 255, 255, 0.93) !important;\n}\n\n.content-images {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n          align-items: center;\n  box-sizing: border-box;\n  flex-wrap: wrap;\n}\n\n.content-images .add-img {\n  width: 28%;\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n  margin: 0.5em 0.5em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  background: -webkit-gradient(linear, left top, right top, from(#7bc228), to(#80c252));\n  background: linear-gradient(to right, #7bc228, #80c252);\n}\n\n.content-images .img {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.icono {\n  color: lime !important;\n}\n\n.icono1 {\n  color: red !important;\n}\n\n.span2 {\n  display: block;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvYXBwLW1scy9zcmMvYXBwL3NlcnZpY2lvL3NlcnZpY2lvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2VydmljaW8vc2VydmljaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkNBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHVCQUFBO1VBQUEsMkJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxVQUFBO0VBQ0EsOERBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EscUZBQUE7RUFBQSx1REFBQTtBQ0NKOztBRENFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0FKOztBREtBO0VBQ0Usc0JBQUE7QUNGRjs7QURJQTtFQUNFLHFCQUFBO0FDREY7O0FER0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNpby9zZXJ2aWNpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MykgIWltcG9ydGFudFxufVxuXG4uY29udGVudC1pbWFnZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICAmIC5hZGQtaW1nIHtcbiAgICB3aWR0aDogMjglO1xuICAgIGJveC1zaGFkb3c6IDAgLjEyNXJlbSAuMjVyZW0gcmdiYSgwLCAwLCAwLCAuMDc1KSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogLjVlbSAuNWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM3YmMyMjgsICM4MGMyNTIpO1xuICB9XG4gICYgLmltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAvLyAgbWFyZ2luOiAxZW0gLjVlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM3YmMyMjgsICM4MGMyNTIpO1xuICB9XG59XG5cbi5pY29ubyB7XG4gIGNvbG9yOiBsaW1lIWltcG9ydGFudDtcbn1cbi5pY29ubzEge1xuICBjb2xvcjogcmVkIWltcG9ydGFudDtcbn1cbi5zcGFuMiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59IiwiLmNlbnRlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTMpICFpbXBvcnRhbnQ7XG59XG5cbi5jb250ZW50LWltYWdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmNvbnRlbnQtaW1hZ2VzIC5hZGQtaW1nIHtcbiAgd2lkdGg6IDI4JTtcbiAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4wNzUpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMC41ZW0gMC41ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM3YmMyMjgsICM4MGMyNTIpO1xufVxuLmNvbnRlbnQtaW1hZ2VzIC5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmljb25vIHtcbiAgY29sb3I6IGxpbWUgIWltcG9ydGFudDtcbn1cblxuLmljb25vMSB7XG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbn1cblxuLnNwYW4yIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn0iXX0= */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");








let ServicioPage = class ServicioPage {
    constructor(route, router, imagePicker, transfer, file, loadingController, fileChooser) {
        this.route = route;
        this.router = router;
        this.imagePicker = imagePicker;
        this.transfer = transfer;
        this.file = file;
        this.loadingController = loadingController;
        this.fileChooser = fileChooser;
        this.photos = [];
        this.win = window;
        this.response = true;
        this.falso = true;
        this.route.queryParams.subscribe(params => {
            this.data = this.router.getCurrentNavigation().extras;
            for (let index = 0; index < this.data.queryParams.photos_service.quantity; index++) {
                this.photos.push({
                    imagenes: '',
                    id: index,
                    hidden: false,
                    name_photo: this.data.queryParams.photos_service.name_photo,
                    hidden_image: true,
                    idodi: this.data.queryParams.data.idodi,
                    tipe: this.data.queryParams.photos_service.photos_idphotos,
                    contract_idcontract: this.data.queryParams.data.contract_idcontract,
                    state: true,
                    state_send: false,
                    send: true,
                    error: true,
                });
            }
        });
        this.file.checkDir(this.file.externalRootDirectory, 'MLS').then(_ => console.log('exist')).catch(err => {
            this.dir();
            console.log('no exist');
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
            // console.log(_imagePath[0])
            // console.log(photo)
            photo.hidden = true;
            photo.hidden_image = false;
            // for (var i = 0; i < this.image.length; i++) {
            // }
        }, err => { });
    }
    onLoadimage(img, id, name_photo, idodi, tipe, contract_idcontract) {
        let params = {
            idodi: idodi,
            tipe: tipe,
            contract_idcontract: contract_idcontract
        };
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
            context.fillText(name_photo, 600, 100);
            let quality = [1.0];
            let imagen = canvas.toDataURL("image/jpeg");
            const fileTransfer = this.transfer.create();
            // console.log(img, this.imagen);
            let divisiones = img.split("cache/");
            let options = {
                fileKey: "file",
                fileName: divisiones[1],
                headers: {},
                params: { params: params }
            };
            fileTransfer
                .upload(imagen, "http://190.0.33.166:40/laravel-mls/public/api/odi/send_image_movil", options)
                .then(data => {
                var json = JSON.parse(data.response);
                if (json.response == true) {
                    // this.response = false;
                    this.photos[id].state = true;
                    this.photos[id].state_send = true;
                    this.photos[id].send = false;
                    // console.log(this.photos[id].state)
                }
                else {
                    // this.falso = false;
                    this.photos[id].state = false;
                    this.photos[id].state_send = true;
                    this.photos[id].error = false;
                    // console.log(this.file.dataDirectory)
                    // console.log(this.file.externalDataDirectory)
                    this.writeFile(imagen, "My Picture", divisiones[1]);
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
                    this.falso = false;
                }
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
        this.showLoader();
        // let loader = this.loadingCtrl.create({
        //   content: "Please wait..."
        // });
        // loader.present();
        for (let data of this.photos) {
            if (data.imagenes == '') {
                // console.log(1)
            }
            else {
                //console.log(2)
                if (data.state_send == false) {
                    this.onLoadimage(data.imagenes, data.id, data.name_photo, data.idodi, data.tipe, data.contract_idcontract);
                }
            }
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
    showLoader() {
        this.loaderToShow = this.loadingController.create({
            message: 'Enviando'
        }).then((res) => {
            res.present();
            res.onDidDismiss().then((dis) => {
                console.log('Loading');
            });
        });
        this.hideLoader();
    }
    hideLoader() {
        setTimeout(() => {
            this.loadingController.dismiss();
        }, 4000);
    }
    back() {
        this.router.navigateByUrl('menu/menu/servicio');
    }
    //////////////////////////////////////////////////////base 64 store///////////////////////////////////////////////////////////////////////////////////////////
    //here is the method is used to write a file in storage
    writeFile(base64Data, folderName, fileName) {
        let content = this.getContentbase64Data(base64Data);
        let contentType = this.getContentType(base64Data);
        let DataBlob = this.base64toBlob(content, contentType);
        // here iam mentioned this line this.file.externalRootDirectory is a native pre-defined file path storage. You can change a file path whatever pre-defined method.
        let filePath = this.file.externalRootDirectory + "MLS/";
        this.file
            .writeFile(filePath, fileName, DataBlob, contentType)
            .then(success => {
            console.log("File Writed Successfully", success);
        })
            .catch(err => {
            console.log("Error Occured While Writing File", err);
        });
    }
    //here is the method is used to get content type of an bas64 data
    getContentType(base64Data) {
        let block = base64Data.split(";");
        let contentType = block[0].split(":")[1];
        return contentType;
    }
    getContentbase64Data(base64Data) {
        let block = base64Data.split(";");
        let contentType = block[1].split(",")[1];
        return contentType;
    }
    //here is the method is used to convert base64 data to blob data
    base64toBlob(b64Data, contentType) {
        contentType = contentType || "";
        let sliceSize = 512;
        let byteCharacters = atob(b64Data);
        let byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            let slice = byteCharacters.slice(offset, offset + sliceSize);
            let byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        let blob = new Blob(byteArrays, {
            type: contentType
        });
        return blob;
    }
    dir() {
        this.file.createDir(this.file.externalRootDirectory, 'MLS', false).then(response => {
            console.log('Directory create' + response);
        }).catch(err => {
            console.log('Directory no create' + JSON.stringify(err));
        });
    }
};
ServicioPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["ImagePicker"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
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
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"],
        _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_6__["FileChooser"]])
], ServicioPage);



/***/ })

}]);
//# sourceMappingURL=servicio-servicio-module-es2015.js.map