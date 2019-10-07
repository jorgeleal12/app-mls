import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { AcountServicePage } from './acount-service.page';
const routes = [
    {
        path: '',
        component: AcountServicePage
    }
];
let AcountServicePageModule = class AcountServicePageModule {
};
AcountServicePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            PipesModule,
            RouterModule.forChild(routes)
        ],
        declarations: [AcountServicePage]
    })
], AcountServicePageModule);
export { AcountServicePageModule };
//# sourceMappingURL=acount-service.module.js.map