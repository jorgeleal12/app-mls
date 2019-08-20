import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },  { path: 'asignadas', loadChildren: './asignadas/asignadas.module#AsignadasPageModule' },

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
