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
                path: 'servicio',
                loadChildren: '../servicio/servicio.module#ServicioPageModule'
            }
        ]
    }, {
        path: '',
        redirectTo: '/menu/home'
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
