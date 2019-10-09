import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from "../app-material.module";
import { IonicModule } from '@ionic/angular';
import { NewCertificatePage } from './new-certificate.page';
const routes = [
    {
        path: '',
        component: NewCertificatePage
    }
];
let NewCertificatePageModule = class NewCertificatePageModule {
};
NewCertificatePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            AppMaterialModule,
            RouterModule.forChild(routes)
        ],
        declarations: [NewCertificatePage]
    })
], NewCertificatePageModule);
export { NewCertificatePageModule };
//# sourceMappingURL=new-certificate.module.js.map