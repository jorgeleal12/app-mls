import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ServicioPage } from './servicio.page';
const routes = [
    {
        path: '',
        component: ServicioPage
    }
];
let ServicioPageModule = class ServicioPageModule {
};
ServicioPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ServicioPage]
    })
], ServicioPageModule);
export { ServicioPageModule };
//# sourceMappingURL=servicio.module.js.map