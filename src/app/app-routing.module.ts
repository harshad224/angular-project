import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {path:'login', loadChildren:()=> import ('./login/login.module').then(m =>m.LoginModule) },
  {path:'cover', loadChildren:()=> import('./frontcover/frontcover.module').then(m=>m.FrontcoverModule)},
  {path:'nav', loadChildren:()=> import('./navbar/navbar.module').then(m=>m.NavbarModule)}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
