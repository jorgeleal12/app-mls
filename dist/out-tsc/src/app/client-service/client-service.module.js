import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { ClientServicePage } from './client-service.page';
const routes = [
    {
        path: '',
        component: ClientServicePage
    }
];
let ClientServicePageModule = class ClientServicePageModule {
};
ClientServicePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            PipesModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ClientServicePage]
    })
], ClientServicePageModule);
export { ClientServicePageModule };
//# sourceMappingURL=client-service.module.js.map