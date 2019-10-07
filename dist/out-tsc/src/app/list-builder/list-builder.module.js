import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListBuilderPage } from './list-builder.page';
const routes = [
    {
        path: '',
        component: ListBuilderPage
    }
];
let ListBuilderPageModule = class ListBuilderPageModule {
};
ListBuilderPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ListBuilderPage]
    })
], ListBuilderPageModule);
export { ListBuilderPageModule };
//# sourceMappingURL=list-builder.module.js.map