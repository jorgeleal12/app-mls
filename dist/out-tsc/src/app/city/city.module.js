import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CityPage } from './city.page';
const routes = [
    {
        path: '',
        component: CityPage
    }
];
let CityPageModule = class CityPageModule {
};
CityPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [CityPage]
    })
], CityPageModule);
export { CityPageModule };
//# sourceMappingURL=city.module.js.map