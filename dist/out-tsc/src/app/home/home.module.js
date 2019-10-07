import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from "../app-material.module";
import { HomePage } from './home.page';
let HomePageModule = class HomePageModule {
};
HomePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            AppMaterialModule,
            RouterModule.forChild([
                {
                    path: '',
                    component: HomePage
                }
            ])
        ],
        declarations: [HomePage]
    })
], HomePageModule);
export { HomePageModule };
//# sourceMappingURL=home.module.js.map