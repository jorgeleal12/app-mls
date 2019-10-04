import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppMaterialModule } from "../app-material.module";
import { IonicModule } from '@ionic/angular';

import { NewBuilderPage } from './new-builder.page';

const routes: Routes = [
  {
    path: '',
    component: NewBuilderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AppMaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewBuilderPage]
})
export class NewBuilderPageModule { }
