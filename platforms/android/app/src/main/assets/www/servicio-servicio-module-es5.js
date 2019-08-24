(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["servicio-servicio-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/servicio/servicio.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/servicio/servicio.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"success\">\n        <ion-buttons slot=\"start\">\n            <ion-icon slot=\"icon-only\" name=\"arrow-back\" (click)=\"back()\"></ion-icon>\n        </ion-buttons>\n\n        <ion-title text-center class=\"center\">Fotografias</ion-title>\n\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"send_image()\">\n                <ion-icon slot=\"icon-only\" name=\"save\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <!--div-->\n    <section class=\"content-images\">\n        <ion-card class=\"add-img\" *ngFor=\"let photo of photos; let i = i; index\" (click)=\"choosePicture(photo)\"\n            [ngStyle]=\"{background: 'url(' + photo.imagenes + ')no-repeat scroll center center / 100% 100%'}\">\n\n            <!-- <img [src]=\"photo.imagenes\" class=\"img\" width=\"200\" height=\"100\" [hidden]=\"photo.hidden_image\" /> -->\n\n            <div class=\"divv\">\n                <ion-icon name=\"md-checkmark-circle\" color=\"light\" size=\"large\" [hidden]=\"photo.send\"\n                    *ngIf=\"photo.state == true\"></ion-icon>\n            </div>\n            <div class=\"divv\">\n                <ion-icon name=\"add-circle\" color=\"light\" size=\"large\" [hidden]=\"photo.hidden\"></ion-icon>\n            </div>\n            <div class=\"divv\">\n                <ion-icon name=\"md-close-circle\" color=\"red\" size=\"large\" [hidden]=\"photo.error\"\n                    *ngIf=\"photo.state == false\"></ion-icon>\n            </div>\n\n\n\n        </ion-card>\n\n        <ion-card class=\"add-img add-pdf\">\n            <ion-card-content>\n                <ion-icon name=\"document\" color=\"light\" size=\"large\"></ion-icon>\n            </ion-card-content>\n        </ion-card>\n\n        <canvas #layout hidden></canvas>\n    </section>\n\n</ion-content>"

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

module.exports = ".center {\n  color: rgba(255, 255, 255, 0.93) !important;\n}\n\n.content-images {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.add-img {\n  width: 40%;\n  height: 180px;\n  display: -webkit-box;\n  display: flex;\n  border-color: #e8e8e8;\n  border-style: solid;\n  border-width: 2px;\n  justify-content: space-around;\n  padding: 2px;\n  z-index: 2;\n}\n\n.imagen {\n  position: relative;\n  background-color: #336699;\n  color: #fff;\n  width: 100px;\n  height: 100px;\n  padding: 3px;\n  text-align: center;\n  z-index: 1;\n}\n\n.padre {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse;\n  height: 100%;\n  width: 100%;\n  background-color: white;\n  border-color: #7bc228;\n  border-style: solid;\n  border-width: 2px;\n}\n\n.add-img .divv:nth-child(2) {\n  -webkit-box-align: center;\n          align-items: center;\n  align-self: center;\n}\n\n.add-img .divv:nth-child(1) {\n  align-self: flex-end;\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n\n.add-img .divv:nth-child(3) {\n  align-self: flex-end;\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n\n.icono {\n  color: lime !important;\n}\n\n.icono1 {\n  color: red !important;\n}\n\n.ion-color-light {\n  --ion-color-base: #7bc228 !important;\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\n}\n\n.ion-color-red {\n  --ion-color-base: #ef0909 !important;\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvYXBwLW1scy9zcmMvYXBwL3NlcnZpY2lvL3NlcnZpY2lvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2VydmljaW8vc2VydmljaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkNBQUE7QUNDRjs7QURFQTtFQUNDLG9CQUFBO0VBQUEsYUFBQTtFQUNDLDZCQUFBO0VBR0QsZUFBQTtBQ0REOztBRE1BO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFFQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDSkY7O0FEa0JBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNmRjs7QURpQkE7RUFFRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDhCQUFBO1VBQUEsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDZkY7O0FEb0JDO0VBQ0MseUJBQUE7VUFBQSxtQkFBQTtFQUNDLGtCQUFBO0FDakJIOztBRG1CQztFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ2hCRDs7QURtQkM7RUFDQyxvQkFBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7QUNoQkY7O0FEc0JBO0VBQ0Usc0JBQUE7QUNuQkY7O0FEcUJBO0VBQ0UscUJBQUE7QUNsQkY7O0FENkJBO0VBQ0Usb0NBQUE7RUFDQSwwRUFBQTtFQUNBLHNFQUFBO0VBQ0EsaUZBQUE7RUFDQSxtRUFBQTtFQUNBLGlFQUFBO0FDMUJGOztBRDRCQTtFQUNFLG9DQUFBO0VBQ0EsMEVBQUE7RUFDQSxzRUFBQTtFQUNBLGlGQUFBO0VBQ0EsbUVBQUE7RUFDQSxpRUFBQTtBQ3pCRiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2lvL3NlcnZpY2lvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkzKSAhaW1wb3J0YW50XG59XG5cbi5jb250ZW50LWltYWdlcyB7XG4gZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcbiAgLy8gLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLy8gLy8gYm94LXNpemluZzogYm9yZGVyLWJveDtcbiBmbGV4LXdyYXA6IHdyYXA7XG4gIC8vIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIFxufVxuXG4uYWRkLWltZyB7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogMTgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItY29sb3I6I2U4ZThlODtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XG4gIHBhZGRpbmc6IDJweDtcbiAgei1pbmRleDogMjtcblxuICAvLyBib3gtc2hhZG93OiAwIC4xMjVyZW0gLjI1cmVtIHJnYmEoMCwgMCwgMCwgLjA3NSkgIWltcG9ydGFudDtcbiAgLy8gbWFyZ2luOiAuNWVtIC41ZW07XG4vLyBwYWRkaW5nOiAwO1xuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIFxuICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM3YmMyMjgsICM4MGMyNTIpO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLy8gYm9yZGVyLWNvbG9yOiAjN2JjMjI4O1xuICAvLyBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAvLyBib3JkZXItd2lkdGg6IDJweDtcbn1cbi5pbWFnZW57XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzNjY5OTtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcGFkZGluZzogM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDE7XG59XG4ucGFkcmV7XG4gIFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItY29sb3I6ICM3YmMyMjg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMnB4O1xufVxuLmRpdnZ7XG4gXG59XG4gLmFkZC1pbWcgLmRpdnY6bnRoLWNoaWxkKDIpe1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgYWxpZ24tc2VsZjogY2VudGVyO1xuIH1cbiAuYWRkLWltZyAuZGl2djpudGgtY2hpbGQoMSl7XG4gYWxpZ24tc2VsZjpmbGV4LWVuZDtcbiBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiB9XG5cbiAuYWRkLWltZyAuZGl2djpudGgtY2hpbGQoMyl7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIH1cbi8vIC5wYWRyZSAuc3BhbjpudGgtY2hpbGQoMyl7XG4vLyAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuLy8gfVxuXG4uaWNvbm8ge1xuICBjb2xvcjogbGltZSFpbXBvcnRhbnQ7XG59XG4uaWNvbm8xIHtcbiAgY29sb3I6IHJlZCFpbXBvcnRhbnQ7XG59XG4vLyAuc3BhbjIge1xuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vICAgd2lkdGg6IDIwcHg7XG4vLyAgIGhlaWdodDogMjBweDtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBib3R0b206IDA7XG4vLyAgIHJpZ2h0OiAwO1xuLy8gfVxuXG4uaW9uLWNvbG9yLWxpZ2h0IHtcbiAgLS1pb24tY29sb3ItYmFzZTogIzdiYzIyOCAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiwgMjQ0LCAyNDUsIDI0OCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdCwgIzAwMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLCAjZDdkOGRhKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCwgI2Y1ZjZmOSkgIWltcG9ydGFudDtcbn1cbi5pb24tY29sb3ItcmVke1xuICAtLWlvbi1jb2xvci1iYXNlOiAjZWYwOTA5ICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiLCAyNDQsIDI0NSwgMjQ4KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LCAjMDAwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2IsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUsICNkN2Q4ZGEpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50LCAjZjVmNmY5KSAhaW1wb3J0YW50O1xufSIsIi5jZW50ZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkzKSAhaW1wb3J0YW50O1xufVxuXG4uY29udGVudC1pbWFnZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uYWRkLWltZyB7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogMTgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1jb2xvcjogI2U4ZThlODtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwYWRkaW5nOiAycHg7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5pbWFnZW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzY2OTk7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiAxO1xufVxuXG4ucGFkcmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItY29sb3I6ICM3YmMyMjg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMnB4O1xufVxuXG4uYWRkLWltZyAuZGl2djpudGgtY2hpbGQoMikge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5hZGQtaW1nIC5kaXZ2Om50aC1jaGlsZCgxKSB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmFkZC1pbWcgLmRpdnY6bnRoLWNoaWxkKDMpIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuLmljb25vIHtcbiAgY29sb3I6IGxpbWUgIWltcG9ydGFudDtcbn1cblxuLmljb25vMSB7XG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1saWdodCB7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICM3YmMyMjggIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IsIDI0NCwgMjQ1LCAyNDgpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QsICMwMDApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYiwgMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSwgI2Q3ZDhkYSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQsICNmNWY2ZjkpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3ItcmVkIHtcbiAgLS1pb24tY29sb3ItYmFzZTogI2VmMDkwOSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiwgMjQ0LCAyNDUsIDI0OCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdCwgIzAwMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLCAjZDdkOGRhKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCwgI2Y1ZjZmOSkgIWltcG9ydGFudDtcbn0iXX0= */"

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
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");








var ServicioPage = /** @class */ (function () {
    function ServicioPage(route, router, imagePicker, transfer, file, loadingController, fileChooser) {
        var _this = this;
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
        this.route.queryParams.subscribe(function (params) {
            _this.data = _this.router.getCurrentNavigation().extras;
            for (var index = 0; index < _this.data.queryParams.photos_service.quantity; index++) {
                _this.photos.push({
                    imagenes: '',
                    id: index,
                    hidden: false,
                    name_photo: _this.data.queryParams.photos_service.name_photo,
                    hidden_image: true,
                    idodi: _this.data.queryParams.data.idodi,
                    tipe: _this.data.queryParams.photos_service.photos_idphotos,
                    contract_idcontract: _this.data.queryParams.data.contract_idcontract,
                    state: true,
                    state_send: false,
                    send: true,
                    error: true,
                });
            }
        });
        // this.file.checkDir(this.file.externalRootDirectory, 'MLS').then(_ =>
        //   console.log('exist')
        // ).catch(err => {
        //   this.dir();
        //   console.log('no exist');
        // });
    }
    ServicioPage.prototype.ngOnInit = function () {
    };
    ServicioPage.prototype.choosePicture = function (photo) {
        // this.respuesta = true;
        // this.falso = true;
        // this.imagenbotton = false;
        //this.rowDataHomeForm = [];
        var _this = this;
        var options = {
            title: "selecionar imagen",
            message: "select 1",
            maximumImagesCount: 1,
            outType: 0,
            width: 1080,
            height: 720,
            quality: 100
        };
        this.imagePicker.getPictures(options).then(function (_imagePath) {
            // this.image = _imagePath;
            var path = _this.win.Ionic.WebView.convertFileSrc(_imagePath[0]);
            photo.imagenes = path;
            // console.log(_imagePath[0])
            // console.log(photo)
            photo.hidden = true;
            photo.hidden_image = false;
            // for (var i = 0; i < this.image.length; i++) {
            // }
        }, function (err) { });
    };
    ServicioPage.prototype.onLoadimage = function (img, id, name_photo, idodi, tipe, contract_idcontract) {
        var _this = this;
        var params = {
            idodi: idodi,
            tipe: tipe,
            contract_idcontract: contract_idcontract
        };
        var canvas = this.canvasRef.nativeElement;
        var context = canvas.getContext("2d");
        var source = new Image();
        source.crossOrigin = "Anonymous";
        source.onload = function () {
            canvas.height = source.height;
            canvas.width = source.width;
            canvas.style.width = "320px";
            canvas.style.height = "300px";
            context.drawImage(source, 0, 0);
            context.font = "50px impact";
            context.textAlign = "right";
            context.fillStyle = "white";
            context.fillText(name_photo, 600, 100);
            var quality = [1.0];
            var imagen = canvas.toDataURL("image/jpeg");
            var fileTransfer = _this.transfer.create();
            // console.log(img, this.imagen);
            var divisiones = img.split("cache/");
            var options = {
                fileKey: "file",
                fileName: divisiones[1],
                headers: {},
                params: { params: params }
            };
            fileTransfer
                .upload(imagen, "http://190.0.33.166:40/laravel-mls/public/api/odi/send_image_movil", options)
                .then(function (data) {
                var json = JSON.parse(data.response);
                if (json.response == true) {
                    // this.response = false;
                    _this.photos[id].state = true;
                    _this.photos[id].state_send = true;
                    _this.photos[id].send = false;
                    // console.log(this.photos[id].state)
                }
                else {
                    // this.falso = false;
                    _this.photos[id].state = false;
                    _this.photos[id].state_send = true;
                    _this.photos[id].error = false;
                    // console.log(this.file.dataDirectory)
                    // console.log(this.file.externalDataDirectory)
                    _this.writeFile(imagen, "My Picture", divisiones[1]);
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
                    _this.falso = false;
                }
            }, function (err) {
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
    };
    ServicioPage.prototype.send_image = function () {
        this.showLoader();
        // let loader = this.loadingCtrl.create({
        //   content: "Please wait..."
        // });
        // loader.present();
        for (var _i = 0, _a = this.photos; _i < _a.length; _i++) {
            var data = _a[_i];
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
    };
    ServicioPage.prototype.showLoader = function () {
        this.loaderToShow = this.loadingController.create({
            message: 'Enviando'
        }).then(function (res) {
            res.present();
            res.onDidDismiss().then(function (dis) {
                console.log('Loading');
            });
        });
        this.hideLoader();
    };
    ServicioPage.prototype.hideLoader = function () {
        var _this = this;
        setTimeout(function () {
            _this.loadingController.dismiss();
        }, 4000);
    };
    ServicioPage.prototype.back = function () {
        this.router.navigateByUrl('menu/menu/servicio');
    };
    //////////////////////////////////////////////////////base 64 store///////////////////////////////////////////////////////////////////////////////////////////
    //here is the method is used to write a file in storage
    ServicioPage.prototype.writeFile = function (base64Data, folderName, fileName) {
        var content = this.getContentbase64Data(base64Data);
        var contentType = this.getContentType(base64Data);
        var DataBlob = this.base64toBlob(content, contentType);
        // here iam mentioned this line this.file.externalRootDirectory is a native pre-defined file path storage. You can change a file path whatever pre-defined method.
        var filePath = this.file.externalRootDirectory + "MLS/";
        this.file
            .writeFile(filePath, fileName, DataBlob, contentType)
            .then(function (success) {
            console.log("File Writed Successfully", success);
        })
            .catch(function (err) {
            console.log("Error Occured While Writing File", err);
        });
    };
    //here is the method is used to get content type of an bas64 data
    ServicioPage.prototype.getContentType = function (base64Data) {
        var block = base64Data.split(";");
        var contentType = block[0].split(":")[1];
        return contentType;
    };
    ServicioPage.prototype.getContentbase64Data = function (base64Data) {
        var block = base64Data.split(";");
        var contentType = block[1].split(",")[1];
        return contentType;
    };
    //here is the method is used to convert base64 data to blob data
    ServicioPage.prototype.base64toBlob = function (b64Data, contentType) {
        contentType = contentType || "";
        var sliceSize = 512;
        var byteCharacters = atob(b64Data);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        var blob = new Blob(byteArrays, {
            type: contentType
        });
        return blob;
    };
    ServicioPage.prototype.dir = function () {
        this.file.createDir(this.file.externalRootDirectory, 'MLS', false).then(function (response) {
            console.log('Directory create' + response);
        }).catch(function (err) {
            console.log('Directory no create' + JSON.stringify(err));
        });
    };
    ServicioPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["ImagePicker"] },
        { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
        { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_6__["FileChooser"] }
    ]; };
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
    return ServicioPage;
}());



/***/ })

}]);
//# sourceMappingURL=servicio-servicio-module-es5.js.map