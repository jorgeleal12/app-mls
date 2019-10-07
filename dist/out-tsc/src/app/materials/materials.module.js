import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MaterialsPage } from './materials.page';
import { PipesModule } from '../pipes/pipes.module';
const routes = [
    {
        path: '',
        component: MaterialsPage
    }
];
let MaterialsPageModule = class MaterialsPageModule {
};
MaterialsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            PipesModule,
            RouterModule.forChild(routes)
        ],
        declarations: [MaterialsPage]
    })
], MaterialsPageModule);
export { MaterialsPageModule };
//# sourceMappingURL=materials.module.js.map