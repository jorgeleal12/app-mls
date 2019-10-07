import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from "../app-material.module";
import { IonicModule } from '@ionic/angular';
import { NewMaterialPage } from './new-material.page';
const routes = [
    {
        path: '',
        component: NewMaterialPage
    }
];
let NewMaterialPageModule = class NewMaterialPageModule {
};
NewMaterialPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            AppMaterialModule,
            ReactiveFormsModule,
            RouterModule.forChild(routes)
        ],
        declarations: [NewMaterialPage]
    })
], NewMaterialPageModule);
export { NewMaterialPageModule };
//# sourceMappingURL=new-material.module.js.map