import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },  { path: 'send-image', loadChildren: './send-image/send-image.module#SendImagePageModule' },

  // { path: 'view-document', loadChildren: './view-document/view-document.module#ViewDocumentPageModule' },

  // { path: 'new-builder', loadChildren: './new-builder/new-builder.module#NewBuilderPageModule' },
  // { path: 'acount-service', loadChildren: './acount-service/acount-service.module#AcountServicePageModule' },
  // { path: 'client-service', loadChildren: './client-service/client-service.module#ClientServicePageModule' },

  // { path: 'new-material', loadChildren: './new-material/new-material.module#NewMaterialPageModule' },


  // { path: 'city', loadChildren: './city/city.module#CityPageModule' },


  // { path: 'alert-image', loadChildren: './alert-image/alert-image.module#AlertImagePageModule' },
  // { path: 'view-image', loadChildren: './view-image/view-image.module#ViewImagePageModule' },
  // { path: 'list-acount', loadChildren: './list-acount/list-acount.module#ListAcountPageModule' },
  // { path: 'new-acount', loadChildren: './new-acount/new-acount.module#NewAcountPageModule' },

  // { path: 'client', loadChildren: './client/client.module#ClientPageModule' },



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
