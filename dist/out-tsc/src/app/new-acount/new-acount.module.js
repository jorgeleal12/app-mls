import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from "../app-material.module";
import { IonicModule } from '@ionic/angular';
import { NewAcountPage } from './new-acount.page';
const routes = [
    {
        path: '',
        component: NewAcountPage
    }
];
let NewAcountPageModule = class NewAcountPageModule {
};
NewAcountPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ReactiveFormsModule,
            AppMaterialModule,
            RouterModule.forChild(routes)
        ],
        declarations: [NewAcountPage]
    })
], NewAcountPageModule);
export { NewAcountPageModule };
//# sourceMappingURL=new-acount.module.js.map