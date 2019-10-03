import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
        ]
    }, {
        path: '',
        redirectTo: 'menu/home'
    }

];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [MenuPage]
})
export class MenuPageModule {
}
