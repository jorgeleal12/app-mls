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
                path: 'fotografias',
                loadChildren: '../servicio/servicio.module#ServicioPageModule'
            },
            {
                path: 'asignadas',
                loadChildren: '../asignadas/asignadas.module#AsignadasPageModule'
            },
            {
                path: 'servicio',
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

module.exports = ".aside {\n  background-image: url('bg-aside.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  padding: 1em;\n}\n.aside-content {\n  margin-top: 1em;\n}\n.aside-content .aside-img img {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin-bottom: 0.5em;\n}\n.aside-content .info-text {\n  color: #fff;\n  margin: 0.2em 0;\n  font-size: 1em;\n}\n.aside-item {\n  font-size: 1em;\n  color: #727279;\n}\nion-icon.aside-icon {\n  margin-right: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvYXBwLW1scy9zcmMvYXBwL21lbnUvbWVudS5wYWdlLnNjc3MiLCJzcmMvYXBwL21lbnUvbWVudS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDRTtFQUNFLGVBQUE7QUNDSjtBREVNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDQVI7QURJSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0ZOO0FET0U7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQ0xKO0FEVUE7RUFDRSxtQkFBQTtBQ1BGIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hc2lkZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvYmctYXNpZGUuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwYWRkaW5nOiAxZW07XG5cbiAgJi1jb250ZW50IHtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG5cbiAgICAuYXNpZGUtaW1nIHtcbiAgICAgICYgaW1nIHtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pbmZvLXRleHQge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBtYXJnaW46IC4yZW0gMDtcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xuXG4gICAgfVxuICB9XG5cbiAgJi1pdGVtIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBjb2xvcjogIzcyNzI3OTtcbiAgfVxuXG59XG5cbmlvbi1pY29uLmFzaWRlLWljb257XG4gIG1hcmdpbi1yaWdodDogLjVlbTtcbn1cbiIsIi5hc2lkZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvYmctYXNpZGUuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwYWRkaW5nOiAxZW07XG59XG4uYXNpZGUtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cbi5hc2lkZS1jb250ZW50IC5hc2lkZS1pbWcgaW1nIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cbi5hc2lkZS1jb250ZW50IC5pbmZvLXRleHQge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAwLjJlbSAwO1xuICBmb250LXNpemU6IDFlbTtcbn1cbi5hc2lkZS1pdGVtIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjNzI3Mjc5O1xufVxuXG5pb24taWNvbi5hc2lkZS1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbn0iXX0= */"

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
                        url: './home',
                        icon: 'home'
                    },
                ]
            },
            {
                icon: 'home',
                section: 'Servicios',
                routes: [
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