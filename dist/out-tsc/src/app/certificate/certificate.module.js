import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CertificatePage } from './certificate.page';
const routes = [
    {
        path: '',
        component: CertificatePage
    }
];
let CertificatePageModule = class CertificatePageModule {
};
CertificatePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [CertificatePage]
    })
], CertificatePageModule);
export { CertificatePageModule };
//# sourceMappingURL=certificate.module.js.map