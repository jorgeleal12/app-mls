import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListAcountPage } from './list-acount.page';
import { PipesModule } from '../pipes/pipes.module';
const routes = [
    {
        path: '',
        component: ListAcountPage
    }
];
let ListAcountPageModule = class ListAcountPageModule {
};
ListAcountPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            PipesModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ListAcountPage]
    })
], ListAcountPageModule);
export { ListAcountPageModule };
//# sourceMappingURL=list-acount.module.js.map