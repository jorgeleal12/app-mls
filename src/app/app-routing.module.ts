import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },  { path: 'listorder', loadChildren: './listorder/listorder.module#ListorderPageModule' },
  { path: 'listorder', loadChildren: './listorder/listorder.module#ListorderPageModule' },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
