import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
                        url: '/menu/menu/home',
                        icon: 'home'
                    },
                ]
            },
            {
                icon: 'home',
                section: 'Servicios',
                routes: [
                    {
                        title: 'Cliente',
                        url: '/menu/menu/client',
                        icon: 'person-add'
                    },
                ]
            },
            {
                section: 'Administración',
                routes: [
                    {
                        title: 'Materiales',
                        url: '/menu/menu/list-material',
                        icon: 'hammer'
                    },
                    {
                        title: 'Constructores',
                        url: '/menu/menu/list-builder',
                        icon: 'apps'
                    },
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
    close() {
        localStorage.clear();
        this.router.navigate(['/']);
    }
};
MenuPage = tslib_1.__decorate([
    Component({
        selector: 'app-menu',
        templateUrl: './menu.page.html',
        styleUrls: ['./menu.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], MenuPage);
export { MenuPage };
//# sourceMappingURL=menu.page.js.map