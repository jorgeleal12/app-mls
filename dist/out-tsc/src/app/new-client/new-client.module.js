import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from "../app-material.module";
import { IonicModule } from '@ionic/angular';
import { NewClientPage } from './new-client.page';
const routes = [
    {
        path: '',
        component: NewClientPage
    }
];
let NewClientPageModule = class NewClientPageModule {
};
NewClientPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            AppMaterialModule,
            ReactiveFormsModule,
            RouterModule.forChild(routes)
        ],
        declarations: [NewClientPage]
    })
], NewClientPageModule);
export { NewClientPageModule };
//# sourceMappingURL=new-client.module.js.map