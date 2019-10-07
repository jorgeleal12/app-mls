import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ClientPage } from './client.page';
import { PipesModule } from '../pipes/pipes.module';
const routes = [
    {
        path: '',
        component: ClientPage
    }
];
let ClientPageModule = class ClientPageModule {
};
ClientPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            PipesModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ClientPage]
    })
], ClientPageModule);
export { ClientPageModule };
//# sourceMappingURL=client.module.js.map