import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ViewDocumentPage } from './view-document.page';
const routes = [
    {
        path: '',
        component: ViewDocumentPage
    }
];
let ViewDocumentPageModule = class ViewDocumentPageModule {
};
ViewDocumentPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ViewDocumentPage]
    })
], ViewDocumentPageModule);
export { ViewDocumentPageModule };
//# sourceMappingURL=view-document.module.js.map