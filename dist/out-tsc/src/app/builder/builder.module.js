import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BuilderPage } from './builder.page';
import { PipesModule } from '../pipes/pipes.module';
const routes = [
    {
        path: '',
        component: BuilderPage
    }
];
let BuilderPageModule = class BuilderPageModule {
};
BuilderPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            PipesModule,
            RouterModule.forChild(routes)
        ],
        declarations: [BuilderPage]
    })
], BuilderPageModule);
export { BuilderPageModule };
//# sourceMappingURL=builder.module.js.map