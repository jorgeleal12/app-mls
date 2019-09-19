import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppMaterialModule } from "../app-material.module";
import { IonicModule } from '@ionic/angular';

import { NewCertificatePage } from './new-certificate.page';

const routes: Routes = [
  {
    path: '',
    component: NewCertificatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppMaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewCertificatePage]
})
export class NewCertificatePageModule { }
