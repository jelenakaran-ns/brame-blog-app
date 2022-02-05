import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@modules/shared/components/login/login.component';
import { RouteGuard } from './guards/route.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'articles',
    loadChildren: () => import('@modules/blog/blog.module').then(m => m.BlogModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('@modules/administration/administration.module').then(m => m.AdministrationModule),
    canActivate: [RouteGuard],
  },
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
