import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from "../app-material.module";
import { IonicModule } from '@ionic/angular';
import { AcordeonPage } from './acordeon.page';
const routes = [
    {
        path: '',
        component: AcordeonPage
    }
];
let AcordeonPageModule = class AcordeonPageModule {
};
AcordeonPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            AppMaterialModule,
            FormsModule,
            IonicModule,
            ReactiveFormsModule,
            RouterModule.forChild(routes)
        ],
        declarations: [AcordeonPage]
    })
], AcordeonPageModule);
export { AcordeonPageModule };
//# sourceMappingURL=acordeon.module.js.map