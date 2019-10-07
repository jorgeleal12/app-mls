import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AlertImagePage } from './alert-image.page';
const routes = [
    {
        path: '',
        component: AlertImagePage
    }
];
let AlertImagePageModule = class AlertImagePageModule {
};
AlertImagePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [AlertImagePage]
    })
], AlertImagePageModule);
export { AlertImagePageModule };
//# sourceMappingURL=alert-image.module.js.map