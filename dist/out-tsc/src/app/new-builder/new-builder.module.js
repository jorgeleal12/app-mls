import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from "../app-material.module";
import { IonicModule } from '@ionic/angular';
import { NewBuilderPage } from './new-builder.page';
const routes = [
    {
        path: '',
        component: NewBuilderPage
    }
];
let NewBuilderPageModule = class NewBuilderPageModule {
};
NewBuilderPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ReactiveFormsModule,
            AppMaterialModule,
            RouterModule.forChild(routes)
        ],
        declarations: [NewBuilderPage]
    })
], NewBuilderPageModule);
export { NewBuilderPageModule };
//# sourceMappingURL=new-builder.module.js.map