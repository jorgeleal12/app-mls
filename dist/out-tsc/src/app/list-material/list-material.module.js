import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListMaterialPage } from './list-material.page';
const routes = [
    {
        path: '',
        component: ListMaterialPage
    }
];
let ListMaterialPageModule = class ListMaterialPageModule {
};
ListMaterialPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ListMaterialPage]
    })
], ListMaterialPageModule);
export { ListMaterialPageModule };
//# sourceMappingURL=list-material.module.js.map