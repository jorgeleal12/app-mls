import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListAcountPage } from './list-acount.page';
import { PipesModule } from '../pipes/pipes.module';
const routes: Routes = [
  {
    path: '',
    component: ListAcountPage
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
  declarations: [ListAcountPage]
})
export class ListAcountPageModule { }
