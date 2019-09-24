import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },  { path: 'alert-image', loadChildren: './alert-image/alert-image.module#AlertImagePageModule' },

  // { path: 'asignadas', loadChildren: './asignadas/asignadas.module#AsignadasPageModule' },
  // { path: 'builder', loadChildren: './builder/builder.module#BuilderPageModule' },
  // { path: 'images', loadChildren: './images/images.module#ImagesPageModule' },
  // { path: 'sendimages', loadChildren: './sendimages/sendimages.module#SendimagesPageModule' },
  // { path: 'certificate', loadChildren: './certificate/certificate.module#CertificatePageModule' },
  // { path: 'new-certificate', loadChildren: './new-certificate/new-certificate.module#NewCertificatePageModule' },

  // { path: 'materials', loadChildren: './materials/materials.module#MaterialsPageModule' },

  //{ path: 'home', loadChildren: './home/home.module#HomePageModule' },
  //{ path: 'listorder', loadChildren: './listorder/listorder.module#ListorderPageModule' },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
