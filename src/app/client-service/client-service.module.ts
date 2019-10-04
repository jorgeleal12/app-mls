import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { ClientServicePage } from './client-service.page';

const routes: Routes = [
  {
    path: '',
    component: ClientServicePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClientServicePage]
})
export class ClientServicePageModule { }
