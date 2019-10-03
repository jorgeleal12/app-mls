import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppMaterialModule } from "../app-material.module";

import { IonicModule } from '@ionic/angular';

import { NewMaterialPage } from './new-material.page';

const routes: Routes = [
  {
    path: '',
    component: NewMaterialPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppMaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewMaterialPage]
})
export class NewMaterialPageModule { }
