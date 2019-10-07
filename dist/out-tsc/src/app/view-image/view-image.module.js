import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ViewImagePage } from './view-image.page';
const routes = [
    {
        path: '',
        component: ViewImagePage
    }
];
let ViewImagePageModule = class ViewImagePageModule {
};
ViewImagePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ViewImagePage]
    })
], ViewImagePageModule);
export { ViewImagePageModule };
//# sourceMappingURL=view-image.module.js.map