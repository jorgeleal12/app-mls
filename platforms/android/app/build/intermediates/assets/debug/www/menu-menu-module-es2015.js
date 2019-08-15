(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/menu/menu.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu/menu.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-split-pane>\n    <ion-menu contentId=\"content\">\n        <ion-header class=\"aside\">\n            <section class=\"aside-content\">\n                <div class=\"aside-img\">\n                    <img class=\"img\" src=\"{{imgUser}}\" alt=\"\">\n                </div>\n                <p class=\"info-text\">{{user}}</p>\n                <p class=\"info-text\">{{mail}}</p>\n            </section>\n        </ion-header>\n\n        <ion-content>\n            <ion-list *ngFor=\"let page of pages\">\n                <ion-list-header *ngIf=\"page.section\" class=\"aside-item\">{{page.section}}</ion-list-header>\n\n                <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of page.routes\">\n                    <ion-item [routerLink]=\"p.url\" routerDirection=\"root\" [class.active-item]=\"selectedPath===p.url\"\n                        class=\"aside-item\" lines=\"none\">\n                        <ion-icon name=\"{{p.icon}}\" *ngIf=\"p.icon\" color=\"medium\" size=\"small\" class=\"aside-icon\">\n                        </ion-icon>\n                        <ion-label>\n                            {{p.title}}\n                        </ion-label>\n                    </ion-item>\n                </ion-menu-toggle>\n\n            </ion-list>\n        </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"content\" main>\n\n    </ion-router-outlet>\n</ion-split-pane>"

/***/ }),

/***/ "./src/app/menu/menu.module.ts":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu.page */ "./src/app/menu/menu.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







const routes = [
    {
        path: 'menu',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_5__["MenuPage"],
        children: [
            {
                path: 'home',
                loadChildren: '../home/home.module#HomePageModule'
            }, {
                path: 'servicio',
                loadChildren: '../servicio/servicio.module#ServicioPageModule'
            },
            {
                path: 'acordeon',
                loadChildren: '../acordeon/acordeon.module#AcordeonPageModule'
            }
        ]
    }, {
        path: '',
        redirectTo: 'menu/home'
    }
];
let MenuPageModule = class MenuPageModule {
};
MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_5__["MenuPage"]]
    })
], MenuPageModule);



/***/ }),

/***/ "./src/app/menu/menu.page.scss":
/*!*************************************!*\
  !*** ./src/app/menu/menu.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".aside {\n  background-image: url('bg-aside.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  padding: 1em;\n}\n.aside-content {\n  margin-top: 1em;\n}\n.aside-content .aside-img img {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin-bottom: 0.5em;\n}\n.aside-content .info-text {\n  color: #fff;\n  margin: 0.2em 0;\n  font-size: 0.9em;\n}\n.aside-item {\n  font-size: 0.8em;\n  color: #727279;\n}\nion-icon.aside-icon {\n  margin-right: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvYXBwLW1scy9zcmMvYXBwL21lbnUvbWVudS5wYWdlLnNjc3MiLCJzcmMvYXBwL21lbnUvbWVudS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDRTtFQUNFLGVBQUE7QUNDSjtBREVNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDQVI7QURJSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNGTjtBRE9FO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDTEo7QURVQTtFQUNFLG1CQUFBO0FDUEYiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFzaWRlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9iZy1hc2lkZS5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBhZGRpbmc6IDFlbTtcblxuICAmLWNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDFlbTtcblxuICAgIC5hc2lkZS1pbWcge1xuICAgICAgJiBpbWcge1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC41ZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmluZm8tdGV4dCB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIG1hcmdpbjogLjJlbSAwO1xuICAgICAgZm9udC1zaXplOiAuOWVtO1xuXG4gICAgfVxuICB9XG5cbiAgJi1pdGVtIHtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgY29sb3I6ICM3MjcyNzk7XG4gIH1cblxufVxuXG5pb24taWNvbi5hc2lkZS1pY29ue1xuICBtYXJnaW4tcmlnaHQ6IC41ZW07XG59XG4iLCIuYXNpZGUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2JnLWFzaWRlLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcGFkZGluZzogMWVtO1xufVxuLmFzaWRlLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG4uYXNpZGUtY29udGVudCAuYXNpZGUtaW1nIGltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG4uYXNpZGUtY29udGVudCAuaW5mby10ZXh0IHtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMC4yZW0gMDtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cbi5hc2lkZS1pdGVtIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgY29sb3I6ICM3MjcyNzk7XG59XG5cbmlvbi1pY29uLmFzaWRlLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/menu/menu.page.ts":
/*!***********************************!*\
  !*** ./src/app/menu/menu.page.ts ***!
  \***********************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let MenuPage = class MenuPage {
    constructor(router) {
        this.router = router;
        this.selectedPath = '';
        this.imgUser = 'https://lh3.googleusercontent.com/-DaZt67ZiMLo/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdcKnHPzSdvF_8nGuW5dbdDc18_iw.CMID/s32-c/photo.jpg';
        this.pages = [
            {
                section: null,
                routes: [
                    {
                        title: 'Inicio',
                        url: '/menu/home',
                        icon: 'home'
                    },
                ]
            },
            {
                icon: 'home',
                section: 'Servicios',
                routes: [
                    {
                        title: 'Acordeon',
                        url: '/menu/acordeon',
                        icon: 'apps'
                    },
                    {
                        title: 'Cuentas',
                        url: '/menu/home',
                        icon: 'briefcase'
                    },
                    {
                        title: 'Servicios',
                        url: '/menu/home',
                        icon: 'bookmark'
                    },
                    {
                        title: 'Certificados',
                        url: '/menu/home',
                        icon: 'document'
                    }
                ]
            },
            {
                section: 'Administración',
                routes: [
                    {
                        title: 'Sedes',
                        url: '/menu/home',
                        icon: 'home'
                    },
                    {
                        title: 'Materiales',
                        url: '/menu/home',
                        icon: 'build'
                    },
                    {
                        title: 'Constructores',
                        url: '/menu/home',
                        icon: 'apps'
                    },
                    {
                        title: 'Cerrar Sesión',
                        icon: 'apps',
                        url: '',
                    }
                ]
            }
        ];
        this.router.events.subscribe((event) => {
            this.selectedPath = event.url;
        });
    }
    ngOnInit() {
        this.user = localStorage.getItem("nombres");
        this.mail = localStorage.getItem("email");
        this.idusers = localStorage.getItem("idusers");
        this.id = localStorage.getItem("id");
    }
};
MenuPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(/*! raw-loader!./menu.page.html */ "./node_modules/raw-loader/index.js!./src/app/menu/menu.page.html"),
        styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/menu/menu.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], MenuPage);



/***/ })

}]);
//# sourceMappingURL=menu-menu-module-es2015.js.map