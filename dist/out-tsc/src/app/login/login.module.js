import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppMaterialModule } from "../app-material.module";
import { LoginPage } from './login.page';
const routes = [
    {
        path: '',
        component: LoginPage
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            AppMaterialModule,
            RouterModule.forChild(routes)
        ],
        declarations: [LoginPage]
    })
], LoginPageModule);
export { LoginPageModule };
//# sourceMappingURL=login.module.js.map