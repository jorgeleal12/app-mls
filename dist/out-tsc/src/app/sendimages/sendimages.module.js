import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SendimagesPage } from './sendimages.page';
const routes = [
    {
        path: '',
        component: SendimagesPage
    }
];
let SendimagesPageModule = class SendimagesPageModule {
};
SendimagesPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [SendimagesPage]
    })
], SendimagesPageModule);
export { SendimagesPageModule };
//# sourceMappingURL=sendimages.module.js.map