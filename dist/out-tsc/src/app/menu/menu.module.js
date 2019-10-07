import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuPage } from './menu.page';
import { RouterModule } from '@angular/router';
const routes = [
    {
        path: 'menu',
        component: MenuPage,
        children: [
            {
                path: 'home',
                loadChildren: '../home/home.module#HomePageModule'
            }, {
                path: 'fotografias',
                loadChildren: '../servicio/servicio.module#ServicioPageModule'
            },
            {
                path: 'asignadas',
                loadChildren: '../asignadas/asignadas.module#AsignadasPageModule'
            },
            {
                path: 'servicio',
                loadChildren: '../acordeon/acordeon.module#AcordeonPageModule'
            },
            { path: 'client', loadChildren: '../client/client.module#ClientPageModule' },
            { path: 'list-material', loadChildren: '../list-material/list-material.module#ListMaterialPageModule' },
            { path: 'list-builder', loadChildren: '../list-builder/list-builder.module#ListBuilderPageModule' },
        ]
    }, {
        path: '',
        redirectTo: 'menu/home'
    }
];
let MenuPageModule = class MenuPageModule {
};
MenuPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [MenuPage]
    })
], MenuPageModule);
export { MenuPageModule };
//# sourceMappingURL=menu.module.js.map